import React from "react";
import PropertyHeader from "../../sections/header";
import ActionButtons from "../../sections/action-buttons";
import PropertieSlider from "../../sections/propertie-slider";
import MobileSlider from "../../sections/mobile-slider";
import PropertyHighlights from "../../sections/property-highlights";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DetailsSection from "../../sections/details-section";
import LocationHighlights from "../../sections/location-highlights";
import SimilarProperties from "../../sections/similar-properties";
import CallToAction from "../../sections/call-to-action";
import { demoProperty } from "./demo";
// import { fetchPropertyInfo } from "@/app/api/properties";


interface IParams {
  id?: any;
}

export default function PropertieDetails({
  params,
}: {
  params: IParams;
}) {
//   const slug: any = params.id;
//   const property: any = await fetchPropertyInfo(slug);
const property:any = demoProperty;

  return (
    <div className="container py-8 mx-auto">

      <PropertyHeader property={property}/>

      {/* Action Buttons */}
      <ActionButtons property={property}/>
      {/* Image Slider */}
      <div className="mb-8 rounded-md overflow-hidden shadow-lg hidden md:block">
        <PropertieSlider property={property} />
      </div>

            <div className="mb-8 rounded-md overflow-hidden shadow-lg  md:hidden">
        <MobileSlider property={property} />
      </div>

      {/* Property Highlights */}
      <PropertyHighlights property={property}/>

      {/* Description Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            className="basic-text-style"
            dangerouslySetInnerHTML={{ __html: property.description }}
          />
        </CardContent>
      </Card>

      {/* Details Section */}
      <DetailsSection property={property} />

      {/* Location Highlights (if available in description) */}

      <LocationHighlights property={property} />
<SimilarProperties properties={property?.similarProperties}/>
      {/* Call to Action */}
      <CallToAction property={property}/>
      
    </div>
  );
}