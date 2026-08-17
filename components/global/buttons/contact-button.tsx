"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import React from "react";

function ContactButton({
  className,
  propertyCode,
}: {
  className?: string;
  propertyCode: string;
}) {
  const handleClick = () => {
    const currentUrl = `${window.location.origin}/share/${propertyCode}`;

    const message = `I am interested in this space: ${currentUrl}`;

    const whatsappUrl = `https://wa.me/66801833017?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button onClick={handleClick} className={className}>
      <Phone className="h-4 w-4" />
      Contact
    </Button>
  );
}

export default ContactButton;