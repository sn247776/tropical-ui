import React from "react";
import { fetchInfoByCode } from "@/app/api/listing-info";
import ViewSpace from "../../spaces/[type]/[id]/view-space";
import PropertyUnavailableNotice from "../unavailable-notice";


interface IParams {
  id?: any;
}

export default async function PropertieDetails({
  params,
}: {
  params: IParams;
}) {
  const { id } = await params;
  const property = await fetchInfoByCode(id);


  return (
        <>

        <PropertyUnavailableNotice
        isAvailable={property?.isAvailable}
          listingType={property?.listingType}
          slug={property?.slug}
        />
     

      <ViewSpace property={property} />
    </>
  );
}