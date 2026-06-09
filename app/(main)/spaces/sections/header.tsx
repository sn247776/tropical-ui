import { formatCurrency } from '@/components/global/format-currency'
import { Badge } from '@/components/ui/badge'
import { MapPin } from 'lucide-react'

function PropertyHeader({property}:any) {
  return (
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-primary border-primary">
              {property.listingType === "rent" ? "Rent" : "Buy"}
            </Badge>
            <Badge className="capitalize" variant="secondary">
              {property.furnishedStatus}
            </Badge>
            <div className='font-bold text-primary text-sm'>{property?.propertyCode}</div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">{property.name}</h1>
          <div className="flex items-center text-muted-foreground mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="flex gap-2">
                 {property?.locationId?.locationName}
                 {property?.locationId?.locationName ? " " : null}
                  {property?.locationId?.sector}
          </span>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-3xl font-bold text-primary">
            TBH {formatCurrency(property.price)}
            {property.listingType === "rent" && <span className="text-lg font-normal text-muted-foreground">/month</span>}
          </p>
          {property.securityDeposit > 0 && (
            <p className="text-sm text-muted-foreground">
              Security: TBH {formatCurrency(property.securityDeposit)}
            </p>
          )}
        </div>
      </div>

  )
}

export default PropertyHeader