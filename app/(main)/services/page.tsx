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
    <div className="overflow-hidden">
      <UniversalHero page="Our Services" />

      {/* Intro */}
      <section className="container mx-auto px-4 py-14 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Tropical Roots Realty
          </span>

          <h1 className="mb-5">
            More than a property agency.
            <span className="block text-primary">
              Your local property partner.
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
            At Tropical Roots Realty, we believe property services should be
            professional, efficient and fairly priced.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            Whether you are selling, renting, buying, investing, maintaining
            or improving a property, we provide practical support and local
            coordination across Koh Phangan.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted/30 py-14 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            align="center"
            title="What We Do"
            heading="Property services for every stage"
            desc="From your first property search to long-term ownership, we can help coordinate the people, information and services you need."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute right-5 top-5 text-5xl font-bold text-primary/5">
                    {service.number}
                  </div>

                  <div className="relative mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <span className="text-sm font-semibold text-muted-foreground">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-primary">
                    {service.title}
                  </h3>

                  <p className="mb-6 flex-1 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mb-6 space-y-2">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-sm"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="group/button w-full"
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

      {/* Property lifecycle */}
      <section className="container mx-auto px-4 py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              One Local Partner
            </span>

            <h2 className="mb-6">
              Supporting your property through its entire lifecycle.
            </h2>

            <p className="mb-5 leading-8 text-muted-foreground">
              Property ownership does not end when the transaction is
              completed. Your needs can change over time, and having a reliable
              local partner can make those changes much easier to manage.
            </p>

            <p className="leading-8 text-muted-foreground">
              From finding a property to renting, maintaining, renovating,
              managing or eventually selling it, Tropical Roots Realty aims to
              remain useful throughout the journey.
            </p>

            <Button asChild className="mt-7">
              <Link href="/contact">
                Talk to Our Team
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-3xl bg-linear-to-b from-primary via-primary to-primary/70 p-6 text-white shadow-xl md:p-10">
            <div className="grid gap-3">
              {[
                "Buy",
                "Sell",
                "Rent",
                "Manage",
                "Maintain",
                "Renovate",
                "Build",
              ].map((item, index, array) => (
                <div key={item}>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                    <span className="font-medium">{item}</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {index !== array.length - 1 && (
                    <div className="ml-8 h-3 w-px bg-white/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Approach */}
      <section className="container mx-auto px-4 py-14 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Approach
          </span>

          <h2 className="mb-6">
            Good business is built on good relationships.
          </h2>

          <p className="text-base leading-8 text-muted-foreground md:text-lg">
            We believe in looking beyond the transaction and creating
            relationships that continue long after a property is sold or
            rented.
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
                className="rounded-xl border bg-muted/30 px-5 py-5 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary px-4 py-14 text-white md:py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-white">
            Need help with a property in Koh Phangan?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Whether you are buying, selling, renting, maintaining or improving
            a property, our team is here to help you understand the next step.
          </p>


        </div>
      </section>
    </div>
  );
}