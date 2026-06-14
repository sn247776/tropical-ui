"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListFilterPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyFilter from "./property-filter";



function MobFilters() {

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant={"outline"}><ListFilterPlus /> Filters</Button>
        </SheetTrigger>
        <SheetContent className="w-[300px] p-0">
         <PropertyFilter/>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobFilters;