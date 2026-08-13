import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCtaProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  className?: string;
}

export default function ServiceCta({
  title = "Need help with your property?",
  description = "Tell us what you are looking for and our local team can help you understand the next steps.",
  buttonText = "Contact Us",
  href = "/contact",
  className,
}: ServiceCtaProps) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-2xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12 lg:px-14",
        className
      )}
    >
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-7 text-primary-foreground/80 sm:text-base">
            {description}
          </p>
        </div>

        <Button
          asChild
          variant="secondary"
          size="lg"
          className="w-full shrink-0 sm:w-fit"
        >
          <Link href={href}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}