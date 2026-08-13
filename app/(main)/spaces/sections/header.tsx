import CurrencyProvider from "@/components/global/currency-provider";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

function PropertyHeader({ property }: any) {
  const pricing = property?.pricing || {};

  const renderPrice = () => {
    switch (property.listingType) {
      case "buy":
        return (
          <div className="text-right">
            <p className="text-sm text-muted-foreground">
              Sale Price
            </p>

            <p className="text-3xl font-bold text-primary">
              <CurrencyProvider
                price={pricing.salePrice}
              />
            </p>
          </div>
        );

      case "rent":
        return (
          <div className="space-y-2 text-right flex flex-wrap gap-4 justify-center items-center">

            {pricing.monthlyRate > 0 && (
              <div>
                <p className="text-xs text-muted-foreground">
                  Monthly Rent
                </p>

                <p className="text-2xl font-bold text-primary">
                  <CurrencyProvider
                    price={pricing.monthlyRate}
                  />
                  <span className="text-base font-normal text-muted-foreground">
                    /month
                  </span>
                </p>
              </div>
            )}

            {pricing.weeklyRate > 0 && (
              <div>
                <p className="text-xs text-muted-foreground">
                  Weekly Rent
                </p>

                <p className="text-2xl font-bold text-primary">
                  <CurrencyProvider
                    price={pricing.weeklyRate}
                  />
                  <span className="text-sm text-muted-foreground">
                    /week
                  </span>
                </p>
              </div>
            )}

            {pricing.dailyRate > 0 && (
              <div>
                <p className="text-xs text-muted-foreground">
                  Daily Rent
                </p>

                <p className="text-2xl font-bold text-primary">
                  <CurrencyProvider
                    price={pricing.dailyRate}
                  />
                  <span className="text-sm text-muted-foreground">
                    /day
                  </span>
                </p>
              </div>
            )}
          </div>
        );

      case "lease":
        return (
          <div className="space-y-2 text-right">

            <div>
              <p className="text-xs text-muted-foreground">
                Lease Price
              </p>

              <p className="text-3xl font-bold text-primary">
                <CurrencyProvider
                  price={pricing.totalPrice}
                />
              </p>
            </div>

            {pricing.yearlyRate > 0 && (
              <p className="text-sm">
                <span className="text-muted-foreground">
                  Yearly:
                </span>{" "}
                <CurrencyProvider
                  price={pricing.yearlyRate}
                />
              </p>
            )}

            {pricing.durationYears > 0 && (
              <p className="text-sm text-muted-foreground">
                {pricing.durationYears} Year Lease
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">

      {/* Left */}
      <div className="space-y-3">

        <div className="flex flex-wrap items-center gap-2">

          <Badge
            className="capitalize"
            variant="outline"
          >
            {property.listingType}
          </Badge>

          {property.furnishedStatus && (
            <Badge variant="secondary" className="capitalize">
              {property.furnishedStatus}
            </Badge>
          )}

          <Badge variant="outline">
            {property.propertyCode}
          </Badge>

        </div>

        <h1 className="text-3xl font-bold">
          {property.name}
        </h1>

        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={18} />

          <span>
            {[
              property.locationId?.area,
              property.locationId?.district,
              property.locationId?.province,
            ]
              .filter(Boolean)
              .join(", ")}
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="min-w-[250px]">
        {renderPrice()}

        {(pricing.securityDeposit > 0 ||
          pricing.maintenanceFee > 0) && (
          <div className="mt-4 border-t pt-3 space-y-1 text-sm">

            {pricing.securityDeposit > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Security Deposit
                </span>

                <CurrencyProvider
                  price={pricing.securityDeposit}
                />
              </div>
            )}

            {pricing.maintenanceFee > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Maintenance
                </span>

                <CurrencyProvider
                  price={pricing.maintenanceFee}
                />
              </div>
            )}

          </div>
        )}
      </div>

    </div>
  );
}

export default PropertyHeader;