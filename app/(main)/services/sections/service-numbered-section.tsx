import React from "react";
import { cn } from "@/lib/utils";

interface ServiceNumberedSectionProps {
  number: number | string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ServiceNumberedSection({
  number,
  title,
  children,
  className,
}: ServiceNumberedSectionProps) {
  return (
    <section
      className={cn(
        "relative border-t border-border py-10",
        className
      )}
    >
      <div className="flex gap-5 sm:gap-7">
        <div className="shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            {String(number).padStart(2, "0")}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h2>

          <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}