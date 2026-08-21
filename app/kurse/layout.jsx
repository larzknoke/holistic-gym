import "@/app/globals.css";
import React from "react";
import Footer3 from "@/components/footers/Footer3";
import HeaderGymWip from "@/components/headers/HeaderGymWip";

export const metadata = {
  title: "HolisticGym | Kurse",
  description:
    "Die öffentlichen Kurs-Seiten von HolisticGym im gleichen Frontend-Look wie die restliche Website.",
};

export default function KurseLayout({ children }) {
  return (
    <>
      <div className="color-aqua font-thicccboi demo3">
        <div className="font-THICCCBOI text-[.85rem]">
          <div className="grow shrink-0">
            <HeaderGymWip />
            <main className="wrapper !bg-[#ffffff] relative overflow-hidden">
              {children}
            </main>
          </div>
          <Footer3 />
        </div>
      </div>
    </>
  );
}
