import Footer3 from "@/components/footers/Footer3";
import GymHeroWip from "@/components/gym/GymHeroWip";
import GymTeaser from "@/components/gym/GymTeaser";
import GymTeaser2 from "@/components/gym/GymTeaser2";
import HeaderGymWip from "@/components/headers/HeaderGymWip";
import About from "@/components/homes/home-3/About";
import Blogs from "@/components/homes/home-3/Blogs";
import Contact from "@/components/homes/home-3/Contact";
import Cta from "@/components/homes/home-3/Cta";
import Facts from "@/components/homes/home-3/Facts";
import Pricing from "@/components/homes/home-3/Pricing";
import Testimonials from "@/components/homes/home-3/Testimonials";
import React from "react";
import ImageCarousel from "@/components/gym/ImageCarousel";

export const metadata = {
  title: "HolisticGym | Fitness + Regeneration + Balance",
  description:
    "HolisticGym - Das Gym mit Fokus auf Fitness, Regeneration und Balance. Unser Ziel ist es, Ihre körperliche und geistige Gesundheit zu verbessern und ein ausgewogenes Leben zu führen.",
};
export default function HomeWip() {
  return (
    <>
      <div className="color-aqua font-thicccboi demo3">
        <div className="font-THICCCBOI text-[.85rem]">
          <div className="grow shrink-0">
            <HeaderGymWip />
            <>
              <GymHeroWip />
              <GymTeaser />
              <GymTeaser2 />
              {/* <About />
              <Cta />
              <Blogs />
              <Facts /> */}
              <ImageCarousel />
              <Contact />
              {/* /section */}
            </>
          </div>
          <Footer3 />
        </div>
      </div>
    </>
  );
}
