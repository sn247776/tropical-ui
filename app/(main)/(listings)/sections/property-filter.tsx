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
  buyType,
  rentType,
  leaseType,
  rentRange,
  buyRange,
  bhkRent,
  bhkBuy,
  furnishedStatus,
} from "@/stores/data-list";

import DualRangeSlider from "@/components/global/range";
import { LocationListSelect } from "@/components/global/location-list";
import CurrencyProvider from "@/components/global/currency-provider";

type ListingType = "buy" | "rent" | "lease";

type FilterState = {
  bhk: string;

  // New location fields
  district: string[];
  area: string[];

  minPrice: string;
  maxPrice: string;
  propertyType: string;
  furnishedStatus: string;
};

interface PropertyFilterProps {
  listingType: ListingType;
}

const PropertyFilter = ({
  listingType,
}: PropertyFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  /**
   * Get default price range according to listing type
   */
  const getDefaultPriceRange = () => {
    switch (listingType) {
      case "buy":
        return buyRange;

      case "rent":
        return rentRange;

      case "lease":
      default:
        return {
          min: 0,
          max: 0,
          steps: 1,
        };
    }
  };

  /**
   * Current price range
   */
  const currentRange = React.useMemo(
    () => getDefaultPriceRange(),
    [listingType]
  );

  /**
   * Default filters
   */
  const DEFAULT_FILTERS = React.useMemo<FilterState>(
    () => ({
      bhk: "",

      district: [],
      area: [],

      minPrice: currentRange.min.toString(),
      maxPrice: currentRange.max.toString(),

      propertyType: "",
      furnishedStatus: "",
    }),
    [currentRange]
  );

  const [filters, setFilters] =
    React.useState<FilterState>(DEFAULT_FILTERS);

  const [isInitialLoad, setIsInitialLoad] =
    React.useState(true);

  /**
   * Get property types based on listing type
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
   * Get BHK options based on listing type
   */
  const currentBhkOptions = React.useMemo(() => {
    switch (listingType) {
      case "buy":
        return bhkBuy;

      case "rent":
        return bhkRent;

      case "lease":
      default:
        return [];
    }
  }, [listingType]);

  /**
   * BHK is only available for Buy and Rent
   */
  const showBhk =
    listingType === "buy" ||
    listingType === "rent";

  /**
   * Furnished status is currently only relevant for Rent
   */
  const showFurnishedStatus =
    listingType === "rent";

  /**
   * Price is available for Buy and Rent
   */
  const showPriceRange =
    listingType === "buy" ||
    listingType === "rent";

  /**
   * Check whether selected property is Land
   */
  const isLand =
    filters.propertyType === "land";

  /**
   * Load filters from URL
   */
  React.useEffect(() => {
    const params = Object.fromEntries(
      searchParams.entries()
    );

    const newFilters: FilterState = {
      bhk: params.bhk || "",

      district: params.district
        ? params.district.split(",")
        : [],

      area: params.area
        ? params.area.split(",")
        : [],

      minPrice:
        params.minPrice ||
        DEFAULT_FILTERS.minPrice,

      maxPrice:
        params.maxPrice ||
        DEFAULT_FILTERS.maxPrice,

      propertyType:
        params.propertyType || "",

      furnishedStatus:
        params.furnishedStatus || "",
    };

    /**
     * Lease should never have BHK
     * or furnished status
     */
    if (listingType === "lease") {
      newFilters.bhk = "";
      newFilters.furnishedStatus = "";
    }

    /**
     * Buy should never have furnished status
     */
    if (listingType === "buy") {
      newFilters.furnishedStatus = "";
    }

    /**
     * If property type is land,
     * remove BHK
     */
    if (newFilters.propertyType === "land") {
      newFilters.bhk = "";
    }

    setFilters(newFilters);
    setIsInitialLoad(false);
  }, [
    searchParams,
    listingType,
    DEFAULT_FILTERS,
  ]);

  /**
   * Update URL based on current filters
   */
  const updateURL = (
    currentFilters: FilterState
  ) => {
    const params = new URLSearchParams();

    /**
     * District
     */
    if (currentFilters.district.length > 0) {
      params.set(
        "district",
        currentFilters.district.join(",")
      );
    }

    /**
     * Area
     */
    if (currentFilters.area.length > 0) {
      params.set(
        "area",
        currentFilters.area.join(",")
      );
    }

    /**
     * Property Type
     */
    if (currentFilters.propertyType) {
      params.set(
        "propertyType",
        currentFilters.propertyType
      );
    }

    /**
     * BHK
     *
     * Only Buy/Rent
     * Only if property isn't Land
     */
    if (
      showBhk &&
      !isLand &&
      currentFilters.bhk
    ) {
      params.set(
        "bhk",
        currentFilters.bhk
      );
    }

    /**
     * Furnished Status
     *
     * Only Rent
     */
    if (
      showFurnishedStatus &&
      currentFilters.furnishedStatus
    ) {
      params.set(
        "furnishedStatus",
        currentFilters.furnishedStatus
      );
    }

    /**
     * Price
     *
     * Only Buy/Rent
     */
    if (showPriceRange) {
      if (
        currentFilters.minPrice !==
        DEFAULT_FILTERS.minPrice
      ) {
        params.set(
          "minPrice",
          currentFilters.minPrice
        );
      }

      if (
        currentFilters.maxPrice !==
        DEFAULT_FILTERS.maxPrice
      ) {
        params.set(
          "maxPrice",
          currentFilters.maxPrice
        );
      }
    }

    const queryString = params.toString();

    router.push(
      queryString
        ? `?${queryString}`
        : window.location.pathname,
      {
        scroll: false,
      }
    );
  };

  /**
   * Handle filter change
   */
  const handleFilterChange = (
    name: keyof FilterState,
    value: string | string[]
  ) => {
    const newFilters: FilterState = {
      ...filters,
      [name]: value,
    };

    /**
     * If Land is selected:
     * - Clear BHK
     */
    if (
      name === "propertyType" &&
      value === "land"
    ) {
      newFilters.bhk = "";
    }

    /**
     * Lease never uses BHK/Furnished
     */
    if (listingType === "lease") {
      newFilters.bhk = "";
      newFilters.furnishedStatus = "";
    }

    /**
     * Buy never uses Furnished Status
     */
    if (listingType === "buy") {
      newFilters.furnishedStatus = "";
    }

    setFilters(newFilters);

    if (!isInitialLoad) {
      updateURL(newFilters);
    }
  };

  /**
   * Handle price slider
   */
  const handlePriceChange = React.useCallback(
    ({
      min,
      max,
    }: {
      min: number;
      max: number;
    }) => {
      const newFilters: FilterState = {
        ...filters,
        minPrice: min.toString(),
        maxPrice: max.toString(),
      };

      setFilters(newFilters);

      if (!isInitialLoad) {
        updateURL(newFilters);
      }
    },
    [
      filters,
      isInitialLoad,
      showPriceRange,
      showBhk,
      showFurnishedStatus,
      isLand,
      DEFAULT_FILTERS,
    ]
  );

  /**
   * Clear all filters
   */
  const clearFilters = () => {
    setFilters(DEFAULT_FILTERS);

    router.push(
      window.location.pathname,
      {
        scroll: false,
      }
    );
  };

  return (
    <div className="bg-white rounded-lg md:shadow p-4 md:sticky top-20">
      <h3 className="font-bold text-lg mb-4">
        Filters
      </h3>

      <div className="space-y-6">

        {/* =====================================================
            LOCATION
        ====================================================== */}
        <div>
          <Label className="text-sm text-gray-500">
            Location
          </Label>

          <div className="mt-1">
            <LocationListSelect
              districtValue={filters.district}
              setDistrictValue={(value) =>
                handleFilterChange(
                  "district",
                  value
                )
              }
              areaValue={filters.area}
              setAreaValue={(value) =>
                handleFilterChange(
                  "area",
                  value
                )
              }
              districtMaxW="w-full"
              areaMaxW="w-full"
            />
          </div>
        </div>

        {/* =====================================================
            PROPERTY TYPE
        ====================================================== */}
        <div>
          <Label className="text-sm text-gray-500">
            Property Type
          </Label>

          <Select
            value={filters.propertyType}
            onValueChange={(value) =>
              handleFilterChange(
                "propertyType",
                value
              )
            }
          >
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>

            <SelectContent>
              {propertyTypeOptions.map(
                (type) => {
                  const Icon = type.icon;

                  return (
                    <SelectItem
                      key={type.value}
                      value={type.value}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />

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

        {/* =====================================================
            BHK
        ====================================================== */}
        {showBhk && (
          <div>
            <Label className="text-sm text-gray-500">
              BHK
            </Label>

            <Select
              value={filters.bhk}
              onValueChange={(value) =>
                handleFilterChange(
                  "bhk",
                  value
                )
              }
              disabled={isLand}
            >
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select BHK" />
              </SelectTrigger>

              <SelectContent>
                {currentBhkOptions.map(
                  (bhk) => (
                    <SelectItem
                      key={bhk.value}
                      value={bhk.value}
                    >
                      {bhk.label}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* =====================================================
            FURNISHED STATUS
        ====================================================== */}
        {showFurnishedStatus && (
          <div>
            <Label className="text-sm text-gray-500">
              Furnished Status
            </Label>

            <Select
              value={
                filters.furnishedStatus
              }
              onValueChange={(value) =>
                handleFilterChange(
                  "furnishedStatus",
                  value
                )
              }
            >
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select furnished status" />
              </SelectTrigger>

              <SelectContent>
                {furnishedStatus.map(
                  (furnished) => (
                    <SelectItem
                      key={furnished.value}
                      value={furnished.value}
                    >
                      {furnished.label}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* =====================================================
            PRICE RANGE
        ====================================================== */}
        {showPriceRange && (
          <div>
            <Label className="text-sm text-gray-500">
              Price Range
            </Label>

            <div className="mt-2">
              <DualRangeSlider
                key={listingType}
                min={currentRange.min}
                max={currentRange.max}
                step={currentRange.steps}
                initialMin={
                  Number(filters.minPrice) ||
                  currentRange.min
                }
                initialMax={
                  Number(filters.maxPrice) ||
                  currentRange.max
                }
                onChange={
                  handlePriceChange
                }
              />

              <div className="flex text-xs justify-between mt-2">
                <CurrencyProvider
                  price={Number(
                    filters.minPrice
                  )}
                />

                <CurrencyProvider
                  price={Number(
                    filters.maxPrice
                  )}
                />
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            CLEAR FILTERS
        ====================================================== */}
        <Button
          onClick={clearFilters}
          variant="outline"
          className="w-full"
        >
          Clear Filters
        </Button>

      </div>
    </div>
  );
};

export default PropertyFilter;