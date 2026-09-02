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

interface LocationListSelectProps {
  locationValue: string[];
  setLocationValue: (value: string[]) => void;

  maxW?: string;

  /**
   * Allows the trigger to be styled like the other form inputs.
   */
  className?: string;

  /**
   * true  = multiple locations can be selected
   * false = only one location can be selected
   */
  multiSelect?: boolean;
}

export function LocationListSelect({
  locationValue,
  setLocationValue,
  maxW = "w-full",
  className,
  multiSelect = true,
}: LocationListSelectProps) {
  const [open, setOpen] =
    React.useState(false);

  const [locations, setLocations] =
    React.useState<string[]>([]);

  const [loading, setLoading] =
    React.useState(true);

  React.useEffect(() => {
    let mounted = true;

    const loadLocations = async () => {
      try {
        setLoading(true);

        const response =
          await getLocationsAction();

        if (!mounted) return;

        if (response.success) {
          setLocations(
            response.data ?? []
          );
        } else {
          setLocations([]);

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

        setLocations([]);
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

  const handleLocationSelect = (
    location: string
  ) => {
    /*
     * SINGLE SELECT
     *
     * Replace the current value and
     * automatically close the dropdown.
     */
    if (!multiSelect) {
      setLocationValue([location]);
      setOpen(false);
      return;
    }

    /*
     * MULTI SELECT
     *
     * Keep the existing toggle behavior.
     */
    const alreadySelected =
      locationValue.includes(location);

    if (alreadySelected) {
      setLocationValue(
        locationValue.filter(
          (item) => item !== location
        )
      );

      return;
    }

    setLocationValue([
      ...locationValue,
      location,
    ]);
  };

  const displayValue = () => {
    if (locationValue.length === 0) {
      return "Select location...";
    }

    if (locationValue.length === 1) {
      return locationValue[0];
    }

    return (
      <>
        {locationValue[0]}

        <span className="ml-1 text-muted-foreground">
          +{locationValue.length - 1} more
        </span>
      </>
    );
  };

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={loading}
          className={cn(
            "w-full justify-between",
            className
          )}
        >
          <span className="min-w-0 flex-1 truncate text-left">
            {loading
              ? "Loading locations..."
              : displayValue()}
          </span>

          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className={cn(
          "p-0",
          maxW
        )}
      >
        <Command>
          <CommandInput
            placeholder="Search location..."
            className="h-9"
          />

          <CommandList>
            <CommandEmpty>
              No location found.
            </CommandEmpty>

            <CommandGroup>
              {locations.map(
                (location) => {
                  const selected =
                    locationValue.includes(
                      location
                    );

                  return (
                    <CommandItem
                      key={location}
                      value={location}
                      onSelect={() =>
                        handleLocationSelect(
                          location
                        )
                      }
                    >
                      <span className="truncate">
                        {location}
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
  );
}