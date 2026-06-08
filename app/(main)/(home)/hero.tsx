// import SearchProperties from '@/components/global/search-properties'
import SearchProperties from '@/components/global/search-properties'
import { basicInfo } from '@/stores/basic-info'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 py-20 text-white">
      <div className="container mx-auto px-4 ">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{basicInfo?.tagline}</h1>
          <p className="text-lg md:text-xl mb-8">
            Find places that truly feel like yours.
          </p>
        </div>

        <div className="mt-8">
          <SearchProperties />
        </div>
      </div>
    </section>
  )
}
