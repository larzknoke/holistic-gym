import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

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
    <div className="container py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-[0_1.5rem_3rem_rgba(30,34,40,0.08)] md:p-12">
          <p className="mb-3 inline-flex rounded-full bg-[#edf2fc] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#3f78e0]">
            Kurse
          </p>
          <h1 className="!mb-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Unsere Kurse
          </h1>
          <p className="lead !mb-0 text-base leading-[1.8] text-slate-600 md:text-lg">
            Hier findest du alle aktiven Kurse mit direktem Link zur Anmeldung.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {kurse.length === 0 ? (
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-slate-600 shadow-[0_1.5rem_3rem_rgba(30,34,40,0.08)] md:col-span-2">
              Aktuell sind keine aktiven Kurse verfuegbar.
            </div>
          ) : (
            kurse.map((kurs) => (
              <article
                key={kurs.id}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-[0_1.5rem_3rem_rgba(30,34,40,0.08)]"
              >
                <p className="mb-3 inline-flex rounded-full bg-[#edf2fc] px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#3f78e0]">
                  Kurs
                </p>
                <h2 className="mb-3 text-2xl font-bold leading-tight text-slate-900">
                  {kurs.name}
                </h2>
                <p className="mb-6 text-sm leading-7 text-slate-600">
                  {kurs.zeitraum}
                </p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p>Max. Teilnehmer: {kurs.maxTeilnehmer}</p>
                  <Link
                    className="inline-flex items-center rounded-full bg-[#3f78e0] px-5 py-3 font-semibold text-white transition hover:bg-[#345fcb]"
                    href={`/kurse/${kurs.url}`}
                  >
                    Zur Kursseite
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
