"use client";

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  {
    src: "/studio/Helles-modernes-Fitnessstudio-mit-Milon-Geraeten.jpg",
  },
  {
    src: "/studio/Heller-Pilatesraum-mit-Five-Chest-Geräten.jpg",
  },
  {
    src: "/studio/Heller-Skillcourt-Trainingsraum-mit-TV.jpg",
  },
  {
    src: "/studio/Moderner-Fitnessraum-im-warmen-Tageslicht.jpg",
  },
  {
    src: "/studio/Modernes-Fitnessstudio-mit-Ledersitzen.jpg",
  },
  {
    src: "/studio/Modernes-Heimtraining-mit-Skillcourt.jpg",
  },
  {
    src: "/studio/Nahaufnahme-eines-warm-beleuchteten-Kurzhantelständers.jpg",
  },
  {
    src: "/studio/Rückansicht-beim-Latziehen-im-Fitnessstudio.jpg",
  },
  {
    src: "/studio/Sonnenlicht-im-modernen-Fitnessstudio.jpg",
  },
  {
    src: "/studio/Warme-Boutique-Fitnessmaschine-im-Sonnenlicht.jpg",
  },
  {
    src: "/studio/studio1.jpg",
  },
  {
    src: "/studio/studio2.jpg",
  },
  // {
  //   src: "/studio/studio3.jpg",
  // },
  // {
  //   src: "/studio/studio4.jpg",
  // },
];

export default function ImageCarousel({ firstImage = images[0].src }) {
  const slides = [{ src: firstImage }, ...images.slice(1)];

  return (
    <section className="wrapper !bg-[#ffffff] angled upper-end lower-start relative border-0 before:top-[-4rem] before:content-[''] before:block before:absolute before:z-0 before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-y-transparent before:border-[#fefefe] before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:content-[''] after:block after:absolute after:z-0 after:border-l-[100vw] after:border-r-transparent after:border-b-[4rem] after:border-y-transparent after:border-[#fefefe] after:border-0 after:border-solid after:right-0">
      <div className="container pt-16 pb-4 md:pt-32 md:pb-12 !relative">
        <div className="swiper-container dots-over relative !z-10">
          <Swiper
            centerInsufficientSlides={true}
            loop={true}
            autoplay={{
              enabled: true,
              delay: 1,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              960: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="swiper"
            spaceBetween={10}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              el: ".spds4",
            }}
            navigation={{
              prevEl: ".snbps4",
              nextEl: ".snbns4",
            }}
            autoHeight
          >
            {slides.map((image, index) => (
              <SwiperSlide
                key={`${image.src}-${index}`}
                className="swiper-slide"
              >
                <Image
                  className="rounded-[.4rem]"
                  alt={`Gym slide ${index + 1}`}
                  src={image.src}
                  width={400}
                  height={800}
                />
              </SwiperSlide>
            ))}

            {/*/.swiper-wrapper */}
          </Swiper>
          <div className="swiper-controls">
            <div className="swiper-navigation">
              <div className="swiper-button swiper-button-prev snbps4"></div>
              <div className="swiper-button swiper-button-next snbns4"></div>
            </div>
            <div className="swiper-pagination spds4"></div>
          </div>
          {/* /.swiper */}
        </div>
      </div>
      {/* /.container */}
    </section>
  );
}
