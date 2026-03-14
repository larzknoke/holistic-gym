import React from "react";
import Image from "next/image";
export default function Contact() {
  return (
    <section className="wrapper !bg-[#ffffff] angled upper-end lower-start relative border-0 before:top-[-4rem] before:content-[''] before:block before:absolute before:z-0 before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-y-transparent before:border-[#fefefe] before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:content-[''] after:block after:absolute after:z-0 after:border-l-[100vw] after:border-r-transparent after:border-b-[4rem] after:border-y-transparent after:border-[#fefefe] after:border-0 after:border-solid after:right-0">
      <div className="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem] !relative">
        <div className="flex flex-wrap mx-[-15px] !mt-[-80px] xl:mx-[-7.5px] lg:mx-[-7.5px] items-center">
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] !mt-[80px] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full !relative">
            <div
              className="shape bg-dot primary rellax !w-[7rem] !h-[12.5rem] absolute z-[1] opacity-50 bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"
              data-rellax-speed={1}
              style={{ top: "-2rem", left: "-1.9rem" }}
            />
            <div
              className="shape !rounded-[.4rem] !bg-[#edf2fc] rellax xl:block lg:block md:block !absolute z-[1]"
              data-rellax-speed={0}
              style={{
                bottom: "-1.8rem",
                right: "-1.5rem",
                width: "85%",
                height: "90%",
              }}
            />
            <figure className="rounded-[0.4rem] relative z-[2]">
              <Image
                className="rounded-[.4rem]"
                alt="image"
                src="/assets/gym/milon/milon11_quad.jpg"
                width={575}
                height={550}
              />
            </figure>
          </div>
          {/*/column */}
          <div className="lg:w-5/12 xl:w-4/12 xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] w-full flex-[0_0_auto] !mt-[80px] xl:!px-[7.5px] lg:!px-[7.5px] !px-[15px] max-w-full">
            <h2 className="!text-[0.8rem] uppercase inline-flex !leading-[1.35] text-line relative align-top !pl-[1.4rem] !tracking-[0.02rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-gym-primary !text-gym-primary !mb-3">
              Kontakt
            </h2>
            <h2 className="!text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] !mb-8">
              Überzeugt? Lass uns etwas Großartiges zusammen schaffen.
            </h2>
            <div className="flex flex-row">
              <div>
                <div className="icon !text-gym-primary xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]">
                  <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
                </div>
              </div>
              <div>
                <h5 className="!mb-1 !text-[0.95rem] !leading-[1.5]">
                  Adresse
                </h5>
                <address className="not-italic !leading-[inherit] !mb-4">
                  Büttnerweg 4
                  <br className="hidden xl:block lg:block md:block" />
                  Holzminden, Deutschland
                </address>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="icon !text-gym-primary xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]">
                  <i className="uil uil-phone-volume before:content-['\ec50']" />
                </div>
              </div>
              <div>
                <h5 className="!mb-1 !text-[0.95rem] !leading-[1.5]">
                  Telefon
                </h5>
                <p>05531 / 700 344</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div>
                <div className="icon !text-gym-primary xl:!text-[1.4rem] !text-[calc(1.265rem_+_0.18vw)] !mr-6 !mt-[-0.25rem]">
                  <i className="uil uil-envelope before:content-['\eac8']" />
                </div>
              </div>
              <div>
                <h5 className="!mb-1 !text-[0.95rem] !leading-[1.5]">E-mail</h5>
                <p className="!mb-0">
                  <a
                    href="mailto:info@holisic-gym.de"
                    className="!text-[#60697b]"
                  >
                    info@holisic-gym.de
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/*/column */}
        </div>
      </div>
      {/* /.container */}
    </section>
  );
}
