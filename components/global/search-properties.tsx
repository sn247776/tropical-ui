'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  listingTypes,
  allPriceRanges,
  rentPriceRanges,
  buyPriceRanges,
} from '@/stores/data-list';
import LocationSelector from './location-list';
import { LocationCitySelect } from './location-selector/city-select';
import { LocationAreaSelect } from './location-selector/area-select';


const SearchProperties = () => {
  const router = useRouter();
  const [listingType, setListingType] = useState('');
  const [priceRange, setPriceRange] = useState('');

    const [city, setCity] = React.useState("")
  const [areas, setAreas] = React.useState<string[]>([])

  const handleCityChange = (newCity: string) => {
    setCity(newCity)

    setAreas([])
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    
    
    if (listingType) params.append('listingType', listingType);

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split('-');
      params.append('minPrice', minPrice);
      if (maxPrice) params.append('maxPrice', maxPrice);
    }

    router.push(`/spaces?${params.toString()}`);
  };

  const handleListingTypeChange = (value: string) => {
    setListingType(value);
    setPriceRange('');
  };

  const getPriceOptions = () => {
    if (!listingType) return allPriceRanges;
    if (listingType === 'rent') return rentPriceRanges;
    if (listingType === 'buy') return buyPriceRanges;
    return allPriceRanges;
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-lg p-6">
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 md:grid-cols-5 gap-4"
      >
        {/* Listing Type Select */}
        <div className="col-span-1">
          <label htmlFor="listingType" className="text-sm text-gray-500 mb-1 block">
            Listing Type
          </label>
          <Select value={listingType} onValueChange={handleListingTypeChange}>
            <SelectTrigger id="listingType" className="w-full">
              <SelectValue placeholder="Select Type" />
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

        {/* Budget Select */}
        <div className="col-span-1">
          <label htmlFor="priceRange" className="text-sm text-gray-500 mb-1 block">
            Budget
          </label>
          <Select
            value={priceRange}
            onValueChange={setPriceRange}
            disabled={!listingType}
          >
            <SelectTrigger id="priceRange" className="w-full">
              <SelectValue placeholder="Select Budget" />
            </SelectTrigger>
            <SelectContent>
              {getPriceOptions().map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>



        {/* Location Select */}
        <div className="col-span-1">
          <label htmlFor="location" className="text-sm text-gray-500 mb-1 block">
            Location(s)
          </label>
                <LocationCitySelect
        value={city}
        setValue={handleCityChange}
      />

        </div>

                <div className="col-span-1">
          <label htmlFor="Area" className="text-sm text-gray-500 mb-1 block">
            Area
          </label>

      <LocationAreaSelect
        city={city}
        value={areas}
        setValue={setAreas}
      />
        </div>

        {/* Search Button */}
        <div className="col-span-1 flex items-end">
          <Button className="w-full" type="submit">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchProperties;