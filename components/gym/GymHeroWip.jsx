"use client";
import ModalVideo from "@/components/common/ModalVideo";
import Image from "next/image";

import TypeWriter from "@/components/common/TypeWriter";
import { useState } from "react";
import Link from "next/link";
export default function GymHeroWip() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="wrapper bg-gym-dark opacity-100 angled lower-start relative border-0 before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-gym-dark before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:content-[''] after:block after:absolute after:z-0 after:border-l-[100vw] after:border-r-transparent after:border-b-[4rem] after:border-y-transparent after:border-gym-dark after:border-0 after:border-solid after:right-0">
        <div className="container pt-7 xl:pt-12 lg:pt-12 md:pt-12 pb-8">
          <div className="flex flex-wrap mx-0 items-center">
            <div
              className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] max-w-full px-0 mt-0 md:mt-12"
              data-cues="slideInDown"
              data-group="page-title"
              data-delay={600}
            >
              <h1 className="!text-[calc(1.375rem_+_1.5vw)] font-bold !leading-[1.15] xl:!text-[2.5rem] !text-white !mb-4">
                Das Gym mit Fokus auf <br />
                <span
                  className="typer !text-gym-secondary whitespace-nowrap"
                  data-delay={100}
                  data-words=""
                >
                  <TypeWriter
                    strings={["Fitness", "Regeneration", "Balance"]}
                  />
                </span>
                <span className="cursor !text-gym-primary" data-owner="typer" />
              </h1>
              <p className="lead !text-[1.2rem] !leading-[1.5] !text-white !mb-7 md:!pr-32 xl:!pr-0 lg:!pr-0 xxl:!pr-20">
                Unser Ziel ist es, Ihre körperliche und geistige Gesundheit zu
                verbessern und ein ausgewogenes Leben zu führen.
              </p>
              <div>
                <Link
                  href={`/signup`}
                  className="btn btn-lg btn-gym !normal-case"
                >
                  HolisticApp
                </Link>
              </div>
            </div>
            {/* /column */}
            <div
              className="lg:w-5/12 xl:w-5/12 w-full flex-[0_0_auto] max-w-full px-0 !mt-[50px] lg:!ml-[8.33333333%] xl:!ml-[8.33333333%] !mb-[-8rem] relative z-[3]"
              data-cues="slideInDown"
            >
              <div className="!relative">
                <a
                  className="btn btn-circle btn-aqua !text-white !bg-gym-primary border-gym-primary hover:text-white hover:bg-gym-primary hover:!border-gym-primary focus:shadow-[rgba(79,152,181,1)] active:!text-[#343f52] active:bg-gym-primary active:border-gym-primary disabled:!text-[#343f52] disabled:bg-gym-primary disabled:border-gym-primary btn-play ripple !mx-auto !mb-6 !absolute !text-[calc(1.355rem_+_1.26vw)] xl:!text-[2.3rem] !w-[3.5rem] !h-[3.5rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] before:!bg-gym-primary after:!bg-gym-primary before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:content-[''] after:block after:absolute after:z-[-1] after:rounded-[50%] after:inset-0 after:[animation-delay:.5s]"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 3,
                  }}
                  onClick={() => setIsOpen(true)}
                >
                  <i className="icn-caret-right !ml-[0.15rem] !relative z-[2] before:content-['\e900'] !text-[calc(1.355rem_+_1.26vw)]" />
                </a>
                <figure>
                  <Image
                    className="!rounded-md"
                    // srcSet="/assets/img/photos/about13@2x.jpg 2x"
                    alt="image"
                    src="/assets/gym/videos/TeaserThumbnailQuad.jpg"
                    width={590}
                    height={650}
                  />
                  <div className=" md:absolute mx-6 -mt-6 md:mt-0 -top-12 right-4 hover:cursor-pointer hover:shadow-lg hover:translate-y-[-0.25rem] transition-all duration-[0.2s] ease-in-out motion-reduce:transition-none bg-gym-danger text-white text-center px-5 py-2 rounded z-[2] text-xl shadow-sm rotate-2 font-bold">
                    Vorrausichtlicher Start: Mai 2026!
                    <span className="text-base block">
                      Profitiere als Gründungsmitglied
                    </span>
                  </div>
                </figure>
              </div>
              {/* /div */}
            </div>
            {/* /column */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>{" "}
      <ModalVideo
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={"/assets/gym/videos/HolisticGymTeaser.mp4"}
      />{" "}
    </>
  );
}
