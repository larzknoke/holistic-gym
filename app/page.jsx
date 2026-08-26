import "./globals.css";
import Footer3 from "@/components/pages/shared/Footer3";
import GymHeroWip from "@/components/pages/home/GymHeroWip";
import GymTeaser from "@/components/pages/home/GymTeaser";
import GymTeaser2 from "@/components/pages/home/GymTeaser2";
import HeaderGymWip from "@/components/pages/shared/HeaderGymWip";
import Contact from "@/components/pages/home/Contact";
import React from "react";
import ImageCarousel from "@/components/pages/home/ImageCarousel";
import GymPricing from "@/components/pages/home/GymPricing";
import GymCourses from "@/components/pages/home/GymCourses";
import GymLecturePromo from "@/components/pages/home/GymLecturePromo";

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
              <GymLecturePromo />
              <GymCourses />
              <GymTeaser />
              <GymTeaser2 />
              <ImageCarousel />
              <GymPricing />
              <Contact />
            </>
          </div>
          <Footer3 />
        </div>
      </div>
    </>
  );
}
