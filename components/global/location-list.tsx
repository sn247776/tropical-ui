"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getLocationsAction } from "@/app/actions/home";


interface LocationData {
  _id: string;
  province: string;
  district: string;
  area: string;
  postalCodes?: string[];
  isActive?: boolean;
}

interface LocationListSelectProps {
  districtValue: string[];
  setDistrictValue: (value: string[]) => void;

  areaValue: string[];
  setAreaValue: (value: string[]) => void;

  districtMaxW?: string;
  areaMaxW?: string;
}

export function LocationListSelect({
  districtValue,
  setDistrictValue,
  areaValue,
  setAreaValue,
  districtMaxW = "w-full",
  areaMaxW = "w-full",
}: LocationListSelectProps) {
  const [districtOpen, setDistrictOpen] =
    React.useState(false);

  const [areaOpen, setAreaOpen] =
    React.useState(false);

  const [locationsData, setLocationsData] =
    React.useState<LocationData[]>([]);

  const [loading, setLoading] =
    React.useState(true);

  /**
   * ==========================================
   * FETCH LOCATIONS
   * ==========================================
   */
  React.useEffect(() => {
    let mounted = true;

    const loadLocations = async () => {
      try {
        setLoading(true);

        const response =
          await getLocationsAction();

        if (!mounted) return;

        if (response.success) {
          setLocationsData(
            response.data ?? []
          );
        } else {
          setLocationsData([]);
          console.error(
            response.message ||
              "Failed to fetch locations"
          );
        }
      } catch (error) {
        if (!mounted) return;

        console.error(
          "Failed to fetch locations:",
          error
        );

        setLocationsData([]);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadLocations();

    return () => {
      mounted = false;
    };
  }, []);

  /**
   * ==========================================
   * DISTRICTS
   * ==========================================
   */
  const districtsList = React.useMemo(() => {
    const districts = locationsData
      .filter(
        (location) =>
          location.isActive !== false &&
          location.district
      )
      .map(
        (location) => location.district
      );

    return Array.from(
      new Set(districts)
    ).sort((a, b) =>
      a.localeCompare(b)
    );
  }, [locationsData]);

  /**
   * ==========================================
   * AREAS
   * ==========================================
   */
  const areasList = React.useMemo(() => {
    if (districtValue.length === 0) {
      return [];
    }

    const areas = locationsData
      .filter(
        (location) =>
          location.isActive !== false &&
          districtValue.includes(
            location.district
          ) &&
          location.area
      )
      .map(
        (location) => location.area
      );

    return Array.from(
      new Set(areas)
    ).sort((a, b) =>
      a.localeCompare(b)
    );
  }, [
    locationsData,
    districtValue,
  ]);

  /**
   * ==========================================
   * SELECT / UNSELECT DISTRICT
   * ==========================================
   */
  const handleDistrictSelect = (
    district: string
  ) => {
    const alreadySelected =
      districtValue.includes(district);

    let newDistricts: string[];

    if (alreadySelected) {
      newDistricts =
        districtValue.filter(
          (item) => item !== district
        );
    } else {
      newDistricts = [
        ...districtValue,
        district,
      ];
    }

    /**
     * Update district first
     */
    setDistrictValue(newDistricts);

    /**
     * Keep only areas that belong
     * to the remaining districts.
     */
    const validAreas = locationsData
      .filter(
        (location) =>
          location.isActive !== false &&
          newDistricts.includes(
            location.district
          )
      )
      .map(
        (location) => location.area
      )
      .filter(Boolean);

    const uniqueValidAreas =
      Array.from(
        new Set(validAreas)
      );

    const newAreas =
      areaValue.filter((area) =>
        uniqueValidAreas.includes(area)
      );

    /**
     * Only update areas if necessary
     */
    if (
      newAreas.length !==
        areaValue.length ||
      newAreas.some(
        (area, index) =>
          area !== areaValue[index]
      )
    ) {
      setAreaValue(newAreas);
    }
  };

  /**
   * ==========================================
   * SELECT / UNSELECT AREA
   * ==========================================
   */
  const handleAreaSelect = (
    area: string
  ) => {
    const alreadySelected =
      areaValue.includes(area);

    if (alreadySelected) {
      setAreaValue(
        areaValue.filter(
          (item) => item !== area
        )
      );
    } else {
      setAreaValue([
        ...areaValue,
        area,
      ]);
    }
  };

  /**
   * ==========================================
   * DISPLAY VALUE
   * ==========================================
   */
  const displayValue = (
    values: string[],
    placeholder: string
  ) => {
    if (values.length === 0) {
      return placeholder;
    }

    if (values.length === 1) {
      return values[0];
    }

    return (
      <>
        {values[0]}
        <span className="ml-1 text-muted-foreground">
          +{values.length - 1} more
        </span>
      </>
    );
  };

  return (
    <div className="flex w-full flex-col gap-3">

      {/* ========================================
          DISTRICT
      ======================================== */}

      <Popover
        open={districtOpen}
        onOpenChange={
          setDistrictOpen
        }
      >
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            role="combobox"
            aria-expanded={
              districtOpen
            }
            disabled={loading}
            className="w-full justify-between"
          >
            <span className="truncate text-left">
              {loading
                ? "Loading districts..."
                : displayValue(
                    districtValue,
                    "Select district..."
                  )}
            </span>

            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className={cn(
            "p-0",
            districtMaxW
          )}
        >
          <Command>
            <CommandInput
              placeholder="Search district..."
              className="h-9"
            />

            <CommandList>
              <CommandEmpty>
                No district found.
              </CommandEmpty>

              <CommandGroup>
                {districtsList.map(
                  (district) => {
                    const selected =
                      districtValue.includes(
                        district
                      );

                    return (
                      <CommandItem
                        key={district}
                        value={district}
                        onSelect={() => {
                          handleDistrictSelect(
                            district
                          );
                        }}
                      >
                        <span className="truncate">
                          {district}
                        </span>

                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            selected
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    );
                  }
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* ========================================
          AREA
      ======================================== */}

      <Popover
        open={areaOpen}
        onOpenChange={
          setAreaOpen
        }
      >
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            role="combobox"
            aria-expanded={
              areaOpen
            }
            disabled={
              loading ||
              districtValue.length === 0
            }
            className="w-full justify-between"
          >
            <span className="truncate text-left">
              {loading
                ? "Loading areas..."
                : districtValue.length === 0
                  ? "Select district first..."
                  : displayValue(
                      areaValue,
                      "Select area..."
                    )}
            </span>

            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className={cn(
            "p-0",
            areaMaxW
          )}
        >
          <Command>
            <CommandInput
              placeholder="Search area..."
              className="h-9"
            />

            <CommandList>
              <CommandEmpty>
                No area found.
              </CommandEmpty>

              <CommandGroup>
                {areasList.map(
                  (area) => {
                    const selected =
                      areaValue.includes(
                        area
                      );

                    return (
                      <CommandItem
                        key={area}
                        value={area}
                        onSelect={() => {
                          handleAreaSelect(
                            area
                          );
                        }}
                      >
                        <span className="truncate">
                          {area}
                        </span>

                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            selected
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    );
                  }
                )}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}