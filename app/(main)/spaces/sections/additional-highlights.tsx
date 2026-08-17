import React from "react";
import { Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { renderIcon } from "./icons";

export default function AdditionalHighlights({
  property,
}: {
  property: any;
}) {
  if (!property.additionalHighlights?.length) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-semibold text-primary">
          <Sparkles className="w-5 h-5" />
          Additional Highlights
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid md:grid-cols-2 gap-3">
          {property.additionalHighlights.map(
            (item: string, index: number) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-lg border p-3"
              >
                <div className="text-primary">
                  {renderIcon(item)}
                </div>

                <span className="capitalize">
                  {item.replaceAll("_", " ")}
                </span>
              </div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}