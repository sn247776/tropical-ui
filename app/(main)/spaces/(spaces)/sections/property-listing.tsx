'use client'
import PropertyCard from '@/components/global/cards/property-card'
import { useViewTypeStore } from '@/components/global/view-type';
import React from 'react'

function PropertyListing({properties}:any) {
  const { viewType } = useViewTypeStore();
  return (
              <div className="w-full md:w-3/4">
            {properties?.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <h3 className="text-xl font-medium mb-2">No properties found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more results.</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                {properties?.map((property:any) => (
                  <PropertyCard 
                    key={property._id} 
                    property={property} 
                    viewType={viewType}
                  />
                ))}
              </div>
            )}
          </div>
  )
}

export default PropertyListing