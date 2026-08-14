"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import PropertyCardSlider from "./property-card-slider";
import CurrencyProvider from "../currency-provider";
import { bhkOptions } from "@/app/form-list";

interface PropertyCardProps {
  property: any;
  viewType?: "grid" | "list";
}

const PropertyCard = ({
  property,
  viewType = "grid",
}: PropertyCardProps) => {
  const {
    name,
    slug,
    listingType,
    propertyType,
    bhk,
    furnishedStatus,
    isAvailable,
    images
  } = property;

  // Location
  const location = [
    property.locationId?.area,
    property.locationId?.district,
    property.locationId?.province,
  ]
    .filter(Boolean)
    .join(", ");

  // Price
  let price = 0;

  if (listingType === "buy") {
    price = property.pricing?.salePrice ?? 0;
  }

  if (listingType === "rent") {
    price =
      property.pricing?.monthlyRate ??
      property.pricing?.weeklyRate ??
      property.pricing?.dailyRate ??
      0;
  }

  if (listingType === "lease") {
    price =
      property.pricing?.totalPrice ??
      property.pricing?.yearlyRate ??
      0;
  }

    const bhkLabel =
    bhkOptions.find(
      (item) => item.value === property.bhk
    )?.label || property.bhk;

  // LIST VIEW
  if (viewType === "list") {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col md:flex-row">

          <div className="md:w-1/3">
            <PropertyCardSlider images={images} />
          </div>

          <div className="md:w-2/3 p-5 flex flex-col justify-between">

            <div>

              <div className="flex justify-between items-start">

                <h3 className="text-xl font-bold text-primary">
                  {name}
                </h3>

                {isAvailable ? (
                  <Badge className="capitalize">
                    {listingType}
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="bg-red-50 text-red-600 border-red-200"
                  >
                    Not Available
                  </Badge>
                )}
              </div>

              <p className="text-xl font-bold mt-2">
                <CurrencyProvider price={price} />
              </p>

              <div className="flex items-center gap-2 text-gray-500 mt-2">

                <MapPin className="h-4 w-4" />

                <span>{location}</span>

              </div>

              <div className="flex flex-wrap gap-2 mt-4">

                <span className="bg-gray-100 rounded-md px-2 py-1 capitalize text-sm">
                  {propertyType}
                </span>

                {bhk && (
                  <span className="bg-gray-100 rounded-md px-2 py-1 text-sm">
                    {bhkLabel}
                  </span>
                )}

                {furnishedStatus && (
                  <span className="bg-gray-100 rounded-md px-2 py-1 capitalize text-sm">
                    {furnishedStatus}
                  </span>
                )}

              </div>

            </div>

            <Button
              variant="outline"
              className="mt-5 w-fit"
              asChild
            >
              <Link href={`/spaces/${listingType}/${slug}`}>
                View Details
              </Link>
            </Button>

          </div>

        </div>
      </div>
    );
  }

  // GRID VIEW

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">

      <div className="relative">

        <PropertyCardSlider images={images} />

        {isAvailable ? (
          <Badge className="absolute top-3 right-3 capitalize z-20">
            {listingType}
          </Badge>
        ) : (
          <Badge
            variant="outline"
            className="absolute top-3 right-3 bg-red-50 text-red-600 border-red-200 z-20"
          >
            Not Available
          </Badge>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4 z-20">

          <p className="text-white font-bold text-xl">
           <CurrencyProvider price={price}/>
          </p>

        </div>

      </div>

      <div className="p-4">

        <h3 className="font-bold text-primary text-lg line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center gap-2 text-gray-500 mt-2 text-sm">

          <MapPin className="h-4 w-4 shrink-0" />

          <span className="line-clamp-1">
            {location}
          </span>

        </div>

        <div className="flex flex-wrap gap-2 mt-4">

          <span className="bg-gray-100 rounded-md px-2 py-1 capitalize text-xs">
            {propertyType}
          </span>

          {bhk && (
            <span className="bg-gray-100 rounded-md px-2 py-1 text-xs">
              {bhkLabel}
            </span>
          )}

          {furnishedStatus && (
            <span className="bg-gray-100 rounded-md px-2 py-1 capitalize text-xs">
              {furnishedStatus}
            </span>
          )}

        </div>

        <Button
          className="w-full mt-5"
          asChild
        >
          <Link href={`/spaces/${listingType}/${slug}`}>
            View Details
          </Link>
        </Button>

      </div>

    </div>
  );
};

export default PropertyCard;