"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { renderIcon } from "./icons";

function FeatureGrid({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items?.length) return null;

  return (
    <div className="rounded-xl border bg-muted/20 p-4 transition-colors hover:border-primary/20">
      <h4 className="mb-4 font-semibold text-primary">
        {title}
      </h4>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              {renderIcon(item)}
            </div>

            <span className="capitalize leading-tight text-muted-foreground">
              {item.replaceAll("_", " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DetailsSection({ property }: any) {
  const categories = [
    {
      title: "Essentials",
      items: property?.essentials ?? [],
    },
    {
      title: "Outdoor",
      items: property?.outdoor ?? [],
    },
    {
      title: "Lifestyle",
      items: property?.lifestyle ?? [],
    },
    {
      title: "Wellness",
      items: property?.wellness ?? [],
    },
    {
      title: "Amenities",
      items: property?.amenities ?? [],
    },
    {
      title: "Internet Speed",
      items: property?.internet_speed ?? [],
    },
  ];

  const sections: { title: string; items: string[] }[] = [];
  const moreFeatures: string[] = [];

  // Keep large categories separate
  // Merge small categories into "More Features"
  categories.forEach((category) => {
    if (!category.items.length) return;

    if (category.items.length < 3) {
      moreFeatures.push(...category.items);
    } else {
      sections.push(category);
    }
  });

  // Add merged card if needed
  if (moreFeatures.length) {
    sections.push({
      title: "More Features",
      items: moreFeatures,
    });
  }

  // Rental Conditions is always separate
  if (property?.rental_conditions?.length) {
    sections.push({
      title: "Rental Conditions",
      items: property.rental_conditions,
    });
  }

  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-primary">
          <ShieldCheck className="h-5 w-5" />
          Features & Amenities
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <FeatureGrid
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}