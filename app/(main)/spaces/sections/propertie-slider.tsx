"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { MapPin } from "lucide-react";

function PropertieSlider({ property }: any) {
  const images = property?.images || [];
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Get the images to display in each box
  const mainImage = images[0] || "/placeholder.jpg";
  const secondaryImage = images[1] || mainImage;
  const thirdImage = images[2] || secondaryImage || mainImage;
  const remainingCount = Math.max(0, images.length - 3);

  const openImageDialog = (index: number) => {
    setActiveIndex(index);
    setIsDialogOpen(true);
  };

  return (
    <div>
      {/* Original Image Grid */}
      <div className="grid lg:grid-cols-[1fr_400px] grid-cols-2 gap-4 h-[450px] overflow-hidden">
        <div className="relative cursor-pointer" onClick={() => openImageDialog(0)}>
          <img className="object-cover w-full h-full" src={mainImage} alt="Property main" />
          {!property.isAvailable && (
            <Badge
              variant="outline"
              className="absolute top-4 right-4 bg-red-50 text-red-500 border-red-200 z-10"
            >
              Not Available
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <img 
            className="h-[225px] object-cover cursor-pointer" 
            src={secondaryImage} 
            alt="Property secondary" 
            onClick={() => openImageDialog(1)}
          />
          <div className="relative h-[225px] cursor-pointer" onClick={() => openImageDialog(2)}>
            {remainingCount > 0 && (
              <div className="absolute top-0 z-10 bg-black/50 w-full h-full text-white flex items-center justify-center text-3xl font-semibold">
                + {remainingCount} more
              </div>
            )}
            <img
              className="h-full w-full object-cover absolute"
              src={thirdImage}
              alt="Property third"
            />
          </div>
        </div>
      </div>

      {/* Image Dialog with Swiper */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent closeButtonSize="xl" className="max-w-screen h-screen select-none">
          <DialogHeader>
            <div>
              <h1 className="text-2xl font-bold">{property.name}</h1>
              <div className="flex items-center text-gray-600 ">
                <MapPin className="h-4 w-4 mr-1" />
                <span>
                  {property.location}
                  {property.sectorArea && `, ${property.sectorArea}`}
                </span>
              </div>
            </div>
          </DialogHeader>
          <Swiper
            modules={[Navigation, Thumbs]}
            spaceBetween={10}
            slidesPerView={2}
            centeredSlides={true}
            initialSlide={activeIndex}
            navigation
            className="h-[85vh] w-full overflow-hidden "
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {images.map((image: string, index: number) => (
              <SwiperSlide key={index} className=" w-full h-full">
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
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PropertieSlider;