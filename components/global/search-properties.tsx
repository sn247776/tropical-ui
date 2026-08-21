"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  listingTypes,
  thbAllPriceRanges,
  thbRentPriceRanges,
  thbBuyPriceRanges,
  thbLeasePriceRanges,
  buyType,
  rentType,
  leaseType,
} from "@/stores/data-list";
import { LocationListSelect } from "./location-list";


interface SearchPropertiesClientProps {
  locations: string[];
}

export default function SearchPropertiesClient({
  locations,
}: SearchPropertiesClientProps) {
  const router = useRouter();

  const [listingType, setListingType] =
    React.useState("");

  const [priceRange, setPriceRange] =
    React.useState("");

  // MULTIPLE LOCATIONS
  const [location, setLocation] =
    React.useState<string[]>([]);

  const [propertyType, setPropertyType] =
    React.useState("");

  /**
   * ==========================================
   * PROPERTY TYPE OPTIONS
   * ==========================================
   */
  const propertyTypeOptions = React.useMemo(() => {
    switch (listingType) {
      case "buy":
        return buyType;

      case "rent":
        return rentType;

      case "lease":
        return leaseType;

      default:
        return [];
    }
  }, [listingType]);

  /**
   * ==========================================
   * PRICE OPTIONS
   * ==========================================
   */
  const getPriceOptions = () => {
    switch (listingType) {
      case "rent":
        return thbRentPriceRanges;

      case "buy":
        return thbBuyPriceRanges;

      case "lease":
        return thbLeasePriceRanges;

      default:
        return thbAllPriceRanges;
    }
  };

  /**
   * ==========================================
   * LISTING TYPE CHANGE
   * ==========================================
   *
   * Reset:
   * - Budget
   * - Property Type
   *
   * Location is NOT reset.
   */
  const handleListingTypeChange = (
    value: string
  ) => {
    setListingType(value);
    setPriceRange("");
    setPropertyType("");
  };

  /**
   * ==========================================
   * SEARCH
   * ==========================================
   */
  const handleSearch = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    /**
     * Listing type is required
     */
    if (!listingType) {
      return;
    }

    const params = new URLSearchParams();

    /**
     * ==========================================
     * LOCATION
     * ==========================================
     *
     * Multiple locations are converted to:
     *
     * location=Haad Rin,Thong Sala,Srithanu
     */
    if (location.length > 0) {
      params.set(
        "location",
        location.join(",")
      );
    }

    /**
     * ==========================================
     * PROPERTY TYPE
     * ==========================================
     */
    if (propertyType) {
      params.set(
        "propertyType",
        propertyType
      );
    }

    /**
     * ==========================================
     * PRICE
     * ==========================================
     */
    if (
      priceRange &&
      priceRange !== "all"
    ) {
      const [
        minPrice,
        maxPrice,
      ] = priceRange.split("-");

      if (minPrice) {
        params.set(
          "minPrice",
          minPrice
        );
      }

      if (maxPrice) {
        params.set(
          "maxPrice",
          maxPrice
        );
      }
    }

    /**
     * ==========================================
     * DESTINATION
     * ==========================================
     */
    const queryString =
      params.toString();

    router.push(
      queryString
        ? `/${listingType}?${queryString}`
        : `/${listingType}`
    );
  };

  return (
    <div className="mx-auto w-full rounded-lg bg-white p-6 shadow-lg">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 gap-4 md:grid-cols-5"
      >
        {/* ========================================
            LISTING TYPE
        ========================================= */}
        <div>
          <label
            htmlFor="listingType"
            className="mb-1 block text-sm text-gray-500"
          >
            Listing Type
          </label>

          <Select
            value={listingType}
            onValueChange={
              handleListingTypeChange
            }
          >
            <SelectTrigger
              id="listingType"
              className="w-full"
            >
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>

            <SelectContent>
              {listingTypes.map(
                (type) => (
                  <SelectItem
                    key={type.value}
                    value={type.value}
                  >
                    {type.label}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>

        {/* ========================================
            PROPERTY TYPE
        ========================================= */}
        <div>
          <label
            htmlFor="propertyType"
            className="mb-1 block text-sm text-gray-500"
          >
            Property Type
          </label>

          <Select
            value={propertyType}
            onValueChange={
              setPropertyType
            }
            disabled={!listingType}
          >
            <SelectTrigger
              id="propertyType"
              className="w-full"
            >
              <SelectValue
                placeholder={
                  listingType
                    ? "Select Property Type"
                    : "Select Type First"
                }
              />
            </SelectTrigger>

            <SelectContent>
              {propertyTypeOptions.map(
                (type) => {
                  const Icon =
                    type.icon;

                  return (
                    <SelectItem
                      key={type.value}
                      value={type.value}
                    >
                      <div className="flex items-center gap-2">
                        {Icon && (
                          <Icon className="h-4 w-4" />
                        )}

                        <span>
                          {type.label}
                        </span>
                      </div>
                    </SelectItem>
                  );
                }
              )}
            </SelectContent>
          </Select>
        </div>

        {/* ========================================
            BUDGET
        ========================================= */}
        <div>
          <label
            htmlFor="priceRange"
            className="mb-1 flex items-center gap-1 text-sm text-gray-500"
          >
            ฿ Budget
          </label>

          <Select
            value={priceRange}
            onValueChange={
              setPriceRange
            }
            disabled={!listingType}
          >
            <SelectTrigger
              id="priceRange"
              className="w-full"
            >
              <SelectValue placeholder="Select Budget" />
            </SelectTrigger>

            <SelectContent>
              {getPriceOptions().map(
                (range) => (
                  <SelectItem
                    key={range.value}
                    value={range.value}
                  >
                    {range.label}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>

        {/* ========================================
            LOCATION - MULTI SELECT
        ========================================= */}
        <div>
          <label
            htmlFor="location"
            className="mb-1 flex items-center gap-1 text-sm text-gray-500"
          >
            <MapPin className="h-4 w-4" />

            Location
          </label>

          <LocationListSelect
            locationValue={location}
            setLocationValue={setLocation}
            maxW="w-[300px]"
          />
        </div>

        {/* ========================================
            SEARCH
        ========================================= */}
        <div className="flex items-end">
          <Button
            type="submit"
            className="w-full"
            disabled={!listingType}
          >
            <Search className="mr-2 h-4 w-4" />

            Search
          </Button>
        </div>
      </form>
    </div>
  );
}