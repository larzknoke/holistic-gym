import Footer3 from "@/components/footers/Footer3";
import HeaderGymWip from "@/components/headers/HeaderGymWip";
import React from "react";

export const metadata = {
  title:
    "Impressum || HolisticGym | Fitness + Regeneration + Balance - Praxis Humanus | Osteopathie & Physiotherapie",
  description:
    "HolisticGym - Fitness + Regeneration + Balance - Praxis Humanus | Osteopathie & Physiotherapie",
};

export default function ImpressumPage() {
  return (
    <>
      <div className="color-aqua font-thicccboi demo3">
        <div className="font-THICCCBOI text-[.85rem]">
          <div className="grow shrink-0">
            <HeaderGymWip />
            <section className="wrapper !bg-[#ffffff]">
              <div className="container py-14 xl:!py-[6rem] lg:!py-[6rem] md:!py-[6rem]">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="w-full flex gap-5 flex-col  items-center justify-center !px-[15px] mb-10">
                    <h1 className="font-bold text-3xl mb-22 uppercase text-center">
                      Impressum
                    </h1>
                    <div className="rounded-lg bg-white shadow-[0_0.5rem_2rem_rgba(30,34,40,0.08)] p-6 md:p-10">
                      <p style={{ fontSize: "14px", textAlign: "left" }}>
                        Verantwortlich gemäß § 6 TDG und § 10 Abs. III MDStV
                        ist:
                        <br />
                        humanus | Osteopathie &amp; Physiotherapie
                        <br />
                        Bürgermeister-Schrader-Straße 19
                        <br />
                        37603 Holzminden
                        <br />
                        <br />
                        Tel.: 0 5531/700 344
                        <br />
                        Fax: 0 5531/140 923
                        <br />
                        Webseite: www.praxis-humanus.de
                        <br />
                        email: info@praxis-humanus.de
                        <br />
                        <br />
                        <b>Praxisleitung:</b> Kilian Begoin (geb. Harazim)
                        <br />
                        <br />
                        Berufsrechtliche Angaben
                        <br />
                        <br />
                        Die Berufsbezeichnung Physiotherapeut/in wurde in der
                        Bundesrepublik
                        <br />
                        Deutschland verliehen.
                        <br />
                        Die berufsrechtliche Regelung kann unter Link
                        <br />
                        www.physio.de/Zulassung/gesetz-beruf-pt-htm. eingesehen
                        werden.
                        <br />
                        <br />
                        Berufsbezeichnung
                        <br />
                        <br />
                        Die Berufsbezeichnung lautet Physiotherapeut
                        (Deutschland)
                        <br />
                        <br />
                        <strong>Gesetzliche Berufsbezeichnung</strong>
                        <br />
                        <br />
                        <strong>Heilpraktiker (Deutschland)</strong>
                        <br />
                        <br />
                        Als Heilpraktiker tätig auf Grund der „Erlaubnis zur
                        Ausübung der Heilkunde ohne Bestallung“ gemäß § 1 Abs.1
                        des Heilpraktikergesetzes vom 17. Februar 1939.
                        <br />
                        Die Erlaubnis wurde mir vom Gesundheitsamt Holzminden
                        erteilt.
                        <br />
                        <br />
                        <strong>Zuständige Aufsichtsbehörde</strong>
                        <br />
                        <br />
                        Landkreis Holzminden
                        <br />
                        -Gesundheitsamt-
                        <br />
                        Böntalstraße 32
                        <br />
                        37603 Holzminden
                        <br />
                        <br />
                        Fax: 05531/707-400
                        <br />
                        E-Mail: gesundheitsamt@landkreis-holzminden.de
                        <br />
                        <br />
                        <br />
                        © Alle Rechte vorbehalten 2026
                        <br />
                        humanus | Osteopathie &amp; Physiotherapie
                        <br />
                        <br />
                        Alle Rechte vorbehalten. Text, Bilder, Grafiken, Sound,
                        Animationen und Videos sowie deren Anordnung auf dieser
                        Website unterliegen dem Schutz des Urheberrechts und
                        anderer Schutzgesetze. Der Inhalt dieser Website darf
                        nicht zu kommerziellen Zwecken kopiert, verbreitet,
                        verändert oder Dritten zugänglich gemacht werden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Footer3 />
        </div>
      </div>
    </>
  );
}
