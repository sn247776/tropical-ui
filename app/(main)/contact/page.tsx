import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import UniversalHero from "@/components/layout/universal-hero";
import ContactForm from "./contact-form";

export default function ContactPage() {
  return (
    <div className="bg-background overflow-hidden">
      <UniversalHero page="Contact Us" />

      {/* Intro */}
      <section className="container mx-auto px-4 py-14 md:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl text-primary">
            Your local property partner in Koh Phangan.
          </h1>

          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            Whether you are looking to buy, sell, rent, manage, renovate or
            develop a property, we are here to help you understand your
            options and coordinate the next steps.
          </p>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-stretch">
          {/* Contact Information */}
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-primary via-primary to-primary/70 p-7 text-white md:p-10">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10 flex h-full flex-col items-center text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                Get in touch
              </p>

              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Let&apos;s discuss your property.
              </h2>

              <p className="mt-5 max-w-md leading-7 text-white/75">
                Tell us what you are looking for and we&apos;ll help you find
                the right next step. No pressure, just practical local
                property support.
              </p>

              {/* Contact Details */}
              <div className="mt-10 w-full max-w-md space-y-6">
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  value="hello@tropicalrootsrealty.com"
                  href="mailto:hello@tropicalrootsrealty.com"
                />

                <ContactInfo
                  icon={Phone}
                  title="Phone"
                  value="+66 77 000 0000"
                  href="tel:+66770000000"
                />

                <ContactInfo
                  icon={MapPin}
                  title="Location"
                  value="Koh Phangan, Surat Thani, Thailand"
                />

                <ContactInfo
                  icon={Clock3}
                  title="Working Hours"
                  value="Monday – Saturday · 09:00 – 18:00"
                />
              </div>

              {/* We Work With */}
              <div className="mt-10 w-full max-w-md border-t border-white/15 pt-7">
                <p className="text-sm text-white/60">
                  We work with
                </p>

                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {[
                    "Buyers",
                    "Sellers",
                    "Tenants",
                    "Owners",
                    "Investors",
                    "Developers",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border bg-card p-6 shadow-sm md:p-10">
            <div className="mb-8 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                Send an enquiry
              </p>

              <h2 className="mt-2 text-2xl font-semibold md:text-3xl text-primary">
                How can we help?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                Complete the form below and our team will get back to you as
                soon as possible.
              </p>
            </div>

            <div className="mx-auto w-full max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Strip */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Looking to Buy?"
              description="Tell us your requirements and we can help you explore suitable properties."
              href="/"
            />

            <ServiceCard
              title="Want to Sell?"
              description="Let us help present and promote your property to the right audience."
              href="/services/selling-property"
            />

            <ServiceCard
              title="Need Local Support?"
              description="From maintenance to renovation and property management, we can help."
              href="/services/property-management"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="overflow-hidden rounded-3xl bg-linear-to-b from-primary via-primary/90 to-primary/60 px-6 py-12 text-center text-white md:px-10 md:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
            Tropical Roots Realty
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold md:text-4xl">
            Property is more than a transaction.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            We believe in building relationships that continue long after a
            property is bought or sold.
          </p>

          <a
            href="#contact-form"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Contact Info                                                               */
/* -------------------------------------------------------------------------- */

function ContactInfo({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <Icon className="h-5 w-5" />
      </div>

      <div className="mt-3">
        <p className="text-xs font-medium uppercase tracking-wider text-white/50">
          {title}
        </p>

        <p className="mt-1 text-sm font-medium text-white/90">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      className="block rounded-xl py-2 transition-opacity hover:opacity-80"
    >
      {content}
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Service Card                                                               */
/* -------------------------------------------------------------------------- */

function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center rounded-2xl border bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
    >
      <h3 className="text-lg font-semibold text-primary">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      <span className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-medium text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}