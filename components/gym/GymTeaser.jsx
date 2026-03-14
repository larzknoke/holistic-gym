import React from "react";
import Image from "next/image";
export default function GymTeaser() {
  return (
    <section className="wrapper !bg-[#ffffff]" id="konzept">
      <div className="container pt-36 md:pt-[12.5rem] pb-24 md:pb-32">
        <div className="flex flex-wrap">
          <div className="md:w-6/12 w-full flex-[0_0_auto] !px-[15px] max-w-full">
            <h2 className="!text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top !pl-[1.4rem] !tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-gym-primary !text-gym-primary !mb-3">
              Das Konzept
            </h2>
            <h3 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-9">
              Hier entsteht etwas Neues
            </h3>
            <p>
              Mit dem <strong>HolisticGym</strong> entsteht ein{" "}
              <strong>Trainingskonzept</strong>, das Bewegung neu denkt. Wir
              verbinden moderne Trainingssysteme, funktionelles Training und
              medizinisch-therapeutische Expertise zu einem ganzheitlichen
              Ansatz für mehr Fitness, Regeneration und Balance.
            </p>
            <p>
              In Kooperation mit der <strong>Praxis humanus</strong> begleiten
              Trainerinnen, Trainer und Therapeut*innen <strong>DEIN</strong>{" "}
              Training – individuell, sicher und zielgerichtet.
            </p>
            <p>
              Ob Gewichtsreduktion, Training bei orthopädischen Problemen, nach
              Verletzung oder Operation und für ambitionierte Sportler oder für
              Menschen, die ihre Gesundheit nachhaltig stärken wollen – bei uns
              steht der <strong>Mensch im Mittelpunkt.</strong>
            </p>
            <p>
              Im zunehmenden Alter bekommt <strong>Bewegung</strong> eine
              besondere Bedeutung. Sie ist nicht nur Training, sondern vielmehr
              die Grundlage für Selbstständigkeit, Stabilität und
              Lebensqualität. Durch die medizinisch-therapeutische Begleitung
              und intuitive Bedienung gelingt auch das Training in den
              fortgeschrittenen Lebensjahren.
            </p>
            <p>
              Ergänzt durch Rehasport, Yoga und regenerative Trainingsformen
              entsteht ein Ort für nachhaltige Entwicklung von Körper, Geist und
              Balance. <strong>Für jeden.</strong>
            </p>
            <h3 className="underline underline-offset-3">
              HolisticGym – Wenn du trainierst, dann richtig
            </h3>
          </div>
          <div className="md:w-6/12 w-full  flex-[0_0_auto] xl:!px-[35px] lg:!px-[20px] !px-[15px] !mt-[50px] max-w-full !relative xl:!order-2 lg:!order-2">
            <div
              className="shape bg-dot primary bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] rellax !w-[6rem] !h-[10rem] absolute z-[1] opacity-50"
              data-rellax-speed={1}
              style={{ top: "2rem", left: "4rem" }}
            />
            <div className="flex flex-wrap !relative overlap-grid-2">
              <div className="item xl:w-[70%] xl:z-[3] xl:ml-[30%] xl:!mt-0 lg:w-[70%] lg:z-[3] lg:ml-[30%] lg:!mt-0 md:w-[70%] md:z-[3] md:ml-[30%] md:!mt-0">
                <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                  <Image
                    className="!rounded-[.4rem]"
                    alt="image"
                    src="/assets/gym/milon/turm.jpg"
                    width={1000}
                    height={1000}
                  />
                </figure>
              </div>
              <div className="item xl:w-[55%] xl:!mt-[-45%] xl:z-[4] xl:ml-0 lg:w-[55%] lg:!mt-[-45%] lg:z-[4] lg:ml-0 md:w-[55%] md:!mt-[-45%] md:z-[4] md:ml-0">
                <figure className="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative">
                  <Image
                    className="!rounded-[.4rem]"
                    alt="image"
                    src="/assets/gym/milon/milon1.jpg"
                    width={800}
                    height={1200}
                  />
                </figure>
              </div>
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
