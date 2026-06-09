import ContactButton from "@/components/global/buttons/contact-button";
import { VisitButton } from "@/components/global/buttons/visit-button";
import React from "react";
import { ShareButton } from "./share-button";

function ActionButtons({ property }: any) {

  return (
    <div>
      <div className="hidden justify-end gap-4 my-6 md:flex">
        <ContactButton propertyCode={property?.propertyCode} />
        <VisitButton id={property?._id} />
        <ShareButton propertyCode={property?.propertyCode} />
      </div>

      <div className="fixed bottom-0 right-0 grid grid-cols-2 gap-items bg-background w-full z-20 px-2 py-4 shadow-md border-t md:hidden">
        <VisitButton className="w-full justify-center" id={property?._id} />
        <ContactButton propertyCode={property?.propertyCode} />
      </div>
    </div>
  );
}

export default ActionButtons;
