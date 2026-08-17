import React from "react";
import { Home } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  buyType,
  rentType,
  leaseType,
  bhkOptions,
  areaUnits,
  furnishedStatuses,
} from "@/app/form-list";

import { Separator } from "@/components/ui/separator";

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

export default function PropertyInformation({ property }: { property: any }) {
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-semibold text-primary">
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
              ? new Date(property.availableFrom).toLocaleDateString()
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
  );
}