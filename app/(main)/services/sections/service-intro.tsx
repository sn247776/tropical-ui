import React from "react";
import { cn } from "@/lib/utils";

interface ServiceIntroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function ServiceIntro({
  eyebrow,
  title,
  description,
  className,
}: ServiceIntroProps) {
  return (
    <section className={cn("max-w-4xl", className)}>
      {eyebrow && (
        <span className="mb-3 block text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}

      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-primary">
        {title}
      </h1>

      {description && (
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </section>
  );
}