import AboutImg from "@/assets/about.jpg";
import RonnyImg from "@/assets/ronny.jpeg";
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
import UniversalHero from "@/components/layout/universal-hero";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <UniversalHero page="About Us" />

      {/* About Introduction */}
      <section className="container mx-auto px-4">
        <div className="grid xl:grid-cols-2 md:py-sections sm:py-middel py-middel md:gap-sections gap-middel items-center">
          {/* Image */}
          <div className="relative md:h-[560px] h-[380px] rounded-2xl overflow-hidden shadow-lg group">
            <img
              src={AboutImg.src}
              alt="Tropical Roots Realty in Koh Phangan"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white text-center">
              <p className="text-sm uppercase tracking-[0.2em] font-medium text-white/80">
                Tropical Roots Realty
              </p>

              <p className="text-md md:text-2xl font-semibold mt-2">
                Your local property partner in Koh Phangan
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center gap-5">
            <div>
              <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-medium text-primary leading-tight">
                Making property in Koh Phangan easier to navigate.
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-7 max-w-2xl">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 w-full max-w-3xl">
              {[
                "Local Knowledge",
                "Professional Standards",
                "Clear Communication",
                "Reliable Support",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-border/70 rounded-xl p-4 bg-muted/30 flex flex-col items-center text-center"
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
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:gap-3 hover:opacity-90"
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
          title="What We Do"
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
        <SectionTitle
          align="center"
          title="How We Help"
          heading="Support tailored to your property journey."
          desc="Whether you are buying, renting, investing or managing a property, we provide local support at every step."
        />

        <div className="grid lg:grid-cols-3 gap-middel pt-middel">
          {/* Buyers */}
          <div className="rounded-2xl border border-border/70 p-6 md:p-8 bg-muted/20 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Home className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl font-semibold text-primary">
              For Buyers &amp; Investors
            </h3>

            <p className="mt-3 text-muted-foreground leading-7 max-w-md">
              Discover carefully selected property opportunities across Koh
              Phangan with clear information, professional presentation and
              honest local insight.
            </p>
          </div>

          {/* Tenants */}
          <div className="rounded-2xl border border-border/70 p-6 md:p-8 bg-muted/20 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <KeyRound className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl font-semibold text-primary">
              For Tenants
            </h3>

            <p className="mt-3 text-muted-foreground leading-7 max-w-md">
              Make finding and securing the right property easier with local
              guidance and straightforward communication throughout the rental
              process.
            </p>
          </div>

          {/* Owners */}
          <div className="rounded-2xl border border-border/70 p-6 md:p-8 bg-muted/20 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Handshake className="w-6 h-6 text-primary" />
            </div>

            <h3 className="text-xl font-semibold text-primary">
              For Property Owners
            </h3>

            <p className="mt-3 text-muted-foreground leading-7 max-w-md">
              Get professional representation and dependable ongoing support
              to help protect, maintain, improve and develop your property.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="container mx-auto md:py-sections py-middel">
        <SectionTitle
          align="center"
          title="Meet Our Team"
          heading="Local knowledge with a personal approach."
          desc="Get to know the people behind Tropical Roots Realty and the local experience that guides the way we work."
        />

        <div className="mt-middel max-w-5xl mx-auto rounded-2xl border border-border/70 bg-muted/20 overflow-hidden">
          <div className="grid lg:grid-cols-2 items-stretch">
            {/* Ronny Image */}
            <div className="relative min-h-[420px] lg:min-h-[560px]">
              <img
                src={RonnyImg.src}
                alt="Ronny - Founder of Tropical Roots Realty"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white text-center">
                <p className="text-sm uppercase tracking-[0.2em] font-medium text-white/80">
                  Tropical Roots Realty
                </p>

                <h3 className="text-2xl md:text-3xl font-semibold mt-2">
                  Ronny
                </h3>

                <p className="text-white/80 mt-1">
                  Founder &amp; Real Estate Professional
                </p>
              </div>
            </div>

            {/* Ronny Content */}
            <div className="flex flex-col items-center justify-center p-6 md:p-10 lg:p-14 text-center">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
                About Ronny
              </span>

              <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-primary leading-tight">
                Your local connection to Koh Phangan property.
              </h2>

              <div className="mt-6 space-y-5 text-muted-foreground leading-7 max-w-xl">
                <p>
                  My name is{" "}
                  <strong className="text-primary">Ronny</strong>, a Thai
                  local, self-made entrepreneur, and dedicated real estate
                  professional with a deep connection to Koh Phangan, where I
                  have proudly lived for the past six years.
                </p>

                <p>
                  Living on Koh Phangan for six years has given me genuine
                  local knowledge and a strong understanding of the island —
                  from its different areas and communities to the opportunities
                  available in the local property market.
                </p>

                <p>
                  Whether you are looking to buy, sell, rent, or invest in
                  property on Koh Phangan, my goal is to make the process
                  straightforward, transparent, and comfortable from beginning
                  to end.
                </p>
              </div>

              {/* Personal Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-7 w-full max-w-xl">
                {[
                  "Local Knowledge",
                  "Hard Work",
                  "Personal Service",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-border/70 rounded-xl p-4 bg-background flex flex-col items-center text-center"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mb-2" />

                    <p className="text-sm font-medium text-primary leading-5">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Closing Message */}
              <div className="mt-7 pt-6 border-t border-border/70 w-full max-w-xl">
                <p className="text-primary font-semibold text-lg">
                  Your goals come first.
                </p>

                <p className="text-muted-foreground mt-1 text-sm leading-6">
                  Whether you&apos;re finding your next home, selling a
                  property, or exploring an investment opportunity, I&apos;m
                  here to help you navigate the process with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Partner Section */}
      <section className="container mx-auto">
        <div className="rounded-2xl border border-border/70 bg-muted/30 overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Content */}
            <div className="p-6 md:p-10 lg:p-14 flex flex-col items-center text-center">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm">
                Why Tropical Roots Realty
              </span>

              <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-primary leading-tight">
                Local knowledge. Professional service. One trusted partner.
              </h2>

              <p className="mt-5 text-muted-foreground leading-7 max-w-xl">
                Property can involve many moving parts. Finding a property,
                negotiating a deal, managing tenants, maintaining a home or
                completing a renovation all require reliable local support.
              </p>

              <p className="mt-4 text-muted-foreground leading-7 max-w-xl">
                Our goal is to bring these services together under one trusted
                team, making the experience simpler and more transparent for
                our clients.
              </p>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:gap-3 hover:opacity-90"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative min-h-[320px] lg:min-h-[420px]">
              <img
                src={AboutImg.src}
                alt="Property services in Koh Phangan"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="container mx-auto md:py-sections py-middel">
        <div className="relative overflow-hidden sm:rounded-2xl bg-linear-to-b from-primary via-primary/90 to-primary/60 px-6 py-12 md:px-16 md:py-16 text-center">
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
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium transition-all hover:gap-3 hover:bg-white/90"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}