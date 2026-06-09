import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus, MapPin, School, ShoppingBag } from 'lucide-react';
import { GiFirstAidKit } from 'react-icons/gi';


function LocationHighlights({property}:any) {
  return (
    <div>      {property?.description?.includes("Location Benefits") && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Location Highlights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {property?.description?.includes("Market") && (
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  <span>Nearby Markets</span>
                </div>
              )}
              {property?.description?.includes("Metro") && (
                <div className="flex items-center gap-3">
                  <Bus className="h-5 w-5 text-primary" />
                  <span>Metro Station Access</span>
                </div>
              )}
              {property?.description?.includes("school") && (
                <div className="flex items-center gap-3">
                  <School className="h-5 w-5 text-primary" />
                  <span>Nearby Schools</span>
                </div>
              )}
              {property?.description?.includes("hospital") && (
                <div className="flex items-center gap-3">
                  <GiFirstAidKit className="h-5 w-5 text-primary" />
                  <span>Nearby Hospitals</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}</div>
  )
}

export default LocationHighlights