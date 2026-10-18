"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function GymHeroWip() {
  const [isVisionExpanded, setIsVisionExpanded] = useState(false);

  return (
    <>
      <section className="wrapper bg-gym-dark opacity-100 angled lower-start relative border-0 before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-gym-dark before:border-0 before:border-solid before:right-0 after:-bottom-16 after:content-[''] after:block after:absolute after:z-0 after:border-l-[100vw] after:border-r-transparent after:border-b-[4rem] after:border-y-transparent after:border-gym-dark after:border-0 after:border-solid after:right-0">
        <div className="container pt-7 xl:pt-12 lg:pt-12 md:pt-12 pb-8">
          <div className="flex flex-wrap mx-0 items-start">
            <div className="order-2 lg:order-1 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] max-w-full px-0 mt-5 md:mb-0 text-center md:text-left lg:mt-12">
              <h1 className="text-[calc(1.375rem+1.5vw)]! font-bold leading-[1.15]! xl:text-[2.5rem]!  mb-4! text-gym-secondary!">
                Unsere Vision <br />
              </h1>
              <p className="lead text-[1.2rem]! leading-normal! text-white! mb-7! md:pr-32! xl:pr-0! lg:pr-0! xxl:pr-20!">
                Wir kommen beide aus der Therapie und haben über viele Jahre
                eines immer wieder erlebt:{" "}
                <strong className="block mt-1">
                  Gesundheit wird häufig erst dann wichtig, wenn sie nicht mehr
                  selbstverständlich ist.
                </strong>
                <strong className="mt-3 block">
                  Genau das möchten wir verändern.
                </strong>
              </p>
              <div>
                <button
                  type="button"
                  className="btn btn-lg btn-gym tracking-wider!"
                  aria-expanded={isVisionExpanded}
                  aria-controls="vision-details"
                  onClick={() => setIsVisionExpanded((expanded) => !expanded)}
                >
                  {isVisionExpanded
                    ? "Weniger anzeigen"
                    : "Mehr zu unserem Konzept"}
                </button>
                <div
                  id="vision-details"
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none ${isVisionExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  aria-hidden={!isVisionExpanded}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="pt-6 pr-0 md:pr-20 text-white text-left px-4 md:px-0">
                      <p className="mb-5">
                        Mit dem HOListicGym haben wir deshalb bewusst kein
                        klassisches Fitnessstudio geschaffen. Unser Anspruch ist
                        es, Menschen dabei zu begleiten, langfristig stark,
                        beweglich und leistungsfähig zu bleiben - und ihre Zeit
                        dabei möglichst sinnvoll zu investieren.
                      </p>
                      <p className="mb-5">
                        Für uns bedeutet gutes Training nicht einfach mehr
                        Training. Es bedeutet, zu verstehen, wo ein Mensch
                        steht, was sein Körper braucht und welches Ziel er
                        erreichen möchte. Darauf bauen wir Training auf,
                        überprüfen die Entwicklung und passen es immer wieder
                        individuell an.
                      </p>
                      <p className="mb-5">
                        Dabei verbinden wir unsere therapeutische Erfahrung mit
                        moderner Trainingsdiagnostik, intelligentem Training und
                        gezielter Regeneration.
                      </p>
                      <p className="mb-5 font-bold">
                        Und genau darin liegt für uns der Unterschied.
                      </p>
                      <p>
                        Premium bedeutet nicht, einfach mehr anzubieten. Premium
                        bedeutet für uns Qualität, persönliche Begleitung und
                        die Sicherheit, das Richtige für den eigenen Körper zu
                        tun. Denn am Ende geht es nicht darum, heute möglichst
                        viel zu trainieren.
                      </p>
                      <p className="mb-5 font-bold">
                        Es geht darum, auch morgen noch das tun zu können, was
                        einem wichtig ist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] max-w-full px-0 mt-0 lg:mt-16 lg:-mb-32! relative z-3">
              <div className="relative!">
                <figure>
                  <Image
                    className="aspect-3/2 w-full rounded-md! object-cover"
                    alt="Zwei Männer an einem sonnigen Fensterplatz"
                    src="/studio/Zwei-Maenner-am-sonnigen-Fensterplatz.jpg"
                    width={590}
                    height={650}
                  />
                  <Link
                    href="#kurse"
                    className="block md:absolute mx-6 -mt-6 md:mt-0 -top-12 right-9 hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out motion-reduce:transition-none bg-gym-danger text-white! text-center px-2 md:px-8 py-2 rounded z-2 text-base md:text-xl shadow-sm rotate-2 font-bold"
                  >
                    Neue Kurse warten auf Euch!
                    <span className="text-base block">
                      Melde dich jetzt hier an!
                    </span>
                  </Link>
                </figure>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${isVisionExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  aria-hidden={!isVisionExpanded}
                >
                  <div className="min-h-0 overflow-hidden">
                    <Image
                      className={`mt-10 aspect-square w-full rounded-md! object-cover transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${isVisionExpanded ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"}`}
                      alt="Helles, modernes Fitnessstudio mit Milon-Geräten"
                      src="/studio/Helles-modernes-Fitnessstudio-mit-Milon-Geraeten.jpg"
                      width={590}
                      height={650}
                    />
                  </div>
                </div>
              </div>
              {/* /div */}
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
