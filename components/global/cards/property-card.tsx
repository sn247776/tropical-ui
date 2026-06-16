import React from "react";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "../format-currency";
import Link from "next/link";
import PropertyCardSlider from "./property-card-slider";

interface PropertyCardProps {
  property: any;
  viewType?: "grid" | "list";
}

const PropertyCard = ({ property, viewType = "grid", }: PropertyCardProps) => {
  const {
    name,
    area,
    price,
    isAvailable,
    images,
    furnishedStatus,
    slug,
    listingType,
    propertyType
  } = property;

  if (viewType === "list") {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row h-[200px]">
          <div className="md:w-1/3 ">
            <img
              src={images[0] || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 md:w-2/3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-primary">{property?.name} </h3>
                {!isAvailable ? (
                  <Badge
                    variant="outline"
                    className="bg-red-50 text-red-500 border-red-200"
                  >
                    Not Available
                  </Badge>
                ):  <Badge
  
                  >
                    {listingType === "rent" ? "Rent" : "Buy"}
                  </Badge>}
              </div>
              <p className="text-lg font-bold mt-1">
                THB {formatCurrency(price)}
              </p>
              <div className="mt-1 text-gray-500 flex items-center gap-1">
                <MapPin className="h-4 w-4" />{" "}
          <span className="flex gap-2">
                 {property?.locationId?.locationName}
                 {property?.locationId?.locationName ? " " : null}
                  {property?.locationId?.sector}
          </span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <span className="bg-gray-100 px-2 py-1 rounded-md">
                  {area} m²
                </span>
                {furnishedStatus && (
                  <span className="bg-gray-100 px-2 py-1 rounded-md capitalize">
                    {furnishedStatus}
                  </span>
                )}
                                {propertyType && (
                  <span className="bg-gray-100 px-2 py-1 rounded-md capitalize">
                    {propertyType}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <Button variant="outline" size="sm" asChild>
                <Link href={`/spaces/${listingType}/${slug}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <div className="relative overflow-hidden">
 <PropertyCardSlider images={images?.slice(0, 5)}/>
        {!isAvailable ? (
          <div className="absolute top-2 right-2">
            <Badge
              variant="outline"
              className="bg-red-50 text-red-500 border-red-200"
            >
              Not Available
            </Badge>
          </div>
        ):          <div className="absolute top-2 right-2">
            <Badge
              
              
            >
              {listingType === "rent" ? "Rent" : "Buy"}
            </Badge>
          </div> }
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 z-20">
          <p className="text-white font-bold text-lg">
            THB {formatCurrency(price)}
          </p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-primary">{property?.name} </h3>
        <div className="mt-1 text-gray-500 text-sm flex items-center gap-1">
          <MapPin className="h-3 w-3" />
          <span className="flex gap-2">
                 {property?.locationId?.locationName}
                 {property?.locationId?.locationName ? " " : null}
                  {property?.locationId?.sector}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs">
          <span className="bg-gray-100 px-2 py-1 rounded-md">{area} {property?.areaUnit}</span>
                {furnishedStatus && (
                  <span className="bg-gray-100 px-2 py-1 rounded-md capitalize">
                    {furnishedStatus}
                  </span>
                )}
                                {propertyType && (
                  <span className="bg-gray-100 px-2 py-1 rounded-md capitalize">
                    {propertyType}
                  </span>
                )}
        </div>
        <div className="mt-3">
          <Button size="sm" className="w-full" asChild>
            <Link href={`/spaces/${listingType}/${slug}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
