import UniversalHero from "@/components/layout/universal-hero";

import ServiceIntro from "../sections/service-intro";
import ServiceSection from "../sections/service-section";
import ServiceChecklist from "../sections/service-checklist";
import ServiceCta from "../sections/service-cta";
import ServiceDisclaimer from "../sections/service-disclaimer";

export default function SellingPropertyPage() {
  return (
    <div>
      <UniversalHero page="Selling Your Property" />

      <main className="container mx-auto px-4">
        <div className="py-middel md:py-sections">
          <ServiceIntro
            eyebrow="03 — Selling Your Property"
            title="More than a listing. A complete property marketing service."
            description="Selling a property in Koh Phangan is about more than putting a sign outside or uploading a few photographs. The right presentation, pricing, marketing and buyer targeting can make a significant difference."
          />

          <div className="mt-sections">
            <ServiceSection title="How Do We Sell Your Property?">
              <p>
                At Tropical Roots Realty, our aim is to make selling
                professional, efficient and straightforward, while building a
                relationship that continues beyond the transaction.
              </p>
            </ServiceSection>

            <ServiceSection title="1. Understand Your Property">
              <p>
                We start by understanding the property, your expectations and
                your reason for selling.
              </p>

              <p>
                We look at the location, property type, condition, features,
                access and potential buyers.
              </p>

              <p>
                <strong className="text-foreground">Our role:</strong> We
                gather the information needed to position your property
                properly in the market.
              </p>
            </ServiceSection>

            <ServiceSection title="2. Pricing & Market Positioning">
              <p>
                The asking price needs to make sense for the current market.
              </p>

              <p>
                Pricing too high can reduce enquiries, while pricing too low
                can leave value on the table.
              </p>

              <p>
                We provide practical market guidance and help position the
                property competitively.
              </p>

              <p>
                Where appropriate, we recommend independent valuation or
                professional advice.
              </p>
            </ServiceSection>

            <ServiceSection title="3. Professional Property Listing">
              <p>Your property should be presented properly.</p>

              <ServiceChecklist
                title="Your listing can include:"
                items={[
                  "Property description",
                  "Location",
                  "Key features",
                  "Land and building information",
                  "Photographs",
                  "Floor plans where available",
                  "Price",
                  "Ownership information where appropriate",
                  "Rental or investment information where relevant",
                ]}
              />

              <p>
                The goal is to give potential buyers enough useful information
                to make a serious enquiry.
              </p>
            </ServiceSection>

            <ServiceSection title="4. Website Exposure">
              <p>
                Your property will be presented on the Tropical Roots Realty
                website alongside other properties in Koh Phangan.
              </p>

              <p>
                Our aim is to make the website a useful property platform
                where buyers can easily search, compare and understand
                available opportunities.
              </p>
            </ServiceSection>

            <ServiceSection title="5. Targeted Marketing">
              <p>
                We don’t want to simply put your property online and wait.
              </p>

              <ServiceChecklist
                title="Depending on the property, promotion can include:"
                items={[
                  "Website promotion",
                  "Social media",
                  "Direct enquiries",
                  "Buyer and investor networks",
                  "Local contacts",
                  "International audiences",
                  "Property-related communities",
                  "Targeted digital marketing",
                ]}
              />

              <p className="font-medium text-foreground">
                The objective is simple: Get the property in front of the
                right people.
              </p>
            </ServiceSection>

            <ServiceSection title="6. Finding the Right Buyer">
              <p>
                Not every enquiry is the right buyer.
              </p>

              <p>
                We look at the buyer’s requirements, budget and intended use
                to determine whether the property is a suitable match.
              </p>

              <p>
                We communicate with potential buyers, answer initial
                questions, arrange viewings and keep you informed.
              </p>
            </ServiceSection>

            <ServiceSection title="7. Viewings">
              <p>
                We coordinate property viewings and communicate with
                interested buyers.
              </p>

              <p>
                For owners who live outside Koh Phangan, having someone local
                who can represent the property can be particularly valuable.
              </p>
            </ServiceSection>

            <ServiceSection title="8. Negotiation">
              <p>
                When a serious buyer comes forward, we help communicate
                between both parties.
              </p>

              <p>
                We aim to keep negotiations professional and focused on
                reaching a practical agreement.
              </p>
            </ServiceSection>

            <ServiceSection title="9. Transaction Coordination">
              <p>
                Once an agreement is reached, there can still be a lot to
                organise.
              </p>

              <ServiceChecklist
                title="Depending on the transaction, this may involve:"
                items={[
                  "Buyer and seller communication",
                  "Lawyers",
                  "Documents",
                  "Payment arrangements",
                  "Due diligence",
                  "Land Office coordination",
                  "Completion dates",
                  "Handover",
                ]}
              />

              <p>
                We help coordinate the parties and keep the transaction
                moving.
              </p>
            </ServiceSection>

            <ServiceSection title="10. After the Sale">
              <p>
                Our relationship doesn’t have to end when the property is
                sold.
              </p>

              <ServiceChecklist
                title="If you continue to own other property on Koh Phangan, we can assist with:"
                items={[
                  "Property maintenance",
                  "Repairs",
                  "Cleaning",
                  "Garden and pool care",
                  "Renovation",
                  "Construction",
                  "Property management",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Why List With Tropical Roots?">
              <ServiceChecklist
                items={[
                  "Professional presentation",
                  "Active promotion",
                  "Local knowledge",
                  "Efficient service",
                  "Long-term relationship",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Our Promise">
              <p>
                We cannot promise that every property will sell quickly or at
                a particular price.
              </p>

              <p>
                What we can promise is that we will work professionally to
                present your property properly, market it to the right
                audience and manage the process efficiently.
              </p>

              <p className="font-semibold text-primary">
                Your property deserves more than a listing. It deserves a
                strategy.
              </p>
            </ServiceSection>
          </div>

          <ServiceCta
            title="Thinking about selling your property?"
            description="Let's discuss your property, your expectations and how we can present it to the right buyers."
            buttonText="List Your Property"
          />

          <ServiceDisclaimer className="mt-8">
            Property values, marketing results and transaction timelines vary
            depending on the property and market conditions. Any pricing or
            investment information should be considered carefully and
            independently verified where appropriate.
          </ServiceDisclaimer>
        </div>
      </main>
    </div>
  );
}