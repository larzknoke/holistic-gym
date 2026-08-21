import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const dynamic = "force-dynamic";

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
    <p className="rounded-xl border border-slate-200 bg-[#f8fbff] p-4 text-sm leading-7 text-slate-700 shadow-[0_1rem_2rem_rgba(30,34,40,0.05)]">
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
      <div className="container py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-[0_1.5rem_3rem_rgba(30,34,40,0.08)] md:p-12">
          <p className="mb-3 inline-flex rounded-full bg-[#edf2fc] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f78e0]">
            Kurse
          </p>
          <h1 className="!mb-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Kurs nicht gefunden
          </h1>
          <p className="text-base leading-[1.8] text-slate-600">
            Der aufgerufene Kurs existiert nicht.
          </p>
        </div>
      </div>
    );
  }

  const istAusgebucht = kurs._count.teilnehmer >= kurs.maxTeilnehmer;
  const anmeldungOffen = kurs.aktiv && !kurs.beendet && !istAusgebucht;

  return (
    <div className="container py-20 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-[0_1.5rem_3rem_rgba(30,34,40,0.08)] md:p-12">
          <p className="mb-3 inline-flex rounded-full bg-[#edf2fc] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f78e0]">
            Kursdetails
          </p>
          <h1 className="!mb-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            {kurs.name}
          </h1>
          <p className="lead !mb-8 text-base leading-[1.8] text-slate-600 md:text-lg">
            {kurs.zeitraum}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3f78e0]">
                Kapazität
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {kurs._count.teilnehmer} / {kurs.maxTeilnehmer}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Aktuelle Anmeldungen
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#f8fbff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3f78e0]">
                Status
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {anmeldungOffen ? "Offen" : "Geschlossen"}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {anmeldungOffen
                  ? "Die Anmeldung ist aktuell freigeschaltet."
                  : "Dieser Kurs kann im Moment nicht gebucht werden."}
              </p>
            </div>
          </div>
        </section>

        <aside className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-[0_1.5rem_3rem_rgba(30,34,40,0.08)] md:p-12">
          <p className="mb-3 inline-flex rounded-full bg-[#edf2fc] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f78e0]">
            Anmeldung
          </p>
          <h2 className="mb-4 text-2xl font-bold leading-tight text-slate-900">
            Jetzt zum Kurs anmelden
          </h2>
          <StatusMessage status={status} />

          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <p>Max. Teilnehmer: {kurs.maxTeilnehmer}</p>
            <p>Aktuelle Anmeldungen: {kurs._count.teilnehmer}</p>
          </div>

          {anmeldungOffen ? (
            <form action={registerTeilnehmer} className="mt-6 grid gap-4">
              <input type="hidden" name="kursUrl" value={kurs.url} />
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900">
                  Name
                </label>
                <Input name="name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900">
                  Email
                </label>
                <Input name="email" type="email" required />
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input name="bestaetigt" type="checkbox" className="h-4 w-4" />
                Ich bestaetige meine Anmeldung
              </label>
              <div>
                <Button type="submit">Jetzt anmelden</Button>
              </div>
            </form>
          ) : (
            <p className="mt-6 rounded-xl border border-slate-200 bg-[#f8fbff] p-4 text-sm leading-7 text-slate-700">
              Anmeldung ist fuer diesen Kurs aktuell nicht moeglich.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
