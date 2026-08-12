import Link from "next/link";
import {
  CalendarDays,
  Clock,
  MapPin,
  Ruler,
  Sofa,
  Home,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CurrencyProvider from "@/components/global/currency-provider";

import RescheduleVisit from "./reschedule-visit";
import CancelVisit from "./cancel-visit";
import { bhkOptions, timeSlots } from "@/app/form-list";

interface BookedVisitsProps {
  visits: any[];
}



const getTimeSlotLabel = (value: string) => {
  return (
    timeSlots.find((slot) => slot.value === String(value))
      ?.label || value
  );
};

const getBHKLabel = (value: string) => {
  return (
    bhkOptions.find((slot) => slot.value === String(value))
      ?.label || value
  );
};

function getListingLabel(listingType?: string) {
  switch (listingType?.toLowerCase()) {
    case "rent":
      return "For Rent";

    case "buy":
      return "For Sale";

    case "lease":
      return "For Lease";

    default:
      return listingType || "";
  }
}

function getPropertyPrice(property: any) {
  const listingType = property.listingType?.toLowerCase();
  const pricing = property.pricing;

  if (listingType === "rent") {
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
      return {
        price: monthly,
        suffix: "/ month",
      };
    }

    if (weekly) {
      return {
        price: weekly,
        suffix: "/ week",
      };
    }

    if (daily) {
      return {
        price: daily,
        suffix: "/ day",
      };
    }
  }

  if (listingType === "buy") {
    const price =
      pricing?.salePrice ??
      pricing?.sale?.salePrice ??
      pricing?.sale?.price;

    if (price) {
      return {
        price,
        suffix: "",
      };
    }
  }

  if (listingType === "lease") {
    const price =
      pricing?.lease?.totalPrice ??
      pricing?.lease?.yearlyPrice;

    if (price) {
      return {
        price,
        suffix: pricing?.lease?.durationYears
          ? `/ ${pricing.lease.durationYears} years`
          : "",
      };
    }
  }

  return null;
}

function PropertyInfoCard({
  property,
}: {
  property: any;
}) {
  const priceData = getPropertyPrice(property);

  const locationText = [
    property.location?.province,
    property.location?.district,
    property.location?.area,
  ]
    .filter(Boolean)
    .join(", ");

  const imageUrl =
    property.images?.[0]?.url ||
    property.images?.[0] ||
    "/placeholder.svg";

  const listingLabel = getListingLabel(
    property.listingType
  );

  return (
    <div className="overflow-hidden rounded-lg border bg-background">
      <div className="flex flex-col sm:flex-row">
        {/* IMAGE */}
    <div className="relative md:w-1/3 h-[200px] w-full shrink-0 md:h-auto md:w-64">
          <img
            src={imageUrl}
            alt={property?.name || "Property"}
            className="w-full  h-[200px] object-cover"
        
          />

          {listingLabel && (
            <Badge className="absolute left-3 top-3">
              {listingLabel}
            </Badge>
          )}
        </div>

        {/* CONTENT */}
        <div className="flex min-w-0 flex-1 flex-col p-4">
          {/* NAME */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="line-clamp-2 text-lg font-semibold text-primary">
                {property.name}
              </h3>

              {property.propertyCode && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Property Code: {property.propertyCode}
                </p>
              )}
            </div>

            {property.propertyType && (
              <Badge
                variant="secondary"
                className="shrink-0 capitalize"
              >
                {property.propertyType}
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

          {/* PROPERTY INFO */}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {property.area && (
              <div className="flex items-center gap-1.5">
                <Ruler className="h-4 w-4 text-primary" />

                <span>
                  {property.area} {property.areaUnit || "sq.m"}
                </span>
              </div>
            )}

            {property.bhk && (
              <div className="flex items-center gap-1.5">
                <Home className="h-4 w-4 text-primary" />

                <span>{getBHKLabel(property.bhk)}</span>
              </div>
            )}

            {property.furnishedStatus && (
              <div className="flex items-center gap-1.5">
                <Sofa className="h-4 w-4 text-primary" />

                <span className="capitalize">
                  {property.furnishedStatus}
                </span>
              </div>
            )}
          </div>

          {/* PRICE + DETAILS */}
          <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-4">
            {priceData ? (
              <div className="flex items-baseline gap-1.5">
                <CurrencyProvider price={priceData.price} />

                {priceData.suffix && (
                  <span className="text-sm text-muted-foreground">
                    {priceData.suffix}
                  </span>
                )}
              </div>
            ) : (
              <span className="text-sm text-muted-foreground">
                Price on request
              </span>
            )}

            {property.slug && (
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <Link
                  href={`/spaces/${property.listingType}/${property.slug}`}
                >
                  View Space
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookedVisits({
  visits,
}: BookedVisitsProps) {
  if (!visits.length) {
    return (
      <div className="rounded-xl border border-dashed p-8 text-center">
        <CalendarDays className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />

        <h3 className="font-semibold">
          No booked visits
        </h3>

        <p className="mt-1 text-sm text-muted-foreground">
          You haven't booked any property visits yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {visits.map((visit) => {
        const isCancelled =
          visit.status === "Cancelled";

        const isCompleted =
          visit.status === "Completed";

        return (
          <div
            key={visit._id}
            className="overflow-hidden rounded-xl border bg-card"
          >
            {/* ======================================
                VISIT HEADER
            ====================================== */}
            <div className="flex flex-col gap-4 border-b bg-muted/30 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {/* DATE */}
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />

                    <span className="text-sm font-medium">
                      {visit.visitDate
                        ? new Date(
                            visit.visitDate
                          ).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )
                        : "-"}
                    </span>
                  </div>

                  {/* TIME */}
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />

                    <span className="text-sm font-medium">
                      {getTimeSlotLabel(
                        visit.timeSlot
                      )}
                    </span>
                  </div>
                </div>

                {visit.notes && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    Note: {visit.notes}
                  </p>
                )}
              </div>

              {/* STATUS + ACTIONS */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant={
                    isCancelled
                      ? "destructive"
                      : isCompleted
                        ? "secondary"
                        : "default"
                  }
                >
                  {visit.status}
                </Badge>

                {!isCancelled && !isCompleted && (
                  <>
                    <RescheduleVisit visit={visit} />

                    <CancelVisit
                      visitId={visit._id}
                    />
                  </>
                )}
              </div>
            </div>

            {/* ======================================
                PROPERTIES
            ====================================== */}
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">
                  Properties
                </h3>

                <span className="text-xs text-muted-foreground">
                  {visit.properties?.length || 0}{" "}
                  {visit.properties?.length === 1
                    ? "property"
                    : "properties"}
                </span>
              </div>

              {visit.properties?.length > 0 ? (
                <div className="space-y-3">
                  {visit.properties.map(
                    (property: any) => (
                      <PropertyInfoCard
                        key={
                          property._id ||
                          property.propertyCode
                        }
                        property={property}
                      />
                    )
                  )}
                </div>
              ) : (
                <div className="rounded-lg border border-dashed p-5 text-center">
                  <p className="text-sm text-muted-foreground">
                    Property information is no longer
                    available.
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}