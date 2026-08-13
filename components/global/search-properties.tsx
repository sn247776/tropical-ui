"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  MapPin,
} from "lucide-react";

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
} from "@/stores/data-list";

interface Location {
  _id: string;
  province: string;
  district: string;
  area: string;
  postalCodes: string[];
  isActive: boolean;
}

interface SearchPropertiesClientProps {
  locations: Location[];
}

export default function SearchPropertiesClient({
  locations,
}: SearchPropertiesClientProps) {
  const router = useRouter();

  const [listingType, setListingType] =
    React.useState("");

  const [priceRange, setPriceRange] =
    React.useState("");

  const [district, setDistrict] =
    React.useState("");

  const [area, setArea] =
    React.useState("");

  /**
   * Get unique districts from location API
   */
  const districts = React.useMemo(() => {
    return Array.from(
      new Set(
        locations
          .filter((location) => location.isActive)
          .map((location) => location.district)
          .filter(Boolean)
      )
    ).sort();
  }, [locations]);

  /**
   * Areas belonging to selected district
   */
  const areas = React.useMemo(() => {
    if (!district) {
      return [];
    }

    return Array.from(
      new Set(
        locations
          .filter(
            (location) =>
              location.isActive &&
              location.district === district
          )
          .map((location) => location.area)
          .filter(Boolean)
      )
    ).sort();
  }, [locations, district]);

  /**
   * When district changes,
   * clear previously selected area.
   */
  const handleDistrictChange = (value: string) => {
    setDistrict(value);
    setArea("");
  };

  /**
   * Listing type controls price ranges.
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
   * Change listing type
   */
  const handleListingTypeChange = (
    value: string
  ) => {
    setListingType(value);
    setPriceRange("");
  };

  /**
   * Search
   */
  const handleSearch = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    /**
     * If no listing type is selected,
     * we don't know which page to redirect to.
     */
    if (!listingType) {
      return;
    }

    const params = new URLSearchParams();

    /**
     * Price
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
        params.set("minPrice", minPrice);
      }

      if (maxPrice) {
        params.set("maxPrice", maxPrice);
      }
    }

    /**
     * District
     */
    if (district) {
      params.set(
        "district",
        district
      );
    }

    /**
     * Area
     */
    if (area) {
      params.set(
        "area",
        area
      );
    }

    /**
     * Listing type determines page.
     *
     * rent  -> /rent
     * buy   -> /buy
     * lease -> /lease
     */
    router.push(
      `/${listingType}?${params.toString()}`
    );
  };

  return (
    <div className="mx-auto w-full rounded-lg bg-white p-6 shadow-lg">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 gap-4 md:grid-cols-5"
      >
        {/* Listing Type */}
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
              {listingTypes.map((type) => (
                <SelectItem
                  key={type.value}
                  value={type.value}
                >
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor="priceRange"
            className="mb-1 flex items-center gap-1 text-sm text-gray-500"
          >
        

           ฿ Budget
          </label>

          <Select
            value={priceRange}
            onValueChange={setPriceRange}
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

        {/* District */}
        <div>
          <label
            htmlFor="district"
            className="mb-1 flex items-center gap-1 text-sm text-gray-500"
          >
            <MapPin className="h-4 w-4" />

            District
          </label>

          <Select
            value={district}
            onValueChange={
              handleDistrictChange
            }
          >
            <SelectTrigger
              id="district"
              className="w-full"
            >
              <SelectValue placeholder="Select District" />
            </SelectTrigger>

            <SelectContent>
              {districts.map(
                (districtName) => (
                  <SelectItem
                    key={districtName}
                    value={districtName}
                  >
                    {districtName}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Area */}
        <div>
          <label
            htmlFor="area"
            className="mb-1 flex items-center gap-1 text-sm text-gray-500"
          >
            <MapPin className="h-4 w-4" />

            Area
          </label>

          <Select
            value={area}
            onValueChange={setArea}
            disabled={!district}
          >
            <SelectTrigger
              id="area"
              className="w-full"
            >
              <SelectValue
                placeholder={
                  district
                    ? "Select Area"
                    : "Select District First"
                }
              />
            </SelectTrigger>

            <SelectContent>
              {areas.map(
                (areaName) => (
                  <SelectItem
                    key={areaName}
                    value={areaName}
                  >
                    {areaName}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Search */}
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