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
        "relative overflow-hidden rounded-3xl bg-linear-to-b from-primary via-primary/90 to-primary/60 px-6 py-12 text-center text-white md:px-10 md:py-16",
        className
      )}
    >
      {/* Decorative shapes */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
          Tropical Roots Realty
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
          {description}
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-white px-7 text-primary hover:bg-white/90"
          >
            <Link href={href}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}