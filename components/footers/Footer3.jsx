"use client";
import React from "react";
import Image from "next/image";
import { socialLinks } from "@/data/socials";
import { footerLinks } from "@/data/footerLinks";
import Link from "next/link";
export default function Footer3() {
  return (
    <footer className="bg-gym-dark opacity-100 !text-[#cacaca]">
      <div className="container pt-28 xl:pt-36 lg:pt-36 md:pt-36 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
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
                <br className="hidden xl:block lg:block !text-[#cacaca]" />
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
                Büttnerstraße 4, 37603 Holzminden, Deutschland
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
          {/* <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <h4 className="widget-title !text-white !mb-3 !text-[1rem] !leading-[1.45]">
                Learn More
              </h4>
              <ul className="pl-0 list-none !mb-0">
                {footerLinks.map((elm, i) => (
                  <li className={i != 0 ? "!mt-[0.35rem]" : ""} key={i}>
                    <Link
                      className="!text-[#cacaca] hover:!text-gym-primary"
                      href={elm.href}
                    >
                      {elm.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
          {/* /column */}
          <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] !px-[15px] max-w-full xl:!mt-0 lg:!mt-0 !mt-[30px]">
            <div className="widget !text-[#cacaca]">
              <h4 className="widget-title !text-white !mb-3 !text-[1rem] !leading-[1.45]">
                Newsletter
              </h4>
              <p className="!mb-5">
                Abonniere unseren Newsletter, um die neuesten Updates und
                Angebote zu erhalten.
              </p>
              <div className="newsletter-wrapper">
                {/* Begin Mailchimp Signup Form */}
                <div id="mc_embed_signup2">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                    className="validate dark-fields"
                  >
                    <div id="mc_embed_signup_scroll2">
                      <div className="!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full">
                        <input
                          type="email"
                          defaultValue=""
                          name="EMAIL"
                          className="required email form-control block w-full text-[12px] font-medium !leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-[0.4rem] motion-reduce:transition-none focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:!mt-[-0.6rem] file:mr-[-1rem] file:!mb-[-0.6rem] file:ml-[-1rem] file:!text-[#60697b] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none placeholder:!text-[#959ca9] placeholder:opacity-100 border border-solid !border-[rgba(255,255,255,0.1)] !text-[#cacaca] focus:!border-[rgba(84,168,199,.5)] bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(84,168,199,.5)]"
                          placeholder=""
                          id="mce-EMAIL2"
                        />
                        <label
                          className="!ml-[0.05rem] !text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none origin-[0_0] px-4 py-[0.6rem] left-0 top-0"
                          htmlFor="mce-EMAIL2"
                        >
                          Email Addresse
                        </label>
                        <input
                          type="submit"
                          defaultValue="Abonnieren"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          className="btn btn-aqua !text-white !bg-gym-primary border-gym-primary hover:text-white hover:bg-gym-primary hover:!border-gym-primary active:text-white active:bg-gym-primary active:border-gym-primary disabled:text-white disabled:bg-gym-primary disabled:border-gym-primary !relative z-[2] hover:!transform-none hover:!translate-none border-0 !text-[.85rem]"
                        />
                      </div>
                      <div id="mce-responses2" className="clear">
                        <div
                          className="response"
                          id="mce-error-response2"
                          style={{ display: "none" }}
                        />
                        <div
                          className="response"
                          id="mce-success-response2"
                          style={{ display: "none" }}
                        />
                      </div>
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                      <div
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                          tabIndex={-1}
                          defaultValue=""
                        />
                      </div>
                      <div className="clear" />
                    </div>
                  </form>
                </div>
                {/*End mc_embed_signup*/}
              </div>
              {/* /.newsletter-wrapper */}
            </div>
            {/* /.widget */}
          </div>
          {/* /column */}
        </div>
        {/*/.row */}
      </div>
      {/* /.container */}
    </footer>
  );
}
