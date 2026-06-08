"use client"

import * as React from "react"
import { LocationCitySelect } from "./location-selector/city-select"
import { LocationAreaSelect } from "./location-selector/area-select"


export default function Example() {
  const [city, setCity] = React.useState("")
  const [areas, setAreas] = React.useState<string[]>([])

  const handleCityChange = (newCity: string) => {
    setCity(newCity)

    setAreas([])
  }

  return (
    <div className="flex gap-4">
      <LocationCitySelect
        value={city}
        setValue={handleCityChange}
      />

      <LocationAreaSelect
        city={city}
        value={areas}
        setValue={setAreas}
      />
    </div>
  )
}