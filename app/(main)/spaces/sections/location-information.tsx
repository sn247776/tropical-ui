"use client";

import React, { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
  Maximize2,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

interface LocationImage {
  url: string;
  public_id: string;
  pin: boolean;
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  if (
    value === undefined ||
    value === null ||
    value === "" ||
    value === 0
  ) {
    return null;
  }

  return (
    <>
      <div className="flex justify-between items-start gap-6">
        <span className="text-muted-foreground">{label}</span>

        <span className="font-medium text-right">{value}</span>
      </div>

      <Separator />
    </>
  );
}

export default function LocationInformation({
  property,
}: {
  property: any;
}) {
  const location = property?.locationId;

  const locationImages: LocationImage[] = useMemo(() => {
    if (!Array.isArray(location?.images)) {
      return [];
    }

    return location.images.filter(
      (image: LocationImage) => image?.url?.trim()
    );
  }, [location?.images]);

  // Put pinned image first
  const sortedImages = useMemo(() => {
    const pinnedImage = locationImages.find((image) => image.pin);

    if (!pinnedImage) {
      return locationImages;
    }

    return [
      pinnedImage,
      ...locationImages.filter(
        (image) => image.public_id !== pinnedImage.public_id
      ),
    ];
  }, [locationImages]);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const selectedImageData =
    selectedImage !== null
      ? sortedImages[selectedImage]
      : null;

  const handlePrevious = () => {
    if (selectedImage === null || sortedImages.length === 0) {
      return;
    }

    setSelectedImage(
      selectedImage === 0
        ? sortedImages.length - 1
        : selectedImage - 1
    );
  };

  const handleNext = () => {
    if (selectedImage === null || sortedImages.length === 0) {
      return;
    }

    setSelectedImage(
      selectedImage === sortedImages.length - 1
        ? 0
        : selectedImage + 1
    );
  };

  return (
    <>
      <Card className="overflow-hidden border-border/60 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-semibold text-primary">
            <MapPin className="w-5 h-5" />
            Location Information
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Location Images */}
          {sortedImages.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-black/60">
                  Location Gallery
                </h3>

                <span className="text-xs text-muted-foreground">
                  {sortedImages.length}{" "}
                  {sortedImages.length === 1
                    ? "image"
                    : "images"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Featured Image */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(0)}
                  className="group relative aspect-16/10 md:aspect-4/3 overflow-hidden rounded-xl bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <img
                    src={sortedImages[0].url}
                    alt={`${location?.area || "Location"} image`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

                  {/* Featured Badge */}
                  {sortedImages[0].pin && (
                    <div className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white shadow-lg">
                      Featured
                    </div>
                  )}

                  {/* Expand Button */}
                  <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-800 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </div>

                  {/* Counter */}
                  {sortedImages.length > 1 && (
                    <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      1 / {sortedImages.length}
                    </div>
                  )}
                </button>

                {/* Secondary Images */}
                {sortedImages.length > 1 && (
                  <div className="grid grid-cols-2 gap-3">
                    {sortedImages.slice(1, 5).map((image, index) => {
                      const actualIndex = index + 1;

                      const isLastVisibleImage =
                        actualIndex === 4 &&
                        sortedImages.length > 5;

                      return (
                        <button
                          key={image.public_id}
                          type="button"
                          onClick={() =>
                            setSelectedImage(actualIndex)
                          }
                          className="group relative aspect-4/3 overflow-hidden rounded-xl bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                          <img
                            src={image.url}
                            alt={`${location?.area || "Location"} image ${
                              actualIndex + 1
                            }`}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />

                          {/* More Images */}
                          {isLastVisibleImage && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                              <span className="text-lg font-semibold text-white">
                                +{sortedImages.length - 5} more
                              </span>
                            </div>
                          )}

                          {/* Expand */}
                          <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-800 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
                            <Maximize2 className="h-3.5 w-3.5" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Location Details */}
          <div className="space-y-4">
            <DetailRow
              label="Province"
              value={location?.province}
            />

            <DetailRow
              label="District"
              value={location?.district}
            />

            <DetailRow
              label="Area"
              value={location?.area}
            />

            <DetailRow
              label="Postal Codes"
              value={location?.postalCodes?.join(", ")}
            />
          </div>
        </CardContent>
      </Card>

      {/* Fullscreen Image Viewer */}
      {selectedImageData && selectedImage !== null && (
        <div
          className="fixed h-screen inset-0 z-100 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous */}
          {sortedImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-3 sm:left-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Fullscreen Image */}
          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImageData.url}
              alt={`${location?.area || "Location"} image ${
                selectedImage + 1
              }`}
              className="h-full w-full object-contain"
            />

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              {selectedImage + 1} / {sortedImages.length}
            </div>
          </div>

          {/* Next */}
          {sortedImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handleNext();
              }}
              className="absolute right-3 sm:right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      )}
    </>
  );
}