import {
  Bath,
  BedDouble,
  Building2,
  Compass,
  Layers3,
  Ruler,
  Sofa,
  SquareParking,
  Warehouse,
  Car,
} from "lucide-react";

import {
  buyType,
  rentType,
  leaseType,
  bhkOptions,
  areaUnits,
  furnishedStatuses,
} from "@/app/form-list";

function PropertyHighlights({ property }: any) {
  const propertyTypes = [...buyType, ...rentType, ...leaseType];

  const propertyType = propertyTypes.find(
    (item) => item.value === property.propertyType
  );

  const bhk = bhkOptions.find(
    (item) => item.value === property.bhk
  );

  const furnished = furnishedStatuses.find(
    (item) => item.value === property.furnishedStatus
  );

  const areaUnit = areaUnits.find(
    (item) => item.value === property.areaUnit
  );

  const PropertyIcon = propertyType?.icon;

  const Item = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: any;
    label: string;
    value: any;
  }) => {
    if (
      value === undefined ||
      value === null ||
      value === "" ||
      value === 0
    ) {
      return null;
    }

    return (
      <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>

        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="font-semibold text-primary capitalize">{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

      {/* Property Type */}
      {propertyType && (
        <div className="flex items-center gap-3 rounded-xl border bg-white p-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
            {PropertyIcon && (
              <PropertyIcon className="h-5 w-5 text-primary" />
            )}
          </div>

          <div>
            <p className="text-xs text-muted-foreground">
              Property Type
            </p>

            <p className="font-semibold text-primary">
              {propertyType.label}
            </p>
          </div>
        </div>
      )}

      {/* Bedrooms */}
      {bhk && (
        <Item
          icon={BedDouble}
          label="Bedrooms"
          value={bhk.label}
        />
      )}

      {/* Bathrooms */}
      <Item
        icon={Bath}
        label="Bathrooms"
        value={property.bathrooms}
      />

      {/* Area */}
      <Item
        icon={Ruler}
        label="Area"
        value={
          property.area
            ? `${property.area} ${areaUnit?.value ?? property.areaUnit}`
            : null
        }
      />

      {/* Floor */}
      <Item
        icon={Layers3}
        label="Floor"
        value={property.floorNumber}
      />

      {/* Furnished */}
      {furnished && (
        <Item
          icon={Sofa}
          label="Furnished"
          value={furnished.label}
        />
      )}

      {/* Facing */}
      <Item
        icon={Compass}
        label="Facing"
        value={property.facing}
      />

      {/* Parking */}
      <Item
        icon={SquareParking}
        label="Parking"
        value={property.parkingNumber}
      />

      {/* Indoor Parking */}
      <Item
        icon={Warehouse}
        label="Indoor Parking"
        value={property.indoorParkingCount}
      />

      {/* Outdoor Parking */}
      <Item
        icon={Car}
        label="Outdoor Parking"
        value={property.outdoorParkingCount}
      />

      {/* Balconies */}
      <Item
        icon={Building2}
        label="Balconies"
        value={property.balconyCount}
      />
    </div>
  );
}

export default PropertyHighlights;