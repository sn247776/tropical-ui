import UniversalHero from "@/components/layout/universal-hero";
import ServiceIntro from "../sections/service-intro";
import ServiceSection from "../sections/service-section";
import ServiceChecklist from "../sections/service-checklist";
import ServiceCta from "../sections/service-cta";
import ServiceDisclaimer from "../sections/service-disclaimer";



export default function PropertyOwnershipPage() {
  return (
    <div>
      <UniversalHero page="Property Ownership" />

      <main className="container mx-auto">
        <div className="py-middel md:py-sections">
          <ServiceIntro
            eyebrow="01 — Property Ownership"
            title="Understand how property ownership works in Thailand."
            description="Buying property in Thailand can be very different from buying property in your home country, particularly for foreign buyers."
          />

          <div className="mt-sections">
            <ServiceSection title="Understanding Property Ownership">
              <p>
                At Tropical Roots Realty, we help you understand the different
                ownership options, identify the important questions and
                coordinate with the appropriate legal professionals before you
                commit.
              </p>

              <p>
                Our aim is simple: make the process easier to understand and
                help you make informed decisions.
              </p>
            </ServiceSection>

            <ServiceSection title="Can Foreigners Own Property in Thailand?">
              <p>
                Foreigners can own certain types of property in Thailand, but
                there are important restrictions around land ownership.
              </p>

              <p>
                For example, qualifying condominium units can generally be
                owned directly by foreigners, subject to the applicable foreign
                ownership quota. Land ownership is much more restricted.
              </p>

              <p className="font-medium text-foreground">
                How we help:
              </p>

              <p>
                We identify the type of property you are considering, explain
                the general ownership options and help you understand which
                professional checks are required before proceeding.
              </p>
            </ServiceSection>

            <ServiceSection title="Can a Foreigner Own a Villa?">
              <p>
                A foreigner may be able to own the building while holding a
                registered lease or other legal right over the land, depending
                on the structure.
              </p>

              <p>
                The important point is to understand that owning the villa and
                owning the land are not necessarily the same thing.
              </p>
            </ServiceSection>

            <ServiceSection title="Before You Commit to a Property">
              <p>
                Ownership is only one part of the picture.
              </p>

              <ServiceChecklist
                items={[
                  "Verify the registered owner and the right to sell.",
                  "Understand exactly what you are buying.",
                  "Understand access, leases, superficies, usufructs and other registered rights.",
                  "Check building permissions, zoning, access and other restrictions.",
                  "Understand whether you can sell or transfer the property later.",
                  "Consider inheritance, resale, rental and long-term ownership.",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="How Tropical Roots Supports You">
              <p>
                We don’t believe our job ends with showing you a property.
              </p>

              <p>
                Our role is to help you understand the opportunity, identify
                the important questions and coordinate the right people to
                answer them.
              </p>

              <ServiceChecklist
                title="Depending on the property, we can assist with:"
                items={[
                  "Property sourcing",
                  "Initial property information",
                  "Owner and property coordination",
                  "Document collection",
                  "Due diligence coordination",
                  "Lawyer introductions",
                  "Surveyor coordination",
                  "Construction and building checks",
                  "Negotiation support",
                  "Transaction coordination",
                  "Post-purchase maintenance and property support",
                ]}
              />
            </ServiceSection>
          </div>

          <ServiceCta
            title="Considering a property in Koh Phangan?"
            description="Tell us what you are looking for and we can help you understand the property and coordinate the next steps."
            buttonText="Contact Tropical Roots"
          />

          <ServiceDisclaimer className="mt-8">
            This information is provided for general educational purposes and
            is not legal, tax or financial advice. Thai property laws and
            regulations can change. Independent professional advice should
            always be obtained before completing a transaction.
          </ServiceDisclaimer>
        </div>
      </main>
    </div>
  );
}