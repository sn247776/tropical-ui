"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import {
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  buyType,
  rentType,
  leaseType,
  bhkOptions,
  areaUnits,
  furnishedStatuses,
} from "@/app/form-list";

import { renderIcon } from "./icons";

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

function FeatureGrid({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items?.length) return null;

  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>

      <div className="grid lg:grid-cols-4 md:grid-col-3 gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-lg border p-3"
          >
            <div className="text-primary">
              {renderIcon(item)}
            </div>

            <span className="capitalize">
              {item.replaceAll("_", " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DetailsSection({ property }: any) {
  const propertyTypes = [
    ...buyType,
    ...rentType,
    ...leaseType,
  ];

  const propertyType =
    propertyTypes.find(
      (item) => item.value === property.propertyType
    )?.label || property.propertyType;

  const bhk =
    bhkOptions.find((item) => item.value === property.bhk)?.label ||
    property.bhk;

  const areaUnit =
    areaUnits.find((item) => item.value === property.areaUnit)?.value ||
    property.areaUnit;

  const furnished =
    furnishedStatuses.find(
      (item) => item.value === property.furnishedStatus
    )?.label || property.furnishedStatus;

  return (
    <div className="space-y-8">



            {/* ================================================= */}
      {/* FEATURES & AMENITIES                              */}
      {/* ================================================= */}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            Features & Amenities
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8">

          <FeatureGrid
            title="Essentials"
            items={property.essentials}
          />

          <FeatureGrid
            title="Outdoor"
            items={property.outdoor}
          />

          <FeatureGrid
            title="Wellness"
            items={property.wellness}
          />

          <FeatureGrid
            title="Lifestyle"
            items={property.lifestyle}
          />

          <FeatureGrid
            title="Amenities"
            items={property.amenities}
          />

          <FeatureGrid
            title="Rental Conditions"
            items={property.rental_conditions}
          />

          <FeatureGrid
            title="Internet Speed"
            items={property.internet_speed}
          />

        </CardContent>
      </Card>

      {/* ================================================= */}
      {/* PROPERTY INFORMATION                              */}
      {/* ================================================= */}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Property Information
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <DetailRow
            label="Property Type"
            value={propertyType}
          />

          <DetailRow
            label="Bedrooms"
            value={bhk}
          />

          <DetailRow
            label="Bathrooms"
            value={property.bathrooms}
          />

          <DetailRow
            label="Area"
            value={`${property.area} ${areaUnit}`}
          />

          <DetailRow
            label="Carpet Area"
            value={
              property.carpetArea
                ? `${property.carpetArea} ${areaUnit}`
                : null
            }
          />

          <DetailRow
            label="Furnished"
            value={furnished}
          />


          <DetailRow
            label="Facing"
            value={property.facing}
          />

          <DetailRow
            label="Balcony Side"
            value={property.balconySide}
          />

          <DetailRow
            label="Parking"
            value={property.parkingNumber}
          />

          <DetailRow
            label="Indoor Parking"
            value={property.indoorParkingCount}
          />

          <DetailRow
            label="Outdoor Parking"
            value={property.outdoorParkingCount}
          />

          <DetailRow
            label="Balconies"
            value={property.balconyCount}
          />

          <DetailRow
            label="Servant Rooms"
            value={property.servantRoomCount}
          />

          <DetailRow
            label="Property Age"
            value={
              property.propertyAge > 0
                ? `${property.propertyAge} Years`
                : "New"
            }
          />

          <DetailRow
            label="Available From"
            value={
              property.availableFrom
                ? new Date(
                    property.availableFrom
                  ).toLocaleDateString()
                : null
            }
          />

          <DetailRow
            label="Tenant Visit"
            value={
              property.possibleTenantVisit
                ? new Date(
                    property.possibleTenantVisit
                  ).toLocaleDateString()
                : null
            }
          />

        </CardContent>
      </Card>


            {/* ================================================= */}
      {/* LOCATION */}
      {/* ================================================= */}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Location Information
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <DetailRow
            label="Province"
            value={property.locationId?.province}
          />

          <DetailRow
            label="District"
            value={property.locationId?.district}
          />

          <DetailRow
            label="Area"
            value={property.locationId?.area}
          />

          <DetailRow
            label="Postal Codes"
            value={property.locationId?.postalCodes?.join(", ")}
          />


        </CardContent>
      </Card>

      {/* ================================================= */}
      {/* ADDITIONAL HIGHLIGHTS */}
      {/* ================================================= */}

      {property.additionalHighlights?.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Additional Highlights
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {property.additionalHighlights.map(
                (item: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border p-3"
                  >
                    <div className="text-primary">
                      {renderIcon(item)}
                    </div>

                    <span className="capitalize">
                      {item.replaceAll("_", " ")}
                    </span>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      )}

    </div>
  );
}

export default DetailsSection;