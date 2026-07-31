"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function PropertyCardSlider({ images = [] }: any) {
  const [showSlider, setShowSlider] = useState(false);

  if (!images?.length) {
    return (
      <img
        src="/placeholder.jpg"
        alt="Property"
        className="w-full h-[200px] object-cover"
      />
    );
  }

  return (
    <div
      className="relative h-[200px]"
      onMouseEnter={() => setShowSlider(true)}
      onTouchStart={() => setShowSlider(true)}
    >
      {!showSlider ? (
        <img
          src={images[0]?.url}
          alt="Property"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      ) : (
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          effect="fade"
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          className="h-full w-full"
        >
          {images.map((img: any, index: number) => (
            <SwiperSlide key={img._id || index}>
              <img
                src={img.url}
                alt={`Property ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}