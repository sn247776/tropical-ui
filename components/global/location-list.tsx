"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { locationsList } from "@/stores/data-list"

export function LocationListSelect({ value, setValue, maxW }: { value: string[], setValue: (value: string[]) => void, maxW?: string }) {
  const [open, setOpen] = React.useState(false)

  const toggleLocation = (locationValue: string) => {
    if (value.includes(locationValue)) {
      setValue(value.filter(item => item !== locationValue))
    } else {
      setValue([...value, locationValue])
    }
  }

  const displayValue = () => {
    if (value.length === 0) return "Select locations..."
    if (value.length === 1) return value[0]
    return `${value[0]} +${value.length - 1} more`
  }

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {displayValue()}
            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={`${maxW} p-0`}>
          <Command>
            <CommandInput placeholder="Search location..." className="h-9" />
            <CommandList>
              <CommandEmpty>No location found.</CommandEmpty>
              <CommandGroup>
                {locationsList.map((location) => (
                  <CommandItem
                    key={location}
                    value={location}
                    onSelect={() => {
                      toggleLocation(location)
                    }}
                  >
                    {location}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value.includes(location) ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}