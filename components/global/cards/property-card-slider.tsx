"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function PropertyCardSlider({ images }: { images: string[] }) {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowSlider(true)}
      onTouchStart={() => setShowSlider(true)}
      onClick={() => setShowSlider(true)}
      className="relative"
    >
      {!showSlider ? (
        // Show static first image by default
        <img
          loading="lazy"
          src={images[0]}
          alt="Property"
          className="w-full h-[200px] object-cover"
        />
      ) : (
        // Show full slider after interaction - starting with second image
        <Swiper
          loop={true}
          slidesPerView={1}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          initialSlide={1} // This makes the slider start with the second image (index 1)
          modules={[EffectFade, Pagination, Autoplay]}
          className="property-slider"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                loading="lazy"
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-[200px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default PropertyCardSlider;