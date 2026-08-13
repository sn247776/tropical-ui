import { Suspense } from "react";
import ViewType from "@/components/global/view-type";
import Pagination from "@/components/global/pagination";
import MobFilters from "../sections/mob-filter";
import PropertyFilter from "../sections/property-filter";
import PropertyListing from "../sections/property-listing";
import { fetchLeaseList } from "@/app/api/listing-info";

type SearchParams = Promise<{
  page?: string;
  bhk?: string;
  location?: string;
  minPrice?: string;
  maxPrice?: string;
  propertyType?: string;
  furnishedStatus?: string;
  floorNumber?: string;
  sortOrder?: string;
}>;

export default async function RentPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;

  const currentPage = Number(params.page || "1");

  const bhk = params.bhk || "";
  const location = params.location || "";
  const minPrice = params.minPrice || "";
  const maxPrice = params.maxPrice || "";
  const propertyType = params.propertyType || "";
  const furnishedStatus = params.furnishedStatus || "";
  const floorNumber = params.floorNumber || "";
  const sortBy = "price";
  const sortOrder = params.sortOrder || "desc";

  const properties = await fetchLeaseList({
    page: currentPage,
    bhk,
    location,
    minPrice,
    maxPrice,
    propertyType,
    furnishedStatus,
    floorNumber,
    sortBy,
    sortOrder,
  });


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold sm:text-3xl text-primary">
          Available Spaces
        </h1>

        <Suspense fallback={null}>
          <MobFilters listingType="lease" />
        </Suspense>
      </div>

      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          {properties?.total || 0} properties found
        </p>

        <Suspense fallback={null}>
          <ViewType />
        </Suspense>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="hidden w-full md:block md:w-1/4">
          <Suspense fallback={null}>
            <PropertyFilter listingType="lease" />
          </Suspense>
        </div>

        <PropertyListing
          properties={properties?.data}
        />
      </div>

      <div className="my-8">
        <Suspense fallback={null}>
          <Pagination
            totalPage={properties?.totalPages}
          />
        </Suspense>
      </div>
    </div>
  );
}