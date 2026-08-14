"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Thumbs,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { MapPin } from "lucide-react";

function PropertieSlider({ property }: any) {
  const images = property?.images || [];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const mainImage =
    images[0]?.url || "/placeholder.jpg";

  const secondImage =
    images[1]?.url || mainImage;

  const thirdImage =
    images[2]?.url || secondImage;

  const remainingCount = Math.max(
    0,
    images.length - 3
  );

  const openImageDialog = (index: number) => {
    setActiveIndex(index);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="grid lg:grid-cols-[1fr_420px] grid-cols-2 gap-4 h-[500px] overflow-hidden rounded-xl">

        {/* Main Image */}
        <div
          className="relative cursor-pointer group overflow-hidden rounded-xl"
          onClick={() => openImageDialog(0)}
        >
          <img
            src={mainImage}
            alt={property.name}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Top Left */}
          <div className="absolute top-4 left-4 flex gap-2">

            <Badge className="capitalize">
              {property.listingType}
            </Badge>

            <Badge variant="secondary">
              {property.propertyCode}
            </Badge>

          </div>

          {/* Top Right */}
          {!property.isAvailable && (
            <Badge
              variant="destructive"
              className="absolute top-4 right-4"
            >
              Not Available
            </Badge>
          )}

          {/* Bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-6">

            <h2 className="text-white text-2xl font-bold">
              {property.name}
            </h2>

            <div className="flex items-center text-white/90 mt-2">

              <MapPin size={16} className="mr-2" />

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
        </div>

        {/* Side Images */}
        <div className="flex flex-col gap-4">

          <img
            src={secondImage}
            alt=""
            onClick={() => openImageDialog(1)}
            className="h-[242px] w-full rounded-xl object-cover cursor-pointer hover:opacity-90 transition"
          />

          <div
            className="relative h-[242px] cursor-pointer"
            onClick={() => openImageDialog(2)}
          >
            {remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/55 rounded-xl flex items-center justify-center text-white text-3xl font-bold z-10">
                +{remainingCount} Photos
              </div>
            )}

            <img
              src={thirdImage}
              alt=""
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

        </div>
      </div>

      {/* Full Screen Gallery */}

      <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      >
        <DialogContent
          closeButtonSize="xl"
          className="max-w-screen h-screen"
        >
          <DialogHeader>

            <div className="space-y-2">

              <div className="flex items-center gap-2">

                <Badge className="capitalize">
                  {property.listingType}
                </Badge>

                <Badge variant="outline">
                  {property.propertyCode}
                </Badge>

              </div>

              <h1 className="text-3xl font-bold">
                {property.name}
              </h1>

              <div className="flex items-center text-muted-foreground">

                <MapPin className="w-4 h-4 mr-2" />

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

          </DialogHeader>

          <Swiper
            modules={[Navigation, Thumbs]}
            navigation
            initialSlide={activeIndex}
            centeredSlides
            slidesPerView={2}
            spaceBetween={20}
            className="h-[84vh] w-full"
            onSlideChange={(swiper) =>
              setActiveIndex(swiper.activeIndex)
            }
          >
            {images.map(
              (image: any, index: number) => (
                <SwiperSlide key={index}>
                  <img
                    src={image.url}
                    alt={`${property.name}-${index}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>

        </DialogContent>
      </Dialog>
    </>
  );
}

export default PropertieSlider;