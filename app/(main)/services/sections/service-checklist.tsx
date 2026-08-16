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
    <div className={cn("mt-7", className)}>
      {title && (
        <h3 className="mb-5 text-center text-base font-semibold text-primary">
          {title}
        </h3>
      )}

      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex min-h-[64px] items-center justify-center gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3 text-center transition-colors hover:border-primary/20 hover:bg-primary/5"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
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