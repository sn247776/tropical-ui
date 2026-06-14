"use client";
import React from "react";

function BrandSlider({ brands }: any) {
  // Duplicate the brands array to create seamless looping
  const duplicatedBrands = [...brands, ...brands, ...brands, ...brands];
  return (
    <div>
      <div className="relative">
        {/* Animated brand slider */}
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-8"
            >
              <img
                src={brand?.src}
                alt={`brand-${index}`}
                className="md:h-16 h-12 filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Add this CSS in your global styles or as a style tag */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          display: inline-block;
          animation: infinite-scroll 60s linear infinite;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default BrandSlider;
