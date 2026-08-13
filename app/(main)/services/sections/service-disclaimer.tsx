import React from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceDisclaimerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function ServiceDisclaimer({
  children = "This information is provided for general educational purposes only and is not legal, tax, financial, architectural or engineering advice. Property-specific professional advice should be obtained before making a transaction.",
  className,
}: ServiceDisclaimerProps) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl border border-border bg-muted/40 p-5",
        className
      )}
    >
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

      <p className="text-sm leading-7 text-muted-foreground">
        {children}
      </p>
    </div>
  );
}