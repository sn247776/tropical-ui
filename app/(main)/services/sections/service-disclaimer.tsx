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
        "flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-muted/30 px-5 py-6 text-center sm:px-8",
        className
      )}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Info className="h-4 w-4" />
      </div>

      <p className="max-w-3xl text-xs leading-6 text-muted-foreground sm:text-sm sm:leading-7">
        {children}
      </p>
    </div>
  );
}