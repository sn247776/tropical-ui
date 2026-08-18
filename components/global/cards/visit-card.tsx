"use client";

import Link from "next/link";
import {
  Home,
  MapPin,
  Ruler,
  Sofa,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { VisitButton } from "../buttons/visit-button";
import CurrencyProvider from "../currency-provider";
import { bhkOptions } from "@/app/form-list";

interface VisitCardProps {
  property: any;
}

function VisitCard({ property }: VisitCardProps) {
  const {
    name,
    location,
    area,
    areaUnit,
    price,
    pricing,
    isAvailable,
    status,
    images,
    furnishedStatus,
    slug,
    listingType,
    propertyCode,
    propertyType,
    bhk,
  } = property;

  /*
   * --------------------------------------------------
   * IMAGE
   * --------------------------------------------------
   */

  const imageUrl =
    images?.[0]?.url ||
    images?.[0] ||
    "/placeholder.svg";

  /*
   * --------------------------------------------------
   * LISTING TYPE
   * --------------------------------------------------
   */

  const normalizedListingType =
    listingType?.toLowerCase();

  const listingLabel =
    normalizedListingType === "rent"
      ? "For Rent"
      : normalizedListingType === "buy"
        ? "For Sale"
        : normalizedListingType === "lease"
          ? "For Lease"
          : listingType;

  /*
   * --------------------------------------------------
   * LOCATION
   * --------------------------------------------------
   */

  const locationText = [
    location?.province,
    location?.district,
    location?.area,
  ]
    .filter(Boolean)
    .join(", ");

  /*
   * --------------------------------------------------
   * PRICE
   * --------------------------------------------------
   */

  let displayPrice = null;
  let priceSuffix = "";

  if (normalizedListingType === "rent") {
    const monthly =
      pricing?.rent?.monthlyRate ??
      pricing?.rent?.monthly;

    const weekly =
      pricing?.rent?.weeklyRate ??
      pricing?.rent?.weekly;

    const daily =
      pricing?.rent?.dailyRate ??
      pricing?.rent?.daily;

    if (monthly) {
      displayPrice = monthly;
      priceSuffix = "/ month";
    } else if (weekly) {
      displayPrice = weekly;
      priceSuffix = "/ week";
    } else if (daily) {
      displayPrice = daily;
      priceSuffix = "/ day";
    } else if (price) {
      displayPrice = price;
    }
  }

  if (normalizedListingType === "buy") {
    displayPrice =
      pricing?.salePrice ??
      pricing?.sale?.salePrice ??
      pricing?.sale?.price ??
      price;
  }

  if (normalizedListingType === "lease") {
    displayPrice =
      pricing?.lease?.totalPrice ??
      pricing?.lease?.yearlyPrice ??
      price;

    if (pricing?.lease?.durationYears) {
      priceSuffix = `/ ${pricing.lease.durationYears} years`;
    }
  }

  /*
   * --------------------------------------------------
   * AVAILABILITY
   * --------------------------------------------------
   */

  const available =
    isAvailable !== undefined
      ? isAvailable
      : status
        ? status.toLowerCase() === "available"
        : true;

  /*
   * --------------------------------------------------
   * PROPERTY TYPE
   * --------------------------------------------------
   */

  const propertyTypeLabel = propertyType
    ? propertyType
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char: string) =>
          char.toUpperCase()
        )
    : null;

  /*
   * --------------------------------------------------
   * RENDER
   * --------------------------------------------------
   */

  const getBHKLabel = (value: string) => {
    return (
      bhkOptions.find((slot) => slot.value === String(value))
        ?.label || value
    );
  };

  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="flex flex-col md:flex-row">

        {/* ==========================================
            IMAGE
        ========================================== */}

    <div className="relative md:w-1/3 h-[200px] w-full shrink-0 md:h-auto md:w-64">
          <img
            src={imageUrl}
            alt={name || "Property"}
            className="w-full  h-[250px] object-cover"
        
          />

          {/* Listing Type */}

          {listingLabel && (
            <Badge className="absolute left-3 top-3">
              {listingLabel}
            </Badge>
          )}

          {/* Availability */}

          {!available && (
            <Badge
              variant="destructive"
              className="absolute right-3 top-3"
            >
              Not Available
            </Badge>
          )}
        </div>

        {/* ==========================================
            CONTENT
        ========================================== */}

        <div className="flex min-w-0 flex-1 flex-col p-5">

          {/* NAME + CODE */}

          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">

              <h3 className="line-clamp-2 text-lg font-semibold text-primary">
                {name}
              </h3>

              {propertyCode && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Property Code: {propertyCode}
                </p>
              )}

            </div>

            {propertyTypeLabel && (
              <Badge
                variant="secondary"
                className="shrink-0 capitalize"
              >
                {propertyTypeLabel}
              </Badge>
            )}
          </div>

          {/* LOCATION */}

          {locationText && (
            <div className="mt-3 flex items-start gap-1.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

              <span className="line-clamp-2">
                {locationText}
              </span>
            </div>
          )}

          {/* ========================================
              PROPERTY INFORMATION
          ======================================== */}

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">

            {/* AREA */}

            {area && (
              <div className="flex items-center gap-1.5">
                <Ruler className="h-4 w-4 text-primary" />

                <span>
                  {area} {areaUnit || "sq.m"}
                </span>
              </div>
            )}

            {/* BHK */}

            {bhk && (
              <div className="flex items-center gap-1.5">
                <Home className="h-4 w-4 text-primary" />

                <span>{getBHKLabel(bhk)}</span>
              </div>
            )}

            {/* FURNISHED */}

            {furnishedStatus && (
              <div className="flex items-center gap-1.5">
                <Sofa className="h-4 w-4 text-primary" />

                <span className="capitalize">
                  {furnishedStatus.replace(
                    /[-_]/g,
                    " "
                  )}
                </span>
              </div>
            )}
          </div>

          {/* ========================================
              PRICE
          ======================================== */}

          {displayPrice && (
            <div className="mt-5">
              <div className="flex items-baseline gap-1.5">

                <CurrencyProvider
                  price={displayPrice}
                />

                {priceSuffix && (
                  <span className="text-sm text-muted-foreground">
                    {priceSuffix}
                  </span>
                )}

              </div>
            </div>
          )}

          {/* ========================================
              ACTIONS
          ======================================== */}

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">

            {/* VIEW DETAILS */}

            {slug && (
              <Button asChild>
                <Link
                  href={`/spaces/${normalizedListingType}/${slug}`}
                >
                  View Details
                </Link>
              </Button>
            )}

            {/* VISIT */}

            {propertyCode && (
              <VisitButton isAvailable={property?.isAvailable} id={propertyCode} />
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitCard;