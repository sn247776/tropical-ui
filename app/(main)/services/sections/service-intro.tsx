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
    <section
      className={cn(
        "mx-auto max-w-4xl text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}

      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h1>

      {description && (
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </section>
  );
}