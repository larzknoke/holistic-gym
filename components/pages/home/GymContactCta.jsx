import Image from "next/image";

const BUTTON_CLASS =
  "btn btn-primary text-white uppercase bg-gym-primary! border-gym-primary hover:text-white hover:bg-gym-primary hover:border-gym-primary! active:text-white active:bg-gym-primary active:border-gym-primary hover:-translate-y-0.6 hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]";

export default function GymContactCta() {
  return (
    <section id="beratung" className="wrapper bg-white">
      <div className="container pt-10 xl:pt-28 lg:pt-28 md:pt-28 pb-8 xl:pb-0 lg:pb-0 md:pb-20">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-10/12 xl:w-10/12 w-full flex-none px-4 max-w-full mx-auto text-center">
            <div className="p-5 relative overflow-hidden rounded bg-[linear-gradient(135deg,rgba(24,120,95,0.1),rgba(24,120,95,0.03))] border border-[rgba(24,120,95,0.2)] lg:flex lg:items-stretch text-center lg:text-left">
              <div className="hidden lg:block lg:w-5/12 relative min-h-90">
                <Image
                  src="/studio/Gemeinsame-Tablet-Beratung-im-warmen-Studio.jpg"
                  alt="Gemeinsame Beratung am Tablet im HolisticGym"
                  fill
                  sizes="(min-width: 1024px) 40vw, 0px"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden px-4 py-6 sm:p-8 lg:p-12 lg:w-7/12 flex flex-col justify-center">
                <Image
                  src="/assets/gym/gym-circle.svg"
                  alt=""
                  aria-hidden="true"
                  width={320}
                  height={320}
                  className="w-48 h-48 sm:w-80 sm:h-80 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60 brightness-0 invert pointer-events-none select-none"
                />
                <div className="relative z-1">
                  <i className="uil uil-comments-alt text-4xl text-gym-primary"></i>
                  <h3 className="mt-2! mb-3! text-[1.35rem]! lg:text-[1.8rem]! font-bold">
                    Interesse oder Fragen?
                  </h3>
                  <p className="mb-3! text-[#4b5563] text-base sm:text-lg">
                    Wir besprechen gerne persönlich deine Anliegen und unsere
                    Lösungsansätze dafür.
                  </p>
                  <p className="mb-6! text-[#4b5563] text-base sm:text-lg">
                    Vereinbare unverbindlich und kostenlos einen
                    Beratungstermin.
                  </p>
                  <div>
                    <a
                      href="mailto:info@holistic-gym.de?subject=Beratungstermin"
                      className={BUTTON_CLASS}
                    >
                      Kontakt aufnehmen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
