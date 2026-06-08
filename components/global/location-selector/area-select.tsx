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
import { locationsData } from "@/stores/data-list"


interface Props {
  city: string
  value: string[]
  setValue: (value: string[]) => void
}

export function LocationAreaSelect({
  city,
  value,
  setValue,
}: Props) {
  const [open, setOpen] = React.useState(false)

  const areas =
    city && city in locationsData
      ? locationsData[city as keyof typeof locationsData]
      : []

  const toggleArea = (area: string) => {
    if (value.includes(area)) {
      setValue(value.filter((item) => item !== area))
    } else {
      setValue([...value, area])
    }
  }

  const displayValue = () => {
    if (!city) return "Select city first"

    if (value.length === 0)
      return "Select areas..."

    if (value.length === 1)
      return value[0]

    return `${value[0]} +${value.length - 1} more`
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={!city}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {displayValue()}

          <ChevronsUpDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search area..." />

          <CommandList>
            <CommandEmpty>No area found.</CommandEmpty>

            <CommandGroup>
              {areas.map((area) => (
                <CommandItem
                  key={area}
                  value={area}
                  onSelect={() => toggleArea(area)}
                >
                  {area}

                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value.includes(area)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}