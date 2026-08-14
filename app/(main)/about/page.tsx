import AboutImg from "@/assets/about.jpg";
import SectionTitle from "@/components/layout/section-title";
import {
  BarChart2,
  CheckCircle,
  Handshake,
  Home,
  HardHat,
  Users,
  ArrowRight,
  KeyRound,
  Building2,
} from "lucide-react";
import AboutCard from "@/components/global/cards/about-card";
import { basicInfo } from "@/stores/basic-info";
import UniversalHero from "@/components/layout/universal-hero";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <UniversalHero page="About Us" />

      {/* About Introduction */}
      <section className="container mx-auto">
        <div className="grid xl:grid-cols-2 md:py-sections sm:py-middel py-middel md:gap-sections gap-middel items-center">
          {/* Image */}
          <div className="relative md:h-[560px] h-[380px] rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={AboutImg.src}
              alt="Tropical Roots Realty in Koh Phangan"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <p className="text-sm uppercase tracking-[0.2em] font-medium text-white/80">
                Tropical Roots Realty
              </p>

              <p className="text-xl md:text-2xl font-semibold mt-2">
                Your local property partner in Koh Phangan
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5">
            <div>


              <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-medium text-primary leading-tight">
                Making property in Koh Phangan easier to navigate.
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-7">
              <p>
                Koh Phangan&apos;s property market is growing quickly, but
                finding reliable information, professional service and
                dependable local support can still be difficult. For buyers,
                tenants, investors and property owners alike, navigating the
                island can mean dealing with fragmented services and limited
                visibility.
              </p>

              <p>
                <strong className="text-primary">
                  Tropical Roots Realty was created to offer a better way.
                </strong>
              </p>

              <p>
                We provide a complete range of property services across Koh
                Phangan, from sales, rentals and long-term leases to property
                management, maintenance, renovations and construction.
              </p>

              <p>
                For buyers and investors, we provide access to carefully
                selected opportunities and honest local insight. For tenants,
                we make finding and securing the right property straightforward.
                For owners, we provide professional representation and ongoing
                support to help protect and improve their property.
              </p>

              <p>
                Our approach is simple:{" "}
                <strong className="text-primary">
                  local knowledge, professional standards and clear
                  communication.
                </strong>
              </p>

              <p>
                We are here to make property in Koh Phangan easier to navigate
                — whether you are looking for a home, an investment, a tenant,
                a buyer, or simply a reliable team to take care of things.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {[
                "Local Knowledge",
                "Professional Standards",
                "Clear Communication",
                "Reliable Support",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-border/70 rounded-xl p-4 bg-muted/30"
                >
                  <CheckCircle className="w-5 h-5 text-primary mb-2" />

                  <p className="text-sm font-medium leading-5">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:gap-3 hover:opacity-90"
              >
                Talk to Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto sm:mt-0 mt-middel">
        <SectionTitle
          align="center"
          title={`What We Do`}
          heading="Complete property services in Koh Phangan."
          desc="From finding the right property to managing, maintaining or developing it, we provide practical local support throughout the property journey."
        />

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-middel pt-middel">
          <AboutCard
            icon={Home}
            title="Property Sales"
            desc="Professional property representation and focused promotion to connect owners with serious buyers and investors."
            href="/contact"
          />

          <AboutCard
            icon={KeyRound}
            title="Property Rentals"
            desc="We help tenants find suitable homes and properties while providing owners with professional rental support."
            href="/contact"
          />

          <AboutCard
            icon={Building2}
            title="Long-Term Leases"
            desc="Practical support for long-term property leases, helping tenants and owners find arrangements that work for both sides."
            href="/contact"
          />

          <AboutCard
            icon={Users}
            title="Property Management"
            desc="Ongoing local support for property owners who need a reliable team to help manage and look after their property."
            href="/contact"
          />

          <AboutCard
            icon={HardHat}
            title="Maintenance & Renovation"
            desc="Reliable local assistance for maintenance, improvements and renovation projects to help protect and enhance your property."
            href="/contact"
          />

          <AboutCard
            icon={BarChart2}
            title="Investment Opportunities"
            desc="Carefully selected property opportunities supported by honest local insight and practical guidance for buyers and investors."
            href="/contact"
          />
        </div>
      </section>

      {/* How We Help */}
      <section className="container mx-auto md:py-sections py-middel">
        <div className="grid lg:grid-cols-3 gap-middel">
          {/* Buyers */}
          <div className="rounded-2xl border border-border/70 p-6 md:p-8 bg-muted/20">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Home className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl font-semibold text-primary">
              For Buyers & Investors
            </h3>

            <p className="mt-3 text-muted-foreground leading-7">
              Discover carefully selected property opportunities across Koh
              Phangan with clear information, professional presentation and
              honest local insight.
            </p>
          </div>

          {/* Tenants */}
          <div className="rounded-2xl border border-border/70 p-6 md:p-8 bg-muted/20">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <KeyRound className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl font-semibold text-primary">
              For Tenants
            </h3>

            <p className="mt-3 text-muted-foreground leading-7">
              Make finding and securing the right property easier with local
              guidance and straightforward communication throughout the rental
              process.
            </p>
          </div>

          {/* Owners */}
          <div className="rounded-2xl border border-border/70 p-6 md:p-8 bg-muted/20">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Handshake className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl font-semibold text-primary">
              For Property Owners
            </h3>

            <p className="mt-3 text-muted-foreground leading-7">
              Get professional representation and dependable ongoing support
              to help protect, maintain, improve and develop your property.
            </p>
          </div>
        </div>
      </section>

      {/* Local Partner Section */}
      <section className="container mx-auto">
        <div className="rounded-2xl border border-border/70 bg-muted/30 overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-6 md:p-10 lg:p-14">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
                Why Tropical Roots Realty
              </span>

              <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-primary leading-tight">
                Local knowledge. Professional service. One trusted partner.
              </h2>

              <p className="mt-5 text-muted-foreground leading-7">
                Property can involve many moving parts. Finding a property,
                negotiating a deal, managing tenants, maintaining a home or
                completing a renovation all require reliable local support.
              </p>

              <p className="mt-4 text-muted-foreground leading-7">
                Our goal is to bring these services together under one trusted
                team, making the experience simpler and more transparent for
                our clients.
              </p>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:gap-3 hover:opacity-90"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px] lg:min-h-[420px]">
              <img
                src={AboutImg.src}
                alt="Property services in Koh Phangan"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="container mx-auto md:py-sections py-middel">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 md:px-16 md:py-16 text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-white/70 uppercase tracking-[0.25em] text-sm font-medium">
              Tropical Roots Realty
            </span>

            <h2 className="text-white mt-4 text-3xl md:text-5xl font-semibold">
              Your local property partner in Koh Phangan.
            </h2>

            <p className="text-white/80 mt-5 text-base md:text-lg leading-7">
              Whether you are looking for a home, an investment, a tenant, a
              buyer, or a reliable team to take care of your property, we are
              here to make the process easier.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-7">
              {[
                "Local Knowledge",
                "Professional Standards",
                "Clear Communication",
                "Reliable Support",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium transition-all hover:gap-3 hover:bg-white/90"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Decorative shapes */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/5" />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-white/5" />
        </div>
      </section>
    </div>
  );
}