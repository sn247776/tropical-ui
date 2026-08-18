"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";

import {
  MapPin,
  X,
} from "lucide-react";

import { ShareButton } from "./share-button";

function MobileSlider({ property }: any) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const images = property?.images || [];

  return (
    <>
      <Swiper
        spaceBetween={10}
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="relative h-[250px] sm:h-[400px] w-full"
        onClick={() => setIsDialogOpen(true)}
      >
        {/* Share */}

        <div className="absolute top-3 right-3 z-30">
          <ShareButton
            big={false}
            propertyCode={property.propertyCode}
            isAvailable={property?.isAvailable}
          />
        </div>

        {/* Listing Type */}

        <div className="absolute top-3 left-3 z-30 flex gap-2">

          <Badge className="capitalize">
            {property.listingType}
          </Badge>

          <Badge variant="secondary">
            {property.propertyCode}
          </Badge>

        </div>

        {/* Tap Overlay */}

        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">

          <div className="bg-black/45 text-white backdrop-blur-sm rounded-full px-5 py-2 text-sm font-medium">
            Tap to view all photos
          </div>

        </div>

        {images.map((image: any, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={image.url}
              alt={`${property.name}-${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gallery */}

      <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      >
        <DialogContent
          closeButtonSize="none"
          className="max-w-screen h-screen p-0 flex flex-col"
        >
          {/* Header */}

          <DialogHeader className="sticky top-0 bg-white border-b shadow-sm z-20">

            <div className="flex items-start justify-between px-5 py-4">

              <div className="space-y-2">

                <div className="flex gap-2">

                  <Badge className="capitalize">
                    {property.listingType}
                  </Badge>

                  <Badge variant="outline">
                    {property.propertyCode}
                  </Badge>

                </div>

                <h1 className="text-xl font-bold">
                  {property.name}
                </h1>

                <div className="flex items-center text-sm text-muted-foreground">

                  <MapPin className="w-4 h-4 mr-1" />

                  <span>
                    {[
                      property.locationId?.area,
                      property.locationId?.district,
                      property.locationId?.province,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                  </span>

                </div>

              </div>

              <button
                onClick={() => setIsDialogOpen(false)}
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>

            </div>

          </DialogHeader>

          {/* Images */}

          <div className="flex-1 overflow-y-auto bg-black/5">

            <div className="p-4 space-y-4">

              {images.map((image: any, index: number) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl"
                >
                  <img
                    src={image.url}
                    alt={`${property.name}-${index}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}

            </div>

          </div>

        </DialogContent>
      </Dialog>
    </>
  );
}

export default MobileSlider;