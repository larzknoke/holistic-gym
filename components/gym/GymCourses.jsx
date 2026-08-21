import Link from "next/link";

const COURSES = [
  {
    id: "skillcourt",
    title: "Skillcourt – Bewegung, die dich weiterbringt",
    paragraphs: [
      "Schneller reagieren, besser koordinieren und deine Beweglichkeit verbessern: Skillcourt verbindet modernes Training mit Spaß und abwechslungsreichen Übungen. Egal ob zur Leistungssteigerung, für mehr Sicherheit im Alltag oder als Ergänzung zu deinem Training – entdecke, was in dir steckt!",
    ],
    highlight:
      "Jetzt im HolisticGym ausprobieren und neue Bewegungswelten entdecken.",
    icon: "uil-star",
    registrationUrl:
      "mailto:info@holistic-gym.de?subject=Anmeldung%20Skillcourt",
  },
  {
    id: "emp-chair",
    title: "EMP Chair – Effektives Beckenbodentraining",
    paragraphs: [
      "Beckenboden stärken – ganz bequem und ohne großen Zeitaufwand. Der EMP Chair nutzt elektromagnetische Impulse, um die Beckenbodenmuskulatur intensiv zu stimulieren. Eine moderne Möglichkeit für alle, die ihren Beckenboden gezielt trainieren und ihre Lebensqualität unterstützen möchten.",
    ],
    highlight: "Informiere dich jetzt im HolisticGym über den EMP Chair.",
    icon: "uil-heart",
    registrationUrl:
      "mailto:info@holistic-gym.de?subject=Anmeldung%20EMP%20Chair",
  },
  {
    id: "praeventionskurse",
    title: "Präventionskurse – Gesundheit, die sich lohnt!",
    paragraphs: [
      "Mit unseren Präventionskursen im HolisticGym kannst du aktiv etwas für deine Gesundheit tun und gleichzeitig von einer möglichen Bezuschussung durch deine Krankenkasse profitieren.",
      "Milon unterstützt dich dabei, deine Kraft und Fitness gezielt zu verbessern, während YARA den Fokus auf Stressabbau, Entspannung und innere Balance legt. So kannst du Körper und Geist nachhaltig etwas Gutes tun.",
    ],
    highlight:
      "Viele Krankenkassen bezuschussen Präventionskurse – informiere dich jetzt über deine Möglichkeiten und starte im HolisticGym!",
    icon: "uil-rocket",
    registrationUrl:
      "mailto:info@holistic-gym.de?subject=Anmeldung%20Pr%C3%A4ventionskurs",
  },
];

const BUTTON_CLASS =
  "btn btn-primary !text-white uppercase !bg-gym-primary border-gym-primary hover:text-white hover:bg-gym-primary hover:!border-gym-primary active:text-white active:bg-gym-primary active:border-gym-primary hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]";

export default function GymCourses() {
  return (
    <section id="kurse" className="wrapper bg-white">
      <div className="container pt-28 xl:pt-32 lg:pt-32 md:pt-32 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-none px-4 max-w-full mx-auto text-center">
            <h2 className="text-xs uppercase text-[#aab0bc] mb-3 tracking-wide leading-snug">
              Kurse & Angebote
            </h2>
            <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-6 lg:px-10 xl:px-10">
              Gemeinsam aktiv werden
            </h3>
            <p className="lead mb-10 text-[1.05rem] leading-[1.6] text-[#60697b]">
              Entdecke unsere aktuellen Kurse und sichere dir direkt deinen
              Platz.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 mt-[-2rem]">
          {COURSES.map((course, index) => (
            <div
              key={course.id}
              className={`md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-none px-4 max-w-full mt-8 ${
                index === 2 ? "md:ml-[25%] lg:ml-0 xl:ml-0" : ""
              }`}
            >
              <article className="card text-center h-full">
                <div className="card-body flex flex-col items-center h-full px-6 py-6 pb-8 xl:pt-8 xl:px-10 xl:pb-8 lg:pt-8 lg:px-10 lg:pb-8 md:pt-8 md:px-10 md:pb-8">
                  <i
                    className={`uil ${course.icon} text-4xl text-gym-primary mb-3`}
                  />
                  <h4 className="card-title mb-4">{course.title}</h4>
                  <div className="mb-7 text-[#60697b] leading-relaxed">
                    {course.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                    <p className="mt-5 mb-0 font-semibold text-[#343f52]">
                      {course.highlight}
                    </p>
                  </div>
                  <Link
                    href={course.registrationUrl}
                    className={`${BUTTON_CLASS} mt-auto`}
                  >
                    Anmelden
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
