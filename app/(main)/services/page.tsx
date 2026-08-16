import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CircleDollarSign,
  Hammer,
  Home,
  KeyRound,
  Map,
  Search,
  Settings,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

import UniversalHero from "@/components/layout/universal-hero";
import SectionTitle from "@/components/layout/section-title";
import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    icon: Building2,
    title: "Property Ownership",
    slug: "property-ownership",
    description:
      "Understand the practical considerations around property ownership in Thailand and coordinate the right professionals before you commit.",
    points: [
      "Ownership structures",
      "Freehold & leasehold",
      "Property due diligence",
      "Legal coordination",
    ],
  },
  {
    number: "02",
    icon: Search,
    title: "Buying Property",
    slug: "buying-property",
    description:
      "From finding the right property to viewing, negotiation, due diligence and completion, we help make the buying process easier to manage.",
    points: [
      "Property search",
      "Viewings",
      "Negotiation",
      "Transaction coordination",
    ],
  },
  {
    number: "03",
    icon: CircleDollarSign,
    title: "Selling Your Property",
    slug: "selling-property",
    description:
      "More than a listing. We professionally present, promote and coordinate the sale of your property to help connect it with suitable buyers.",
    points: [
      "Property presentation",
      "Market positioning",
      "Targeted promotion",
      "Buyer coordination",
    ],
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Renting Your Property",
    slug: "renting-property",
    description:
      "We help property owners present their properties, reach suitable tenants and coordinate the rental process from enquiry to move-in.",
    points: [
      "Rental positioning",
      "Property marketing",
      "Tenant matching",
      "Move-in coordination",
    ],
  },
  {
    number: "05",
    icon: Settings,
    title: "Property Management & Maintenance",
    slug: "property-management",
    description:
      "Reliable local support for owners who live on Koh Phangan, visit occasionally or manage their property from overseas.",
    points: [
      "Property inspections",
      "Repairs & maintenance",
      "Garden & pool care",
      "Local property support",
    ],
  },
  {
    number: "06",
    icon: Hammer,
    title: "Renovation & Construction",
    slug: "renovation-construction",
    description:
      "From small improvements to larger projects, we help coordinate contractors, materials and local professionals throughout the work.",
    points: [
      "Renovation",
      "Contractor sourcing",
      "Material coordination",
      "Project support",
    ],
  },
  {
    number: "07",
    icon: TrendingUp,
    title: "Investment & Property Advisory",
    slug: "investment-property",
    description:
      "Practical local property guidance for buyers and investors looking to understand opportunities, risks and long-term considerations.",
    points: [
      "Investment opportunities",
      "Location comparison",
      "Rental considerations",
      "Development potential",
    ],
  },
  {
    number: "08",
    icon: Map,
    title: "Koh Phangan Area Guide",
    slug: "koh-phangan-area-guide",
    description:
      "Understand the different areas of Koh Phangan and find a location that fits your lifestyle, property goals and budget.",
    points: [
      "Area comparison",
      "Lifestyle",
      "Accessibility",
      "Property opportunities",
    ],
  },
  {
    number: "09",
    icon: Home,
    title: "Owning & Managing Property",
    slug: "owning-managing-property",
    description:
      "Long-term local support for property owners, from regular inspections and maintenance to rental preparation, renovation and construction.",
    points: [
      "Overseas owner support",
      "Property inspections",
      "Rental preparation",
      "Long-term property care",
    ],
  },
];

export default function OurServicesPage() {
  return (
    <div className="overflow-hidden bg-background">
      {/* Hero */}
      <UniversalHero page="Our Services" />

      {/* Intro */}
      <section className="container mx-auto px-4 py-14 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Tropical Roots Realty
          </span>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-5xl">
            Property services built around your needs.
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            From buying and selling to renting, property management,
            renovation and investment, we provide practical local support
            throughout your property journey in Koh Phangan.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Our goal is simple: make property easier to understand, easier to
            manage and easier to navigate with reliable local support at every
            stage.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/30 py-14 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            align="center"
            title="What We Do"
            heading="Complete property services in Koh Phangan."
            desc="From your first property search to long-term ownership, we can help coordinate the people, information and services you need."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.slug}
                  className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border bg-background p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
                >
                  {/* Background Number */}
                  <div className="pointer-events-none absolute right-5 top-3 text-6xl font-bold text-primary/5">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  {/* Number */}
                  <span className="relative mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Service {service.number}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-xl font-semibold leading-tight text-primary">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Points */}
                  <div className="mt-6 w-full space-y-2.5 border-t border-border/70 pt-5">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center justify-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />

                        <span className="text-muted-foreground">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="group/button mt-6 w-full rounded-xl"
                  >
                    <Link href={`/services/${service.slug}`}>
                      Explore Service
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover/button:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="container mx-auto px-4 py-14 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Approach
          </span>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Local knowledge. Professional service. Personal care.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            We believe good property service is about more than completing a
            transaction. It is about clear communication, dependable support
            and relationships that continue long after a property is bought,
            sold or rented.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Professional service",
              "Efficient work",
              "Fair pricing",
              "Long-term relationships",
            ].map((item) => (
              <div
                key={item}
                className="flex flex-col items-center justify-center rounded-xl border bg-muted/30 px-5 py-5 text-center font-medium transition-all hover:border-primary/20 hover:bg-primary/5"
              >
                <CheckCircle2 className="mb-2 h-5 w-5 text-primary" />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-b from-primary via-primary/90 to-primary/60 px-6 py-12 text-center text-white md:px-10 md:py-16">
          {/* Decorative shapes */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
              Tropical Roots Realty
            </p>

            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Need help with a property in Koh Phangan?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/75">
              Whether you are buying, selling, renting, maintaining or
              improving a property, our team is here to help you understand
              your options and take the next step with confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="h-12 rounded-xl bg-white px-7 text-primary hover:bg-white/90"
              >
                <Link href="/contact">
                  Talk to Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-12 rounded-xl border-white/20 bg-white/10 px-7 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="/">
                  Explore Properties
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}