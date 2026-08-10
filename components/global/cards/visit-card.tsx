"use client";

import Link from "next/link";
import { MapPin, Ruler, Sofa } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { VisitButton } from "../buttons/visit-button";
import CurrencyProvider from "../currency-provider";

interface VisitCardProps {
  property: any;
}

function VisitCard({ property }: VisitCardProps) {
  const {
    name,
    location,
    area,
    price,
    pricing,
    isAvailable,
    status,
    images,
    furnished,
    slug,
    listingType,
    propertyCode,
  } = property;

  const imageUrl = images?.[0]?.url || "/placeholder.svg";

  /*
   * --------------------------------------------------
   * Location
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
   * Listing Type
   * --------------------------------------------------
   */

  const normalizedListingType = listingType?.toLowerCase();

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
   * Price
   * --------------------------------------------------
   */

  let displayPrice = null;
  let priceSuffix = "";

  if (normalizedListingType === "rent") {
    const monthly =
      pricing?.rent?.monthlyRate ??
      pricing?.rent?.monthly ??
      pricing?.monthlyRent;

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
      priceSuffix = ` / ${pricing.lease.durationYears} years`;
    }
  }

  /*
   * --------------------------------------------------
   * Availability
   * --------------------------------------------------
   */

  const available =
    isAvailable !== undefined
      ? isAvailable
      : status
        ? status.toLowerCase() === "available"
        : true;

  return (
    <div className="overflow-hidden rounded-sm border">
      <div className="flex flex-col md:flex-row">
        {/* ==========================================
            IMAGE
        ========================================== */}

        <div className="relative md:w-1/3 h-[200px] w-full shrink-0 md:h-auto md:w-64">
          <img
            src={imageUrl}
            alt={name || "Property"}
            className="w-full  h-[200px] object-cover"
        
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
          {/* Name */}

          <div className="mb-2">
            <h3 className="line-clamp-1 text-lg font-semibold text-primary">
              {name}
            </h3>
          </div>

          {/* Location */}

          {locationText && (
            <div className="mb-4 flex items-start gap-1.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

              <span className="line-clamp-2">
                {locationText}
              </span>
            </div>
          )}

          {/* ========================================
              PROPERTY INFO
          ======================================== */}

          <div className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {area && (
              <div className="flex items-center gap-1.5">
                <Ruler className="h-4 w-4 text-primary" />
                <span>{area} sq.ft</span>
              </div>
            )}

            {furnished && (
              <div className="flex items-center gap-1.5">
                <Sofa className="h-4 w-4 text-primary" />
                <span>{furnished}</span>
              </div>
            )}
          </div>

          {/* ========================================
              PRICE
          ======================================== */}

          {displayPrice && (
            <div className="mb-5">
              <div className="flex items-baseline gap-1.5">
                <CurrencyProvider price={displayPrice} />

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

          <div className="mt-auto flex flex-wrap items-center gap-2">
            <Button asChild>
              <Link
                href={`/spaces/${normalizedListingType}/${slug}`}
              >
                View Details
              </Link>
            </Button>

            {propertyCode && (
              <VisitButton id={propertyCode} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitCard;