import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function GymTeaser2() {
  return (
    <section className="wrapper !bg-gym-primary angled lower-start">
      <div className="container py-20 px-20">
        <div className="flex flex-wrap mx-[-15px] !mb-5 gap-12 px-6">
          <div className="md:w-10/12 lg:w-10/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center">
            <div className="flex flex-row items-center justify-center gap-2">
              <Image
                className="w-80 h-80 absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 opacity-10"
                src="/assets/gym/gym-circle.svg"
                alt="Gym Circle"
                width={32}
                height={32}
              />
              <i className="uil uil-shovel mb-2 text-2xl before:content-['\e83e'] text-white" />
              <h3 className=" !text-white">Der Start</h3>
            </div>
            <h1 className="font-bold uppercase !text-white !tracking-wide !text-3xl">
              Im Mai beginnt der erste Schritt.
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-12 w-full justify-center items-start">
            <div className="w-full md:w-6/12  text-white text-balance">
              <p>
                Mit dem HOListicGym starten wir mit einem innovativen und
                hochfunktionellen Trainingsbereich auf Basis des Milon-Systems –
                digital gesteuert, effizient und präzise auf dein Training
                abgestimmt.
              </p>

              <p>
                Dieser erste Trainingsbereich ist der Auftakt zu einem größeren
                Projekt: dem zukünftigen Therapie- und Trainingszentrum, welches
                derzeit entsteht.
              </p>

              <p>Schon jetzt kannst du Teil dieser Entwicklung werden.</p>

              <p>
                Als Gründungs- oder Premieremitglied gehörst du zu den ersten,
                die das neue Trainingskonzept erleben und von exklusiven
                Vorteilen profitieren.
              </p>

              <p className="underline underline-offset-3">
                <strong>Die Anzahl der Plätze ist begrenzt.</strong>
              </p>

              <p>
                Lass dich jetzt auf die Interessenliste setzen und sichere dir
                frühzeitig deinen Platz.
              </p>
              <Link
                href={`mailto:info@holistic-gym.de`}
                className="btn btn-lg btn-gym-secondary  mt-5"
              >
                Jetzt anmelden
              </Link>
            </div>
            <div className="w-full md:w-6/12 relative">
              <Image
                className="!rounded-md w-full max-w-full h-auto"
                src="/assets/gym/villa/Villa2_web.jpg"
                alt="Villa"
                width={1600}
                height={632}
              />
              <div className="-z-10 shape bg-white/10 rounded-md h-full top-4 left-3 w-full absolute"></div>
            </div>
          </div>
          {/* /column */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
  );
}
