import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Armchair, Home, ShieldCheck } from "lucide-react";
import { renderIcon } from "./icons";

function DetailsSection({ property }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {/* Additional Highlights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Armchair className="h-5 w-5" />
            <span>Additional Highlights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {property?.additionalHighlights?.map(
              (highlight: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  {renderIcon(highlight)}
                  <span>{highlight}</span>
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>

      {/* Amenities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            <span>Amenities</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {property?.amenities?.map((amenity: string, index: number) => (
              <div key={index} className="flex items-center gap-3">
                {renderIcon(amenity)}
                <span>{amenity}</span>
              </div>
            ))}
            {property?.essentials?.map((essential: string, index: number) => (
              <div
                key={`essential-${index}`}
                className="flex items-center gap-3"
              >
                {renderIcon(essential)}
                <span>{essential}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Property Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            <span>Property Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">

                        <div className="flex justify-between">
              <span className="text-muted-foreground">Property Code</span>
              <span className="font-medium capitalize">{property?.propertyCode}</span>
            </div>
            <Separator />
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Property Type</span>
              <span className="font-medium capitalize">{property.propertyType}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Furnishing</span>
              <span className="font-medium capitalize">
                {property.furnishedStatus}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Available From</span>
              <span className="font-medium">
                {new Date(property.availableFrom).toLocaleDateString()}
              </span>
            </div>
            <Separator />
            {property?.leaseType?.length > 0 && (
              <>
                <div className="flex justify-between">
                  <span className="text-muted-foreground min-w-40">
                    Lease Type
                  </span>
                  <div className="flex flex-wrap gap-2 text-sm font-semibold">
                    {property.leaseType.map((type: string) => (
                      <p key={type}>{type},</p>
                    ))}
                  </div>
                </div>
                <Separator />
              </>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Property Age</span>
              <span className="font-medium">
                {property.propertyAge > 0
                  ? `${property.propertyAge} years`
                  : "New"}
              </span>
            </div>

            
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DetailsSection;
