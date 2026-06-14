"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  propertyTypes,
  listingTypes,
  rentRange,
  buyRange,
  bhkRent,
  bhkBuy,
  furnishedStatus,
} from "@/stores/data-list";
import DualRangeSlider from "@/components/global/range";
import { formatCurrency } from "@/components/global/format-currency";
import { LocationListSelect } from "@/components/global/location-list";
import { Input } from "@/components/ui/input";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

type FilterState = {
  bhk: string;
  location: string[];
  minPrice: string;
  maxPrice: string;
  propertyType: string;
  listingType: string;
  furnishedStatus: string;
  floorNumber: string;
  sortOrder: "asc" | "desc";
};

const DEFAULT_FILTERS: FilterState = {
  bhk: "",
  location: [],
  minPrice: rentRange.min.toString(),
  maxPrice: buyRange.max.toString(),
  propertyType: "",
  listingType: "",
  furnishedStatus: "",
  floorNumber: "",
  sortOrder: "desc",
};

const PropertyFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = React.useState<FilterState>(DEFAULT_FILTERS);
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);

  React.useEffect(() => {
    if (isInitialLoad) {
      const params = Object.fromEntries(searchParams.entries());
      setFilters({
        bhk: params.bhk || DEFAULT_FILTERS.bhk,
        location: params.location ? params.location.split(",") : DEFAULT_FILTERS.location,
        minPrice: params.minPrice || DEFAULT_FILTERS.minPrice,
        maxPrice: params.maxPrice || DEFAULT_FILTERS.maxPrice,
        propertyType: params.propertyType || DEFAULT_FILTERS.propertyType,
        listingType: params.listingType || DEFAULT_FILTERS.listingType,
        furnishedStatus: params.furnishedStatus || DEFAULT_FILTERS.furnishedStatus,
        floorNumber: params.floorNumber || DEFAULT_FILTERS.floorNumber,
        sortOrder: (params.sortOrder as "asc" | "desc") || DEFAULT_FILTERS.sortOrder,
      });
      setIsInitialLoad(false);
    }
  }, [searchParams, isInitialLoad]);

  const updateURL = (currentFilters: FilterState) => {
    const params = new URLSearchParams();

    const addParamIfNotDefault = (key: keyof FilterState) => {
      if (key === "location") {
        if (currentFilters.location.length > 0) {
          params.set(key, currentFilters.location.join(","));
        }
      } else {
        if (currentFilters[key] && currentFilters[key] !== DEFAULT_FILTERS[key]) {
          params.set(key, currentFilters[key] as string);
        }
      }
    };

    addParamIfNotDefault("location");
    addParamIfNotDefault("listingType");
    addParamIfNotDefault("propertyType");
    addParamIfNotDefault("bhk");
    addParamIfNotDefault("furnishedStatus");
    addParamIfNotDefault("floorNumber");
    addParamIfNotDefault("sortOrder");

    if (currentFilters.minPrice !== DEFAULT_FILTERS.minPrice) {
      params.set("minPrice", currentFilters.minPrice);
    }
    if (currentFilters.maxPrice !== DEFAULT_FILTERS.maxPrice) {
      params.set("maxPrice", currentFilters.maxPrice);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleFilterChange = (name: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [name]: value };

    if (name === "propertyType" && value === "plot") {
      newFilters.bhk = "";
      newFilters.floorNumber = "";
    }

    setFilters(newFilters);

    if (!isInitialLoad) {
      updateURL(newFilters);
    }
  };

  const handlePriceChange = React.useCallback(
    ({ min, max }: { min: number; max: number }) => {
      const newFilters = {
        ...filters,
        minPrice: min.toString(),
        maxPrice: max.toString(),
      };
      setFilters(newFilters);

      if (!isInitialLoad) {
        updateURL(newFilters);
      }
    },
    [filters, isInitialLoad]
  );

  const clearFilters = () => {
    setFilters(DEFAULT_FILTERS);
    router.push(window.location.pathname, { scroll: false });
  };

  const currentRange = React.useMemo(() => {
    return filters.listingType === "buy" ? buyRange : rentRange;
  }, [filters.listingType]);

  const currentBhkOptions = React.useMemo(() => {
    return filters.listingType === "buy" ? bhkBuy : bhkRent;
  }, [filters.listingType]);

  const showPriceRange = ["buy", "rent"].includes(filters.listingType);

  return (
    <div className="bg-white rounded-lg md:shadow p-4 md:sticky top-20">
      <h3 className="font-bold text-lg mb-4">Filters</h3>

      <div className="space-y-6">

        {/* Listing Type + Sort Order Button */}
        <div>
          <Label className="text-sm text-gray-500 mb-1">Listing Type</Label>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <Select
                value={filters.listingType}
                onValueChange={(value) => {
                  const defaultMin = value === "buy" ? buyRange.min : rentRange.min;
                  const defaultMax = value === "buy" ? buyRange.max : rentRange.max;

                  const newFilters = {
                    ...DEFAULT_FILTERS,
                    location: filters.location,
                    listingType: value,
                    minPrice: defaultMin.toString(),
                    maxPrice: defaultMax.toString(),
                    furnishedStatus: value === "rent" ? filters.furnishedStatus : "",
                    sortOrder: filters.sortOrder,
                  };

                  setFilters(newFilters);

                  const params = new URLSearchParams();
                  params.set("listingType", value);
                  if (filters.location.length > 0) {
                    params.set("location", filters.location.join(","));
                  }
                  if (value === "rent" && filters.furnishedStatus) {
                    params.set("furnishedStatus", filters.furnishedStatus);
                  }
                  if (filters.sortOrder !== DEFAULT_FILTERS.sortOrder) {
                    params.set("sortOrder", filters.sortOrder);
                  }

                  router.push(`?${params.toString()}`, { scroll: false });
                }}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select listing type" />
                </SelectTrigger>
                <SelectContent>
                  {listingTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                handleFilterChange("sortOrder", filters.sortOrder === "asc" ? "desc" : "asc")
              }
              className="mt-1"
              title={filters.sortOrder === "asc" ? "Price: Low to High" : "Price: High to Low"}
            >
              {filters.sortOrder === "asc" ? <FaSortAmountUp className="h-4 w-4" /> : <FaSortAmountDown className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        <div>
          <Label className="text-sm text-gray-500">Location(s)</Label>
          <LocationListSelect
            value={filters.location}
            setValue={(value: string[]) => handleFilterChange("location", value)}
          />
        </div>

        <div>
          <Label className="text-sm text-gray-500">Property Type</Label>
          <Select
            value={filters.propertyType}
            onValueChange={(value) => handleFilterChange("propertyType", value)}
          >
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 items-center gap-2">
          <div>
            <Label className="text-sm text-gray-500">BHK</Label>
            <Select
              value={filters.bhk}
              onValueChange={(value) => handleFilterChange("bhk", value)}
              disabled={filters.propertyType === "plot"}
            >
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select BHK" />
              </SelectTrigger>
              <SelectContent>
                {currentBhkOptions.map((bhk) => (
                  <SelectItem key={bhk.value} value={bhk.value}>
                    {bhk.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm text-gray-500">Floor Number</Label>
            <Input
              type="number"
              value={filters.floorNumber}
              onChange={(e) => handleFilterChange("floorNumber", e.target.value)}
              disabled={filters.propertyType === "plot"}
              placeholder="Enter number"
              min={0}
            />
          </div>
        </div>

        <div>
          <Label className="text-sm text-gray-500">Furnished Status</Label>
          <Select
            value={filters.furnishedStatus}
            onValueChange={(value) => handleFilterChange("furnishedStatus", value)}
          >
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select furnished status" />
            </SelectTrigger>
            <SelectContent>
              {furnishedStatus.map((furnished) => (
                <SelectItem key={furnished.value} value={furnished.value}>
                  {furnished.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {showPriceRange && (
          <div>
            <Label className="text-sm text-gray-500">
              Price Range ({filters.listingType === "buy" ? "Buy" : "Rent"})
            </Label>
            <div className="mt-2">
              <DualRangeSlider
                key={filters.listingType}
                min={currentRange.min}
                max={currentRange.max}
                step={currentRange.steps}
                initialMin={parseInt(filters.minPrice) || currentRange.min}
                initialMax={parseInt(filters.maxPrice) || currentRange.max}
                onChange={handlePriceChange}
              />
              <div className="flex text-xs justify-between mt-1">
                <span>THB {formatCurrency(Number(filters.minPrice))}</span>
                <span>THB {formatCurrency(Number(filters.maxPrice))}</span>
              </div>
            </div>
          </div>
        )}

        <Button onClick={clearFilters} className="w-full">
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default PropertyFilter;
