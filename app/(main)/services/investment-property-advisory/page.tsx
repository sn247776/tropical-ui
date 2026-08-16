import UniversalHero from "@/components/layout/universal-hero";

import ServiceIntro from "../sections/service-intro";
import ServiceSection from "../sections/service-section";
import ServiceChecklist from "../sections/service-checklist";
import ServiceCta from "../sections/service-cta";
import ServiceDisclaimer from "../sections/service-disclaimer";

export default function InvestmentPropertyAdvisoryPage() {
  return (
    <div>
      <UniversalHero page="Investment & Property Advisory" />

      <main className="container mx-auto px-4">
        <div className="py-middel md:py-sections">
          <ServiceIntro
            eyebrow="07 — Investment & Property Advisory"
            title="Find the right property for your goals."
            description="Investing in property is not simply about finding a good-looking villa at the right price. The right opportunity depends on location, property type, demand, access, condition, development potential and your long-term plans."
          />

          <div className="mt-sections">
            <ServiceSection title="Our Approach">
              <p>
                At Tropical Roots Realty, we help buyers and investors
                understand the local property market and identify
                opportunities that match their objectives.
              </p>
            </ServiceSection>

            <ServiceSection title="What Are You Investing For?">
              <p>
                Before looking at properties, it is important to understand
                the purpose of the investment.
              </p>

              <ServiceChecklist
                title="You may be looking for:"
                items={[
                  "Rental income",
                  "Long-term capital growth",
                  "A holiday home",
                  "A future retirement property",
                  "Land for development",
                  "A business opportunity",
                  "A combination of lifestyle and investment",
                ]}
              />

              <p>
                <strong className="text-foreground">Our role:</strong>{" "}
                Understand your objective and help identify properties that
                may be relevant.
              </p>
            </ServiceSection>

            <ServiceSection title="Choosing the Right Location">
              <p>
                Koh Phangan is not one single property market.
              </p>

              <ServiceChecklist
                title="We can help you compare areas based on:"
                items={[
                  "Accessibility",
                  "Beaches",
                  "Infrastructure",
                  "Rental demand",
                  "Local amenities",
                  "Development",
                  "Property supply",
                  "Lifestyle",
                  "Future potential",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Choosing the Right Property Type">
              <p>Different properties serve different purposes.</p>

              <ServiceChecklist
                items={[
                  "Land — potential for future development, subject to planning and other restrictions.",
                  "Villas & Houses — suitable for personal use, long-term rental or other permitted uses.",
                  "Condos — a potentially simpler ownership option for qualifying foreign buyers.",
                  "Commercial Property — potentially suitable for businesses or income-producing uses.",
                  "Development Opportunities — land or existing properties that may offer redevelopment potential.",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Investment Property Analysis">
              <p>
                When reviewing a potential investment, we encourage buyers to
                look beyond the asking price.
              </p>

              <ServiceChecklist
                title="Important considerations can include:"
                items={[
                  "Purchase price",
                  "Location",
                  "Rental demand",
                  "Operating costs",
                  "Renovation requirements",
                  "Development potential",
                  "Exit potential",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Rental Yield">
              <p>
                Rental yield can be useful when comparing investment
                properties, but it should not be viewed in isolation.
              </p>

              <p>Gross rental income does not equal profit.</p>

              <ServiceChecklist
                title="You may also have:"
                items={[
                  "Property management",
                  "Maintenance",
                  "Utilities",
                  "Cleaning",
                  "Repairs",
                  "Taxes",
                  "Insurance",
                  "Vacancy periods",
                  "Renovation costs",
                ]}
              />

              <p>
                We help you understand the practical income and expense
                considerations and identify the information you should verify
                before making an investment decision.
              </p>
            </ServiceSection>

            <ServiceSection title="Buying Land for Development">
              <p>
                Land can look attractive because of its size or price, but
                development potential depends on much more.
              </p>

              <ServiceChecklist
                title="Before buying land for a project, you may need to investigate:"
                items={[
                  "Land title",
                  "Legal access",
                  "Topography",
                  "Slope",
                  "Building restrictions",
                  "Environmental considerations",
                  "Utilities",
                  "Water",
                  "Electricity",
                  "Drainage",
                  "Construction access",
                  "Development permissions",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Investment Property vs Lifestyle Property">
              <p>
                The best property for living may not be the best property for
                investment.
              </p>

              <p className="font-medium text-foreground">
                Lifestyle: View → Privacy → Design → Location → Personal
                enjoyment
              </p>

              <p className="font-medium text-foreground">
                Investment: Demand → Operating costs → Rental potential →
                Liquidity → Future value
              </p>

              <p>
                Some properties can provide both. We help you understand the
                difference.
              </p>
            </ServiceSection>

            <ServiceSection title="Finding Off-Market Opportunities">
              <p>
                Not every property available for sale is publicly advertised.
              </p>

              <p>
                Our local relationships and property-owner network can
                sometimes provide access to opportunities before they reach
                the wider market.
              </p>
            </ServiceSection>

            <ServiceSection title="Due Diligence Comes First">
              <p>
                A property can appear attractive financially and still have
                significant issues.
              </p>

              <ServiceChecklist
                title="Before investing, appropriate checks should be made on:"
                items={[
                  "Ownership",
                  "Title",
                  "Access",
                  "Building legality",
                  "Development potential",
                  "Contracts",
                  "Financial obligations",
                  "Physical condition",
                  "Rental assumptions",
                ]}
              />

              <p>
                We help coordinate the relevant professionals rather than
                replacing their specialist advice.
              </p>
            </ServiceSection>

            <ServiceSection title="After You Invest">
              <p>Our relationship can continue after the purchase.</p>

              <p className="font-semibold text-primary">
                Property management → Maintenance → Renovation → Construction
                → Rental → Future sale
              </p>
            </ServiceSection>

            <ServiceSection title="Our Approach to Investment">
              <p>
                We don’t promise guaranteed returns or tell you that every
                property is a “great investment.”
              </p>

              <ServiceChecklist
                title="Instead, we focus on:"
                items={[
                  "Good information",
                  "Realistic assumptions",
                  "Local knowledge",
                  "Professional due diligence",
                  "Long-term thinking",
                ]}
              />

              <p>
                Our role is to help you find opportunities and understand the
                practical considerations so you can make your own informed
                decision.
              </p>
            </ServiceSection>
          </div>

          <ServiceCta
            title="Looking for an investment opportunity in Koh Phangan?"
            description="Tell us about your investment goals and we can help you explore suitable property opportunities."
            buttonText="Discuss Investment Options"
          />

          <ServiceDisclaimer className="mt-8">
            This section provides general property information and is not
            investment, legal, tax or financial advice. Rental income, property
            values and investment returns are not guaranteed. Independent
            professional advice should be obtained before making an investment.
          </ServiceDisclaimer>
        </div>
      </main>
    </div>
  );
}