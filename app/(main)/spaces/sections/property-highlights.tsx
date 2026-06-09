import { Bath, BedDouble, Building2, Home, Layers, Ruler, SquareParking, User } from 'lucide-react'
import React from 'react'

function PropertyHighlights({property}:any) {
  return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="flex items-center gap-2 p-4 border rounded-lg">
          <BedDouble className="h-6 w-6 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">BHK</p>
            <p className="font-semibold">{property.bhk}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-4 border rounded-lg">
          <Bath className="h-6 w-6 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Bathrooms</p>
            <p className="font-semibold">{property.bathrooms}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-4 border rounded-lg">
          <Ruler className="h-6 w-6 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Area</p>
            <p className="font-semibold">{property.area} {property.areaUnit}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-4 border rounded-lg">
          <Layers className="h-6 w-6 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Floor</p>
            <p className="font-semibold">{property.floorNumber}</p>
          </div>
        </div>
        {property.balconyCount > 0 && (
          <div className="flex items-center gap-2 p-4 border rounded-lg">
            <Home className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Balconies</p>
              <p className="font-semibold">{property.balconyCount}</p>
            </div>
          </div>
        )}
        {property.servantRoomCount > 0 && (
          <div className="flex items-center gap-2 p-4 border rounded-lg">
            <User className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Servant Rooms</p>
              <p className="font-semibold">{property.servantRoomCount}</p>
            </div>
          </div>
        )}
        {property.facing && (
          <div className="flex items-center gap-2 p-4 border rounded-lg">
            <Building2 className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Facing</p>
              <p className="font-semibold">{property.facing}</p>
            </div>
          </div>
        )}
        {property.parkingNumber > 0 && (
          <div className="flex items-center gap-2 p-4 border rounded-lg">
            <SquareParking className="h-6 w-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Parking</p>
              <p className="font-semibold">{property.parkingNumber}</p>
            </div>
          </div>
        )}
      </div>
  )
}

export default PropertyHighlights