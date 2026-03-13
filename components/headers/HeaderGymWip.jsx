import React from "react";
import Image from "next/image";
import Nav2 from "./Nav2";
import Link from "next/link";
import { socialLinks } from "@/data/socials";

export default function HeaderGymWip() {
  return (
    <header className="relative wrapper !bg-[#edf2fc]">
      <div className="bg-gym-primary p-1 w-full">
        <div className="container flex flex-row items-center justify-center md:justify-between">
          <div className="text-white font-bold flex flex-row items-center gap-1">
            <i className="uil uil-exclamation-circle"></i>
            Neueröffnung: Mai 2026
          </div>
          <div className="flex-row gap-5 text-xs hidden md:flex">
            <div className="flex flex-row gap-1">
              <div>
                <div className="icon !text-white">
                  <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
                </div>
              </div>
              <div>
                <address className="not-italic !leading-[inherit] text-white">
                  Büttnerweg 4, 37603 Holzminden
                </address>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <div>
                <div className="icon !text-white">
                  <i className="uil uil-phone-volume before:content-['\ec50']" />
                </div>
              </div>
              <div>
                <span className="!text-white">05531 / 123456</span>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <div>
                <div className="icon !text-white">
                  <i className="uil uil-envelope before:content-['\eac8']" />
                </div>
              </div>
              <div>
                <p className="!mb-0">
                  <a href="mailto:info@holistic-gym.de" className="!text-white">
                    info@holistic-gym.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="pt-8 md:pt-12 pb-8 center-logo  bg-gym-dark">
        <div className="container justify-around md:justify-between items-start md:items-center w-full flex flex-row">
          <Image
            className="logo-light w-16 md:w-32 opacity-50"
            alt="image"
            src="/assets/gym/humanus-white.svg"
            width={304}
            height={67}
          />
          <Image
            className="logo-light w-36 md:w-60"
            alt="image"
            src="/assets/gym/gym-logo-v2.svg"
            width={193}
            height={150}
          />
          <Image
            className="logo-light w-16 md:w-34 opacity-50"
            alt="image"
            src="/assets/gym/milon-white.svg"
            width={297}
            height={47}
          />
        </div>
        {/* <div className="container justify-between items-center">
          <div className="flex flex-row w-full justify-between items-center xl:!hidden lg:!hidden">
            <div className="navbar-brand">
              <Link href={`/index`}>
                <Image
                  alt="image"
                  width="250"
                  height="48"
                  src="/assets/gym/gym-logo-v3.svg"
                />
              </Link>
            </div>
          </div>
          <div className="navbar-collapse-wrapper flex flex-row items-center w-full">
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start gap-3">
              <div className="offcanvas-header lg:mx-auto xl:mx-auto order-0 lg:!order-1 lg:!flex lg:!px-[7rem] xl:!order-1 xl:!flex xl:!px-[10rem]">
                <Image
                  className="logo-light w-60"
                  alt="image"
                  src="/assets/gym/gym-logo-v2.svg"
                  width={193}
                  height={150}
                />
              </div>
              <div className="w-full order-1 lg:!order-none lg:!flex xl:!order-none xl:!flex">
                <ul className="navbar-nav lg:!ml-auto xl:!ml-auto">
                  <li className="nav-item dropdown">
                    <Image
                      className="logo-light w-32 opacity-50"
                      alt="image"
                      src="/assets/gym/humanus-white.svg"
                      width={304}
                      height={67}
                    />
                  </li>
                </ul>
              </div>
              <div className="w-full order-3 lg:!order-2 lg:!flex">
                <ul className="navbar-nav lg:!mr-auto xl:!mr-auto lg:items-center">
                  <li className="nav-item">
                    <Image
                      className="logo-light w-34 opacity-50"
                      alt="image"
                      src="/assets/gym/milon-white.svg"
                      width={297}
                      height={47}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </nav>
    </header>
  );
}
