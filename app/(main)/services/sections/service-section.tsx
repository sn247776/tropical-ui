import React from "react";
import { cn } from "@/lib/utils";

interface ServiceSectionProps {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ServiceSection({
  eyebrow,
  title,
  children,
  className,
}: ServiceSectionProps) {
  return (
    <section
      className={cn(
        "border-t border-border py-10 first:border-t-0",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-2 block text-sm font-medium uppercase tracking-[0.15em] text-primary">
          {eyebrow}
        </span>
      )}

      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>

      <div className="mt-5 max-w-4xl space-y-4 text-base leading-8 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}