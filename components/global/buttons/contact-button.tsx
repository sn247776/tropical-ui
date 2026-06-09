'use client'
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import React from "react";

function ContactButton({className,propertyCode}:{className?:any,propertyCode:any}) {
  const handleClick = () => {
    const currentUrl = `https://www.leasebuysell.in/share/${propertyCode}`;
    const message = `I am interested in this space: ${currentUrl}`;
    const whatsappUrl = `https://wa.me/917042104442?text=${encodeURIComponent(message)}`;

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
