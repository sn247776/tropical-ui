"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { MapPin, X } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { ShareButton } from "./share-button";

function MobileSlider({ property }: any) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const images = property?.images || [];

  return (
    <div>
      <Swiper
        spaceBetween={10}
        className="sm:h-[400px] h-[250px] w-full overflow-hidden relative"
        onClick={() => setIsDialogOpen(true)}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
      >
        <div className="absolute top-1 right-1 z-20"> <ShareButton big={false} propertyCode={property?.propertyCode} /></div>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-10 pointer-events-none">
          <div className="bg-white bg-opacity-70 px-4 py-2 rounded-md">
            <span className="font-medium text-gray-800">
              Tap to see all images
            </span>
          </div>
        </div>

        {images.map((image: string, index: number) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={`Property image ${index + 1}`}
                className="w-full h-full absolute object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dialog for full view */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent closeButtonSize="none" className="max-w-[100vw] h-screen flex flex-col p-0">
          {/* Sticky Header with close button */}
          <DialogHeader className="sticky top-0 bg-white z-10 p-4 mt-5 border-b shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold text-left">{property.name}</h1>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>
                    {property.location}
                    {property.sectorArea && `, ${property.sectorArea}`}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="p-1 hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </DialogHeader>

          {/* Images Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {images.map((image: string, index: number) => (
              <div key={index} className="w-full">
                <img
                  src={image}
                  alt={`Property image ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MobileSlider;
