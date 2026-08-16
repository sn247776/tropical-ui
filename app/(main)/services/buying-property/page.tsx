import UniversalHero from "@/components/layout/universal-hero";

import ServiceIntro from "../sections/service-intro";
import ServiceSection from "../sections/service-section";
import ServiceChecklist from "../sections/service-checklist";
import ServiceCta from "../sections/service-cta";
import ServiceDisclaimer from "../sections/service-disclaimer";

export default function BuyingPropertyPage() {
  return (
    <div>
      <UniversalHero page="Buying Property" />

      <main className="container mx-auto px-4">
        <div className="py-middel md:py-sections">
          <ServiceIntro
            eyebrow="02 — Buying Property"
            title="From finding the right property to completing the purchase."
            description="Buying property should be exciting — not confusing. Whether you are looking for a home, investment, land or a property to develop, Tropical Roots Realty helps you navigate the process with local knowledge, professional coordination and clear communication."
          />

          <div className="mt-sections">
            <ServiceSection title="Buying Property in Koh Phangan">
              <p>
                We help you understand the opportunity, compare your options
                and coordinate the different professionals involved in the
                transaction.
              </p>
            </ServiceSection>

            <ServiceSection title="1. Start With Your Requirements">
              <p>
                Before searching, it helps to understand exactly what you are
                looking for.
              </p>

              <p>
                Your budget, preferred area, property type, intended use,
                investment goals and timeframe can all affect which properties
                make sense.
              </p>

              <p>
                <strong className="text-foreground">How we help:</strong>{" "}
                We discuss your requirements and use our local network and
                property listings to identify suitable opportunities.
              </p>
            </ServiceSection>

            <ServiceSection title="2. Finding the Right Property">
              <p>
                Koh Phangan has very different areas, property types and price
                points.
              </p>

              <p>
                A beachfront property, hillside villa, residential home and
                development plot can have completely different considerations.
              </p>

              <p>
                <strong className="text-foreground">How we help:</strong>{" "}
                We search across our network and listings, arrange suitable
                options and help you compare properties based on your
                priorities.
              </p>
            </ServiceSection>

            <ServiceSection title="3. Viewing & Property Assessment">
              <p>
                A viewing is about more than simply deciding whether you like
                the property.
              </p>

              <ServiceChecklist
                title="Important considerations can include:"
                items={[
                  "Access",
                  "Property condition",
                  "Surrounding properties",
                  "Views",
                  "Utilities",
                  "Roads",
                  "Drainage",
                  "Construction quality",
                  "Future potential",
                ]}
              />

              <p>
                <strong className="text-foreground">How we help:</strong>{" "}
                We arrange viewings, coordinate with owners and help identify
                practical points that should be investigated further.
              </p>
            </ServiceSection>

            <ServiceSection title="4. Understanding the Property">
              <p>
                Before making an offer, you should understand what you are
                actually buying.
              </p>

              <ServiceChecklist
                title="This can include:"
                items={[
                  "Land",
                  "Building",
                  "Ownership structure",
                  "Title",
                  "Access",
                  "Existing agreements",
                  "Known restrictions",
                ]}
              />

              <p>
                We gather available property information and help coordinate
                the relevant checks with lawyers, surveyors, architects or
                other specialists where required.
              </p>
            </ServiceSection>

            <ServiceSection title="5. Making an Offer">
              <p>
                Once you have identified the right property, the next step is
                agreeing on the commercial terms.
              </p>

              <p>
                Price is important, but so are payment schedules, completion
                dates, included furniture, existing leases and other
                conditions.
              </p>

              <p>
                We communicate with the owner, present your offer and assist
                with negotiations to reach commercially workable terms.
              </p>
            </ServiceSection>

            <ServiceSection title="6. Reservation & Deposit">
              <p>
                Some transactions begin with a reservation agreement or
                deposit.
              </p>

              <p>
                The conditions attached to these payments are important and
                should be clearly understood before money is transferred.
              </p>

              <p>
                We coordinate communication between the parties and recommend
                independent legal review of agreements before you commit.
              </p>
            </ServiceSection>

            <ServiceSection title="7. Due Diligence">
              <p>
                This is one of the most important stages of a property
                purchase.
              </p>

              <ServiceChecklist
                title="Depending on the property, due diligence may include:"
                items={[
                  "Ownership verification",
                  "Land title checks",
                  "Boundaries",
                  "Encumbrances",
                  "Legal access",
                  "Building permissions",
                  "Existing contracts",
                  "Company ownership",
                  "Planning and development considerations",
                  "Utilities",
                  "Other property-specific issues",
                ]}
              />

              <p>
                We coordinate the process and connect you with appropriate
                independent lawyers, surveyors, architects and other
                professionals.
              </p>
            </ServiceSection>

            <ServiceSection title="8. Contract & Purchase Agreement">
              <p>
                Once the main terms are agreed and due diligence is
                satisfactory, the relevant agreements can be prepared.
              </p>

              <p>
                We coordinate between buyer, seller and legal representatives
                and help keep the transaction moving efficiently.
              </p>
            </ServiceSection>

            <ServiceSection title="9. Payment & Completion">
              <p>
                Property transactions can involve deposits, staged payments
                and final completion payments depending on the structure.
              </p>

              <p>
                The final stage may also involve registration or transfer at
                the relevant authority.
              </p>

              <p>
                We coordinate the parties, documentation and timelines so
                everyone understands what needs to happen next.
              </p>
            </ServiceSection>

            <ServiceSection title="10. After the Purchase">
              <p>
                Our relationship does not need to end when the transaction is
                completed.
              </p>

              <ServiceChecklist
                title="Once you own the property, you may need help with:"
                items={[
                  "Property maintenance",
                  "Cleaning",
                  "Repairs",
                  "Gardening",
                  "Pool maintenance",
                  "Renovation",
                  "Construction",
                  "Property management",
                  "Finding tenants",
                  "Preparing the property for rental",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Buying From Overseas">
              <p>
                You don’t have to be physically present on Koh Phangan for
                every stage of the process.
              </p>

              <p>
                For overseas buyers, clear communication and reliable local
                coordination become even more important.
              </p>

              <p>
                Property sourcing → Viewings → Information → Negotiation →
                Professional checks → Transaction coordination → Property
                support
              </p>
            </ServiceSection>

            <ServiceSection title="Buying for Investment">
              <p>
                If your objective is investment rather than personal use, we
                look at the property differently.
              </p>

              <ServiceChecklist
                title="Important considerations can include:"
                items={[
                  "Purchase price",
                  "Location",
                  "Rental demand",
                  "Property type",
                  "Accessibility",
                  "Development potential",
                  "Maintenance requirements",
                  "Expected operating costs",
                  "Exit potential",
                ]}
              />

              <p>
                We help you understand these practical considerations, while
                specialist professionals can advise on legal, tax and
                financial matters.
              </p>
            </ServiceSection>

            <ServiceSection title="Our Role">
              <p>
                Tropical Roots Realty is here to make the buying process more
                efficient and easier to manage.
              </p>

              <p>
                We don’t replace your lawyer, architect, surveyor or
                accountant.
              </p>

              <p>
                Instead, we help bring the right people together, keep
                communication clear and make sure important steps don’t get
                overlooked.
              </p>

              <p className="font-medium text-foreground">
                From the first viewing to long after completion.
              </p>

              <p className="font-semibold text-primary">
                Find the property. Understand the opportunity. Coordinate the
                process. Own with confidence.
              </p>
            </ServiceSection>
          </div>

          <ServiceCta
            title="Ready to find your property in Koh Phangan?"
            description="Tell us what you are looking for and we'll help you identify suitable opportunities and coordinate the next steps."
            buttonText="Start Your Property Search"
          />

          <ServiceDisclaimer className="mt-8">
            This information is for general educational purposes and is not
            legal, tax or financial advice. Each property and transaction is
            different. Independent professional advice should be obtained
            before completing a purchase.
          </ServiceDisclaimer>
        </div>
      </main>
    </div>
  );
}