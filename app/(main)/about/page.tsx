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

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to from-black/60 via-black/10 to-transparent" />

            {/* Image caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <p className="text-sm uppercase tracking-[0.2em] font-medium text-white/80">
                Tropical Roots Realty
              </p>

              <p className="text-2xl md:text-3xl font-semibold mt-2">
                Property services rooted in Koh Phangan
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
                Who We Are
              </span>

              <h1 className="mt-3">
                About Tropical Roots Realty
              </h1>

              <h2 className="mt-3 text-xl md:text-2xl font-medium text-primary">
                Professional property services, rooted in Koh Phangan.
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-7">
              <p>
                Tropical Roots Realty was created with a simple approach:
                provide efficient, professional and fairly priced property
                services while building relationships that last.
              </p>

              <p>
                We work with property owners, buyers, tenants and investors
                across Koh Phangan, helping with property sales, rentals and
                investment opportunities.
              </p>

              <p>
                Our website brings properties together in one place, with
                clear listings, useful information and professional
                presentation. We actively promote our listings to reach the
                right buyers, tenants and investors, both locally and
                internationally.
              </p>

              <p>
                But our relationship doesn&apos;t end with a transaction.
              </p>

              <p>
                We also provide property maintenance and construction support,
                helping owners look after, improve and develop their properties
                with reliable local assistance.
              </p>

              <p>
                We believe good business is built on trust, quality service and
                long-term relationships. Our goal is to become a property
                partner you can rely on, whether you are buying, selling,
                renting, maintaining or developing a property in Koh Phangan.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {[
                "Efficient Service",
                "Professional Work",
                "Fair Pricing",
                "Long-Term Relationships",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-border/70 rounded-xl p-4 bg-muted/30"
                >
                  <CheckCircle className="w-5 h-5 text-primary mb-2" />

                  <p className="text-sm font-medium leading-5">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:gap-3 hover:opacity-90"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto sm:mt-0 mt-middel">
        <SectionTitle
          align="center"
          title={`Why Choose ${basicInfo?.name}`}
          heading="More than property. A trusted local partner."
          desc="From finding the right property to looking after it long after the transaction, we provide practical local support at every stage."
        />

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-middel pt-middel">
          <AboutCard
            icon={Home}
            title="Property Sales & Rentals"
            desc="Clear property listings, professional presentation and focused promotion to connect properties with the right buyers and tenants."
            href="/contact"
          />

          <AboutCard
            icon={Users}
            title="Local Knowledge"
            desc="We understand Koh Phangan and work closely with property owners, buyers, tenants and investors to provide practical local guidance."
            href="/contact"
          />

          <AboutCard
            icon={Handshake}
            title="Long-Term Relationships"
            desc="Our service doesn't stop when a transaction is complete. We aim to build lasting relationships with every client we work with."
            href="/contact"
          />

          <AboutCard
            icon={HardHat}
            title="Maintenance & Construction"
            desc="Reliable local support for property maintenance, improvements and construction projects, helping owners protect and develop their investments."
            href="/contact"
          />

          <AboutCard
            icon={BarChart2}
            title="Investment Opportunities"
            desc="We help buyers and investors discover property opportunities in Koh Phangan with clear information and professional support."
            href="/contact"
          />

          <AboutCard
            icon={CheckCircle}
            title="Professional & Fair"
            desc="Efficient service, professional work and fair pricing are at the heart of how we operate."
            href="/contact"
          />
        </div>
      </section>

      {/* Closing Statement */}
      <section className="container mx-auto md:py-sections py-middel">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 md:px-16 md:py-16 text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-white/70 uppercase tracking-[0.25em] text-sm font-medium">
              Our Promise
            </span>

            <h2 className="text-white mt-4 text-3xl md:text-5xl font-semibold">
              Property services built on trust.
            </h2>

            <p className="text-white/80 mt-5 text-base md:text-lg leading-7">
              Whether you are buying, selling, renting, maintaining or
              developing a property in Koh Phangan, Tropical Roots Realty is
              here to help you move forward with confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-7">
              {[
                "Efficient Service",
                "Professional Work",
                "Fair Pricing",
                "Long-Term Relationships",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm"
                >
                  {item}
                </span>
              ))}
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