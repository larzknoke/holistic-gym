import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

async function createKurs(formData) {
  "use server";

  const name = String(formData.get("name") || "").trim();
  const zeitraum = String(formData.get("zeitraum") || "").trim();
  const url = String(formData.get("url") || "")
    .trim()
    .toLowerCase();
  const maxTeilnehmer = Number(formData.get("maxTeilnehmer"));
  const aktiv = formData.get("aktiv") === "on";
  const beendet = formData.get("beendet") === "on";

  if (
    !name ||
    !zeitraum ||
    !url ||
    !Number.isInteger(maxTeilnehmer) ||
    maxTeilnehmer < 1
  ) {
    redirect("/admin/kurse?status=invalid");
  }

  try {
    await prisma.kurs.create({
      data: {
        name,
        zeitraum,
        url,
        maxTeilnehmer,
        aktiv,
        beendet,
      },
    });

    revalidatePath("/admin/kurse");
    redirect("/admin/kurse?status=created");
  } catch (error) {
    if (error?.code === "P2002") {
      redirect("/admin/kurse?status=duplicate");
    }

    redirect("/admin/kurse?status=error");
  }
}

async function deleteKurs(formData) {
  "use server";

  const id = Number(formData.get("id"));

  if (!Number.isInteger(id)) {
    redirect("/admin/kurse?status=invalid");
  }

  try {
    await prisma.kurs.delete({
      where: { id },
    });

    revalidatePath("/admin/kurse");
    redirect("/admin/kurse?status=deleted");
  } catch {
    redirect("/admin/kurse?status=error");
  }
}

function StatusMessage({ status }) {
  if (!status) return null;

  const map = {
    created: "Kurs wurde angelegt.",
    deleted: "Kurs wurde gelöscht.",
    duplicate: "Die URL ist bereits vergeben.",
    invalid: "Bitte prüfe alle Eingaben.",
    error: "Es ist ein Fehler aufgetreten.",
  };

  const message = map[status];

  if (!message) return null;

  return (
    <p className="rounded border bg-white p-3 text-sm text-slate-700">
      {message}
    </p>
  );
}

export default async function AdminKursePage({ searchParams }) {
  const params = await searchParams;
  const status = typeof params?.status === "string" ? params.status : "";

  const kurse = await prisma.kurs.findMany({
    include: {
      _count: {
        select: {
          teilnehmer: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Kurse verwalten</CardTitle>
          <CardDescription>
            Hier kannst du Kurse anlegen und löschen.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StatusMessage status={status} />
          <form action={createKurs} className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input name="name" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Zeitraum</label>
              <Input
                name="zeitraum"
                required
                placeholder="z. B. Sept - Nov 2026"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">URL</label>
              <Input
                name="url"
                required
                placeholder="z. B. functional-fitness-herbst"
                pattern="^[a-z0-9-]+$"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Max. Teilnehmer</label>
              <Input name="maxTeilnehmer" type="number" min="1" required />
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                name="aktiv"
                type="checkbox"
                defaultChecked
                className="h-4 w-4"
              />
              Aktiv
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input name="beendet" type="checkbox" className="h-4 w-4" />
              Beendet
            </label>
            <div className="md:col-span-2">
              <Button type="submit">Kurs anlegen</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alle Kurse</CardTitle>
          <CardDescription>
            Übersicht aller angelegten Kurse inklusive Teilnehmeranzahl.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Zeitraum</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Max.</TableHead>
                <TableHead>Teilnehmer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aktion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kurse.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-slate-500">
                    Noch keine Kurse vorhanden.
                  </TableCell>
                </TableRow>
              ) : (
                kurse.map((kurs) => (
                  <TableRow key={kurs.id}>
                    <TableCell>{kurs.name}</TableCell>
                    <TableCell>{kurs.zeitraum}</TableCell>
                    <TableCell>/kurse/{kurs.url}</TableCell>
                    <TableCell>{kurs.maxTeilnehmer}</TableCell>
                    <TableCell>{kurs._count.teilnehmer}</TableCell>
                    <TableCell>
                      {kurs.aktiv ? "Aktiv" : "Inaktiv"} /{" "}
                      {kurs.beendet ? "Beendet" : "Laufend"}
                    </TableCell>
                    <TableCell className="text-right">
                      <form action={deleteKurs}>
                        <input type="hidden" name="id" value={kurs.id} />
                        <Button type="submit" variant="destructive">
                          Löschen
                        </Button>
                      </form>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
