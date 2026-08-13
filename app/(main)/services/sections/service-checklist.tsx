import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceChecklistProps {
  items: string[];
  title?: string;
  className?: string;
}

export default function ServiceChecklist({
  items,
  title,
  className,
}: ServiceChecklistProps) {
  return (
    <div className={cn("mt-5", className)}>
      {title && (
        <h3 className="mb-4 text-base font-semibold text-foreground">
          {title}
        </h3>
      )}

      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex items-start gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="h-3.5 w-3.5" />
            </span>

            <span className="text-sm leading-6 text-muted-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}