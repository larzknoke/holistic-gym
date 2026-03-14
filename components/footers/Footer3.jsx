"use client";
import React from "react";
import Image from "next/image";
import { socialLinks } from "@/data/socials";
import { footerLinks } from "@/data/footerLinks";
import Link from "next/link";
export default function Footer3() {
  return (
    <footer className="bg-gym-dark opacity-100 !text-[#cacaca]">
      <div className="container pt-28 xl:pt-36 lg:pt-36 md:pt-36 pb-16 xl:pb-20 lg:pb-20 md:pb-20 !px-6">
        <div className="flex flex-wrap mx-[-15px] !mt-[-30px] xl:!mt-0 lg:!mt-0">
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <Image
                className="!mb-4"
                alt="image"
                src="/assets/gym/gym-logo-v3_white.svg"
                width={134}
                height={26}
              />
              <p className="!mb-4">
                © {new Date().getFullYear()} HolisticGym.
                <br />
                Alle Rechte vorbehalten.
              </p>
              <nav className="nav social social-white">
                {socialLinks.map((elm, i) => (
                  <a
                    key={i}
                    className="!text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                    href={elm.href}
                  >
                    <i
                      className={`uil ${elm.icon} before:content-[${elm.unicode}] !text-white text-[1rem]`}
                    />
                  </a>
                ))}
              </nav>
              {/* /.social */}
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <h4 className="widget-title !text-white !mb-3 !text-[1rem] !leading-[1.45]">
                Kontakt
              </h4>
              <address className="xl:!pr-20 xxl:!pr-28 not-italic !leading-[inherit] block !mb-4">
                Büttnerweg 4
                <br />
                37603 Holzminden
              </address>
              <a
                className="!text-[#cacaca] hover:!text-gym-primary"
                href="mailto:info@holistic-gym.de"
              >
                info@holistic-gym.de
              </a>
              <br />
              05531 / 700 344
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
          {/* /column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </footer>
  );
}
