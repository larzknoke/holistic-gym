import React from "react";
import Image from "next/image";
import Nav2 from "./Nav2";
import Link from "next/link";
import { socialLinks } from "@/data/socials";

export default function HeaderGymWip() {
  return (
    <header className="relative wrapper !bg-[#edf2fc]">
      <div className="bg-gym-primary p-1 w-full">
        <div className="container flex flex-row items-center justify-between">
          <div className="text-white font-bold flex flex-row items-center gap-1">
            <i className="uil uil-exclamation-circle"></i>
            Neueröffnung: Mai 2026
          </div>
          <div className="flex flex-row gap-5 text-xs">
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
      <nav className="!pt-15 !pb-8 navbar navbar-expand-lg center-logo navbar-dark  bg-gym-dark opacity-100">
        <div className="container justify-between items-center">
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
            <div className="navbar-other !ml-auto">
              <ul className="navbar-nav flex-row items-center">
                <li className="nav-item xl:!hidden lg:!hidden">
                  <button className="hamburger offcanvas-nav-btn">
                    <span />
                  </button>
                </li>
              </ul>
              {/* /.navbar-nav */}
            </div>
            {/* /.navbar-other */}
          </div>
          {/* /.flex */}
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
                {/* <div className="teaser hover:cursor-pointer hover:shadow-lg hover:translate-y-[-0.25rem] transition-all duration-[0.2s] ease-in-out motion-reduce:transition-none bg-gym-danger text-white text-center px-5 py-2 rounded absolute top-8 right-6 z-[2] text-xl shadow-sm rotate-2 font-bold">
                  Vorrausichtlicher Start: Mai 2026!
                  <span className="text-base block">
                    Profitiere als Gründungsmitglied
                  </span>
                </div> */}
                <button
                  type="button"
                  className="btn-close btn-close-white xl:!hidden lg:!hidden"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
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
              <div className="offcanvas-body xl:!hidden lg:!hidden order-4 !mt-auto">
                <div className="offcanvas-footer">
                  <div>
                    <a
                      href="mailto:first.last@email.com"
                      className="link-inverse"
                    >
                      info@holistic-gym.de
                    </a>
                    <br />
                    00 (123) 456 78 90 <br />
                    <nav className="nav social social-white !mt-4">
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-facebook-f before:content-['eae2'] text-[1rem] !text-gym-secondary" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-instagram before:content-['eb9c'] text-[1rem] !text-gym-secondary" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-youtube before:content-['edb5'] text-[1rem] !text-gym-secondary" />
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="navbar-other lg:!ml-4 xl:!ml-4">
              <ul className="navbar-nav !flex-row !items-center !ml-auto">
                <li className="nav-item hidden xl:block lg:block md:block">
                  <a href="#" className=" btn btn-sm btn-gym">
                    HolisticApp
                  </a>
                </li>
              </ul>
            </div> */}
            {/* /.navbar-collapse */}
          </div>
          {/* /.navbar-collapse-wrapper */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}
    </header>
  );
}
