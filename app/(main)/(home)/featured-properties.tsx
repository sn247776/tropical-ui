import PropertyCard from '@/components/global/cards/property-card'
import { fetchHomeInfo } from '@/app/api/home';



export default async function FeaturedProperties() {
    const properties = await fetchHomeInfo();
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-primary">Handpicked Homes</h2>
        </div>
        
        {properties?.data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.data?.map((property:any) => (
              <PropertyCard key={property?._id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No featured properties available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}