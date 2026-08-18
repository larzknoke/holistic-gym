import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function KursePage() {
  const kurse = await prisma.kurs.findMany({
    where: {
      aktiv: true,
      beendet: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold">Kurse</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {kurse.length === 0 ? (
          <p className="text-slate-600">
            Aktuell sind keine aktiven Kurse verfuegbar.
          </p>
        ) : (
          kurse.map((kurs) => (
            <Card key={kurs.id}>
              <CardHeader>
                <CardTitle>{kurs.name}</CardTitle>
                <CardDescription>{kurs.zeitraum}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-700">
                <p>Max. Teilnehmer: {kurs.maxTeilnehmer}</p>
                <Link
                  className="font-medium text-blue-700 underline"
                  href={`/kurse/${kurs.url}`}
                >
                  Zur Kursseite
                </Link>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
