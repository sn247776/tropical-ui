'use client';

import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import PropertyCard from '@/components/global/cards/property-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';

type Props = {
  properties: any[];
};

export default function SimilarProperties({ properties }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (!properties || properties.length === 0) return null;

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className='text-xl font-semibold'>Similar Properties</h1>
        </div>
        <div className="flex gap-2">
          <Button 
            size={'icon'} 
            onClick={handlePrev}
            disabled={isBeginning}
          >
            <ChevronLeft />
          </Button>
          <Button 
            size={'icon'} 
            onClick={handleNext}
            disabled={isEnd}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      
      <div className='py-8'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Set initial states
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className='overflow-visible'
        >
          {properties?.map((property: any) => (
            <SwiperSlide className='overflow-visible' key={property._id}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
