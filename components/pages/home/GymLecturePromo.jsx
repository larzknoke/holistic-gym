"use client";

import { useState } from "react";
import Image from "next/image";
import GymLectureModal from "@/components/pages/home/GymLectureModal";

const LECTURE_IMAGES = [
  {
    src: "/vortrag/Vortrag_Huelsduenker_1.jpeg",
    alt: "Einladung zum Vortrag mit Professor Thorben Hülsdünker",
  },
  {
    src: "/vortrag/Vortrag_Huelsduenker_2.jpeg",
    alt: "Beschreibung des Vortrags über kognitives Training",
  },
  {
    src: "/vortrag/Vortrag_Huelsduenker_3.jpeg",
    alt: "Kurzvita von Professor Thorben Hülsdünker",
  },
];

export default function GymLecturePromo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const openModal = (index = 0) => {
    setInitialImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="wrapper bg-[#f7fafc]OFF mt-24">
      <div className="container py-14 xl:py-16 lg:py-16 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-xs uppercase text-[#aab0bc] mb-3 tracking-wide leading-snug">
            Event Highlight
          </h2>
          <h3 className="text-[calc(1.28rem+0.6vw)] font-bold xl:text-[1.75rem] leading-[1.3]">
            Vortrag im HolisticGym Netzwerk
          </h3>
        </div>

        <div className="rounded bg-[linear-gradient(135deg,rgba(24,120,95,0.12),rgba(24,120,95,0.04))] border border-[rgba(24,120,95,0.2)] p-6 lg:p-8">
          <div className="flex flex-wrap -mx-4 items-start lg:items-center">
            <div className="w-full lg:w-5/12 px-4">
              <button
                type="button"
                onClick={() => openModal(0)}
                className="group relative block w-full rounded border border-[rgba(24,120,95,0.14)] overflow-hidden bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gym-primary"
                aria-label="Vortragsbild in voller Ansicht anzeigen"
              >
                <div className="relative aspect-3/4 w-full">
                  <Image
                    src={LECTURE_IMAGES[0].src}
                    alt={LECTURE_IMAGES[0].alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#343f52]">
                  Bildgalerie öffnen
                </span>
              </button>
            </div>

            <div className="w-full lg:w-7/12 px-4 mt-6 lg:mt-0">
              <div className="bg-white rounded border border-[rgba(24,120,95,0.14)] p-6 lg:p-7">
                <div className="inline-block mb-4 px-3 py-1 pb-0.5 rounded text-[0.75rem] font-semibold uppercase tracking-wide bg-gym-primary text-white">
                  Vortrag
                </div>
                <h4 className="text-[1.45rem] leading-tight font-bold text-[#343f52] mb-3">
                  Einladung Vortrag "Professor Thorben Hülsdünker"
                </h4>
                <p className="text-[#4b5563] leading-relaxed mb-5">
                  Geistig Fit ein Leben lang - warum wir unser Gehirn trainieren
                  sollten und welches Training wirklich funktioniert. Der
                  Vortrag ist kostenlos und für alle Interessierten offen – auch
                  für Nicht-Mitglieder.
                </p>

                <ul className="pl-0 list-none mb-0 text-left space-y-2 text-[#343f52]">
                  <li>
                    <span className="font-semibold">Datum:</span> Dienstag, 07.
                    Oktober 2026, 19:00 Uhr
                  </li>
                  <li>
                    <span className="font-semibold">Dauer:</span> ca. 1,5 Std.
                  </li>
                  <li>
                    <span className="font-semibold">Eintritt:</span> kostenlos
                  </li>
                  <li>
                    <span className="font-semibold">Zielgruppe:</span> alle
                    Interessierten, nicht nur Mitglieder
                  </li>
                  <li>
                    <span className="font-semibold">Wo:</span> CreateHub,
                    Holzminden
                  </li>
                </ul>

                <p className="mt-5 mb-0 text-[#4b5563] leading-relaxed">
                  Inklusive Vorwort von Kilian Begoin und Georg Röske vom
                  HolisticGym.
                </p>

                <button
                  type="button"
                  onClick={() => openModal(0)}
                  className="btn btn-primary text-white! uppercase bg-gym-primary! border-gym-primary! hover:text-white! hover:bg-gym-primary! hover:border-gym-primary! active:text-white! active:bg-gym-primary! active:border-gym-primary! mt-8  "
                >
                  Weitere Informationen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GymLectureModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={LECTURE_IMAGES}
        initialIndex={initialImageIndex}
      />
    </section>
  );
}
