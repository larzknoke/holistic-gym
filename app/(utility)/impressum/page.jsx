import "@/app/globals.css";

import Footer3 from "@/components/footers/Footer3";
import HeaderGymWip from "@/components/headers/HeaderGymWip";

export const metadata = {
  title: "Impressum | HolisticGym",
  description:
    "Impressum des HolisticGym und der Praxis Humanus in Holzminden.",
};

function LegalSection({ title, children }) {
  return (
    <section className="!mb-10 last:!mb-0">
      <h2 className="!mb-4 !text-[1.25rem] font-bold !leading-[1.35] text-[#343f52]">
        {title}
      </h2>
      <div className="leading-[1.8] text-[#60697b]">{children}</div>
    </section>
  );
}

export default function ImpressumPage() {
  return (
    <div className="color-aqua font-thicccboi demo3">
      <div className="font-THICCCBOI text-[.85rem]">
        <div className="grow shrink-0">
          <HeaderGymWip />

          <main>
            <section className="wrapper bg-gym-dark relative overflow-hidden">
              <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20 !text-center relative z-[1]">
                <h1 className="!mb-3 !text-[calc(1.375rem_+_1.5vw)] xl:!text-[2.5rem] font-bold !leading-[1.15] !text-white">
                  Impressum
                </h1>
                <p className="lead !mb-0 !text-[1.05rem] !leading-[1.6] !text-white/80">
                  Rechtliche Informationen
                </p>
              </div>
              <div className="absolute -bottom-16 right-[-3rem] h-56 w-56 rounded-full border-[2rem] border-gym-primary/10" />
            </section>

            <section className="wrapper !bg-white">
              <div className="container py-16 xl:!py-24 lg:!py-24 md:!py-24">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full lg:w-10/12 xl:w-8/12 flex-none !px-4 max-w-full !mx-auto">
                    <div className="!mb-12 border-l-4 border-gym-primary !pl-6">
                      <p className="!mb-2 !text-xs uppercase !text-[#aab0bc] tracking-wide font-semibold">
                        Angaben gemäß § 6 TDG und § 10 Abs. III MDStV
                      </p>
                      <h2 className="!mb-3 !text-[1.45rem] font-bold text-[#343f52]">
                        humanus | Osteopathie &amp; Physiotherapie
                      </h2>
                      <address className="not-italic !mb-4 leading-[1.8] text-[#60697b]">
                        Bürgermeister-Schrader-Straße 19
                        <br />
                        37603 Holzminden
                      </address>
                      <p className="!mb-0 leading-[1.8] text-[#60697b]">
                        Tel.: 05531 / 700 344
                        <br />
                        Fax: 05531 / 140 923
                        <br />
                        Webseite: www.praxis-humanus.de
                        <br />
                        E-Mail: info@praxis-humanus.de
                      </p>
                    </div>

                    <LegalSection title="Praxisleitung">
                      <p className="!mb-0">Kilian Begoin (geb. Harazim)</p>
                    </LegalSection>

                    <LegalSection title="Berufsrechtliche Angaben">
                      <p className="!mb-4">
                        Die Berufsbezeichnung Physiotherapeut/in wurde in der
                        Bundesrepublik Deutschland verliehen.
                      </p>
                      <p className="!mb-0">
                        Die berufsrechtliche Regelung kann unter
                        www.physio.de/Zulassung/gesetz-beruf-pt-htm eingesehen
                        werden.
                      </p>
                    </LegalSection>

                    <LegalSection title="Berufsbezeichnung">
                      <p className="!mb-0">
                        Die Berufsbezeichnung lautet Physiotherapeut
                        (Deutschland).
                      </p>
                    </LegalSection>

                    <LegalSection title="Gesetzliche Berufsbezeichnung">
                      <h3 className="!mb-3 !text-[1rem] font-bold text-[#343f52]">
                        Heilpraktiker (Deutschland)
                      </h3>
                      <p className="!mb-4">
                        Als Heilpraktiker tätig auf Grund der „Erlaubnis zur
                        Ausübung der Heilkunde ohne Bestallung“ gemäß § 1 Abs. 1
                        des Heilpraktikergesetzes vom 17. Februar 1939.
                      </p>
                      <p className="!mb-0">
                        Die Erlaubnis wurde vom Gesundheitsamt Holzminden
                        erteilt.
                      </p>
                    </LegalSection>

                    <LegalSection title="Zuständige Aufsichtsbehörde">
                      <address className="not-italic !mb-4">
                        Landkreis Holzminden
                        <br />
                        Gesundheitsamt
                        <br />
                        Böntalstraße 32
                        <br />
                        37603 Holzminden
                      </address>
                      <p className="!mb-0">
                        Fax: 05531 / 707-400
                        <br />
                        E-Mail: gesundheitsamt@landkreis-holzminden.de
                      </p>
                    </LegalSection>

                    <LegalSection title="Urheberrecht">
                      <p className="!mb-4">
                        © Alle Rechte vorbehalten 2026
                        <br />
                        humanus | Osteopathie &amp; Physiotherapie
                      </p>
                      <p className="!mb-0">
                        Alle Rechte vorbehalten. Text, Bilder, Grafiken, Sound,
                        Animationen und Videos sowie deren Anordnung auf dieser
                        Website unterliegen dem Schutz des Urheberrechts und
                        anderer Schutzgesetze. Der Inhalt dieser Website darf
                        nicht zu kommerziellen Zwecken kopiert, verbreitet,
                        verändert oder Dritten zugänglich gemacht werden.
                      </p>
                    </LegalSection>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
        <Footer3 />
      </div>
    </div>
  );
}
