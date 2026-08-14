// import SearchProperties from '@/components/global/search-properties'
import { getLocationsAction } from '@/app/actions/home';
import SearchProperties from '@/components/global/search-properties'
import { basicInfo } from '@/stores/basic-info'
import React from 'react'




export default async function HeroSection() {

    const response = await getLocationsAction();

  const locations = response.success
    ? response.data
    : [];
  return (
    <section className="relative bg-linear-to-r from-primary via-primary/90 to-primary/60 py-20 text-white">
      <div className="container mx-auto px-4 ">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{basicInfo?.tagline}</h1>
          <p className="text-lg md:text-xl mb-8">
           Curated homes and investments.
          </p>
        </div>

        <div className="mt-8">
          <SearchProperties       locations={locations}
 />
        </div>
      </div>
    </section>
  )
}
