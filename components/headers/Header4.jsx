import React from "react";
import Image from "next/image";
import Nav2 from "./Nav2";
import Link from "next/link";
import { socialLinks } from "@/data/socials";

export default function Header4() {
  return (
    <header className="relative wrapper !bg-[#edf2fc]">
      <nav className="navbar navbar-expand-lg center-logo navbar-dark navbar- bg-gym-dark opacity-100">
        <div className="container justify-between items-center">
          <div className="flex flex-row w-full justify-between items-center xl:!hidden lg:!hidden">
            <div className="navbar-brand">
              <Link href={`/index`}>
                <Image
                  srcSet="/assets/img/logo-light@2x.png 2x"
                  alt="image"
                  width="134"
                  height="26"
                  src="/assets/img/logo-light.png"
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
            <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
              <div className="offcanvas-header my-5 xl:my-10 lg:mx-auto xl:mx-auto order-0 lg:!order-1 lg:!flex lg:!px-[5rem] xl:!order-1 xl:!flex xl:!px-[5rem]">
                <Image
                  className="logo-light"
                  alt="image"
                  src="/assets/gym/gym-logo-v2.svg"
                  width={205}
                  height={139}
                />
                {/* <h3 className="text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0 xl:!hidden lg:!hidden">
                  HolisticGym
                </h3> */}
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
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Über uns
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                          Unsere Philosophie
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                          Die Villa
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Das Gym
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                          Milon Fitness
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                          Trainingsfläche
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                          Spa & Wellness
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="dropdown-item" href="#">
                          Galerie
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="w-full order-3 lg:!order-2 lg:!flex">
                <ul className="navbar-nav lg:!mr-auto xl:!mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Das Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Kontakt
                    </a>
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
                      info@email.com
                    </a>
                    <br />
                    00 (123) 456 78 90 <br />
                    <nav className="nav social social-white !mt-4">
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-twitter before:content-['ed59'] text-[1rem] !text-[#5daed5]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-facebook-f before:content-['eae2'] text-[1rem] !text-[#4470cf]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-dribbble before:content-['eaa2'] text-[1rem] !text-[#e94d88]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-instagram before:content-['eb9c'] text-[1rem] !text-[#d53581]" />
                      </a>
                      <a
                        className="m-[0_.7rem_0_0] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                        href="#"
                      >
                        <i className="uil uil-youtube before:content-['edb5'] text-[1rem] !text-[#c8312b]" />
                      </a>
                    </nav>
                    {/* /.social */}
                  </div>
                </div>
              </div>
            </div>
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
