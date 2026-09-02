
import {
  CheckCircle2,
  Handshake,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import UniversalHero from "@/components/layout/universal-hero";
import ListPropertyForm from "./list-property-form";

export default function ListYourPropertyPage() {
  return (
    <div className="overflow-hidden bg-background">
      <UniversalHero page="List Your Property" />

      {/* ------------------------------------------------------------------ */}
      {/* Intro                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section className="container mx-auto px-4 py-14 text-center md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Sell · Rent · Lease
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-primary md:text-5xl">
            Want to sell or rent your property?
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            Tell us a few basic details about your
            property. That&apos;s all we need to get
            started. Our local team will contact you
            to discuss the rest.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Main Content                                                        */}
      {/* ------------------------------------------------------------------ */}

      <section className="container mx-auto px-4 pb-16 md:pb-24">
        {/* 
          Keep the original width ratio.
          items-stretch makes both columns the same height.
        */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ---------------------------------------------------------------- */}
          {/* Left Information                                                  */}
          {/* ---------------------------------------------------------------- */}

          <div className="h-full rounded-3xl bg-linear-to-b from-primary via-primary to-primary/70 p-7 text-white md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
              Simple & easy
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Give us the basics.
              <br />
              We&apos;ll handle the rest.
            </h2>

            <p className="mt-5 leading-7 text-white/75">
              You don&apos;t need to prepare a full
              property listing. Just tell us a little
              about your property and how we can
              reach you.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-6">
              <Benefit
                icon={CheckCircle2}
                title="Quick & simple"
                description="Only a few details are needed to get started."
              />

              <Benefit
                icon={Handshake}
                title="Local expertise"
                description="Our team knows the Koh Phangan property market."
              />

              <Benefit
                icon={MessageCircle}
                title="We'll contact you"
                description="We'll discuss the property and collect the details we need."
              />

              <Benefit
                icon={ShieldCheck}
                title="No commitment"
                description="Submitting your information doesn't commit you to listing."
              />
            </div>

            {/* Bottom Text */}
            <div className="mt-10 border-t border-white/15 pt-7">
              <p className="text-sm leading-6 text-white/60">
                Have a villa, house, condo, land or
                commercial property? We&apos;d love to
                hear about it.
              </p>
            </div>
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Form                                                              */}
          {/* ---------------------------------------------------------------- */}

          <div
            id="property-lead-form"
            className="h-full rounded-3xl border bg-card p-6 shadow-sm md:p-10"
          >
            <div className="mb-8 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Property enquiry
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-primary md:text-3xl">
                Tell us about your property
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                Just the basics for now. Our team
                will contact you for any additional
                information.
              </p>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <ListPropertyForm />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* How It Works                                                        */}
      {/* ------------------------------------------------------------------ */}

      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
              How it works
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-primary md:text-3xl">
              From enquiry to listing
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
            <StepCard
              number="01"
              title="Tell us about it"
              description="Share a few basic details about your property."
            />

            <StepCard
              number="02"
              title="We contact you"
              description="Our team will get in touch and learn more about the property."
            />

            <StepCard
              number="03"
              title="We take it from there"
              description="Once we're ready, we'll help prepare and promote your listing."
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Final CTA                                                           */}
      {/* ------------------------------------------------------------------ */}

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="rounded-3xl bg-linear-to-b from-primary via-primary/90 to-primary/60 px-6 py-12 text-center text-white md:px-10 md:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            Tropical Roots Realty
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold md:text-4xl">
            Your property could be someone&apos;s
            next home or investment.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            Tell us a little about it and let&apos;s
            start a conversation.
          </p>

          <a
            href="#property-lead-form"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            Tell Us About Your Property
          </a>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Benefit                                                                    */
/* -------------------------------------------------------------------------- */

function Benefit({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h3 className="font-medium">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-white/60">
          {description}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Step Card                                                                  */
/* -------------------------------------------------------------------------- */

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border bg-background p-7 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
        {number}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-primary">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

