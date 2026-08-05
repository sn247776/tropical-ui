import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';
import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { VisitButton } from '../buttons/visit-button';
import CurrencyProvider from '../currency-provider';

function VisitCard({property}:any) {

const {
    name,
    area,
    price,
    isAvailable,
    images,
    furnished,
    slug,
    listingType,
    propertyCode
  } = property;

  return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 h-[200px]">
            <img
              src={images[0]?.url || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 md:w-2/3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold">{property?.name}</h3>
                {!isAvailable && (
                  <Badge
                    variant="outline"
                    className="bg-red-50 text-red-500 border-red-200"
                  >
                    Not Available
                  </Badge>
                )}
              </div>
              <p className="text-2xl font-bold text-primary mt-1">
                <CurrencyProvider price={price} />
              </p>
              <div className="mt-1 text-gray-500 flex items-center gap-1">
                <MapPin className="h-4 w-4" />{" "}
                <span>
                  {property.location}
                  {property.sectorArea && `, ${property.sectorArea}`}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <span className="bg-gray-100 px-2 py-1 rounded-md">
                  {area} sq.ft
                </span>
                {furnished && (
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    {furnished}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2">
                
              <Button  asChild>
                <Link href={`/spaces/${listingType}/${slug}`}>View Details</Link>
              </Button>
             <VisitButton id={property?.propertyCode}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default VisitCard