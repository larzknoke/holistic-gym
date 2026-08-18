import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

async function registerTeilnehmer(formData) {
  "use server";

  const kursUrl = String(formData.get("kursUrl") || "")
    .trim()
    .toLowerCase();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "")
    .trim()
    .toLowerCase();
  const bestaetigt = formData.get("bestaetigt") === "on";

  if (!kursUrl || !name || !email) {
    redirect(`/kurse/${kursUrl}?status=invalid`);
  }

  const kurs = await prisma.kurs.findUnique({
    where: { url: kursUrl },
  });

  if (!kurs || !kurs.aktiv || kurs.beendet) {
    redirect(`/kurse/${kursUrl}?status=closed`);
  }

  const anzahl = await prisma.teilnehmer.count({
    where: {
      kursId: kurs.id,
    },
  });

  if (anzahl >= kurs.maxTeilnehmer) {
    redirect(`/kurse/${kursUrl}?status=full`);
  }

  await prisma.teilnehmer.create({
    data: {
      name,
      email,
      bestaetigt,
      kursId: kurs.id,
    },
  });

  revalidatePath(`/kurse/${kursUrl}`);
  redirect(`/kurse/${kursUrl}?status=success`);
}

function StatusMessage({ status }) {
  if (!status) return null;

  const map = {
    success: "Deine Anmeldung wurde gespeichert.",
    invalid: "Bitte alle Felder korrekt ausfuellen.",
    closed: "Dieser Kurs ist nicht mehr zur Anmeldung freigegeben.",
    full: "Dieser Kurs ist bereits ausgebucht.",
  };

  const message = map[status];

  if (!message) return null;

  return (
    <p className="rounded border bg-white p-3 text-sm text-slate-700">
      {message}
    </p>
  );
}

export default async function KursDetailPage({ params, searchParams }) {
  const routeParams = await params;
  const query = await searchParams;
  const kursUrl = routeParams["kurs-url"];
  const status = typeof query?.status === "string" ? query.status : "";

  const kurs = await prisma.kurs.findUnique({
    where: {
      url: String(kursUrl).toLowerCase(),
    },
    include: {
      _count: {
        select: {
          teilnehmer: true,
        },
      },
    },
  });

  if (!kurs) {
    return (
      <div className="mx-auto w-full max-w-3xl px-4 py-10">
        <Card>
          <CardHeader>
            <CardTitle>Kurs nicht gefunden</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Der aufgerufene Kurs existiert nicht.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const istAusgebucht = kurs._count.teilnehmer >= kurs.maxTeilnehmer;
  const anmeldungOffen = kurs.aktiv && !kurs.beendet && !istAusgebucht;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>{kurs.name}</CardTitle>
          <CardDescription>{kurs.zeitraum}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-700">
            Max. Teilnehmer: {kurs.maxTeilnehmer}
          </p>
          <p className="text-sm text-slate-700">
            Aktuelle Anmeldungen: {kurs._count.teilnehmer}
          </p>
          <StatusMessage status={status} />

          {anmeldungOffen ? (
            <form action={registerTeilnehmer} className="grid gap-4">
              <input type="hidden" name="kursUrl" value={kurs.url} />
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input name="name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input name="email" type="email" required />
              </div>
              <label className="flex items-center gap-2 text-sm">
                <input name="bestaetigt" type="checkbox" className="h-4 w-4" />
                Ich bestaetige meine Anmeldung
              </label>
              <div>
                <Button type="submit">Jetzt anmelden</Button>
              </div>
            </form>
          ) : (
            <p className="rounded border bg-slate-50 p-3 text-sm text-slate-700">
              Anmeldung ist fuer diesen Kurs aktuell nicht moeglich.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
