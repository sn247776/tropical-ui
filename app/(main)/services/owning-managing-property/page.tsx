import UniversalHero from "@/components/layout/universal-hero";

import ServiceIntro from "../sections/service-intro";
import ServiceSection from "../sections/service-section";
import ServiceChecklist from "../sections/service-checklist";
import ServiceCta from "../sections/service-cta";
import ServiceDisclaimer from "../sections/service-disclaimer";

export default function OwningManagingPropertyPage() {
  return (
    <div>
      <UniversalHero page="Owning & Managing Property" />

      <main className="container mx-auto">
        <div className="py-middel md:py-sections">
          <ServiceIntro
            eyebrow="09 — Owning & Managing Property"
            title="Property ownership doesn’t end when you get the keys."
            description="Buying a property is only the beginning. A well-maintained property needs regular attention, whether you live in Koh Phangan, visit occasionally or manage it from overseas."
          />

          <div className="mt-sections">
            <ServiceSection title="Your Local Property Partner">
              <p>
                Tropical Roots Realty provides practical local support to help
                owners look after, maintain, rent and improve their properties.
              </p>
            </ServiceSection>

            <ServiceSection title="Managing a Property From Overseas">
              <p>
                Owning property from another country can be difficult when
                there is no one locally to deal with everyday issues.
              </p>

              <ServiceChecklist
                title="We can provide a local point of contact for:"
                items={[
                  "Property inspections",
                  "Maintenance",
                  "Repairs",
                  "Cleaning",
                  "Garden and pool care",
                  "Tenant communication",
                  "Contractor coordination",
                  "Renovation",
                  "Construction",
                ]}
              />

              <p>
                Our goal is to give owners peace of mind and a reliable local
                connection.
              </p>
            </ServiceSection>

            <ServiceSection title="Regular Property Inspections">
              <p>
                Regular inspections can help identify problems before they
                become expensive.
              </p>

              <ServiceChecklist
                title="We can check for:"
                items={[
                  "Water leaks",
                  "Damp and mould",
                  "Electrical problems",
                  "Air-conditioning issues",
                  "Storm damage",
                  "Roof problems",
                  "Garden issues",
                  "Pool condition",
                  "Security",
                  "General wear and tear",
                ]}
              />

              <p>
                We can report issues to the owner and coordinate the
                appropriate solution.
              </p>
            </ServiceSection>

            <ServiceSection title="Preparing Your Property for Rental">
              <p>
                If you are planning to rent your property, presentation and
                condition matter.
              </p>

              <ServiceChecklist
                title="We can help coordinate:"
                items={[
                  "Cleaning",
                  "Repairs",
                  "Painting",
                  "Furniture",
                  "Landscaping",
                  "Pool maintenance",
                  "Photography",
                  "Property listing",
                  "Tenant enquiries",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Preparing Your Property for Sale">
              <p>
                Before putting a property on the market, we can help identify
                improvements that may make the property easier to present and
                market.
              </p>

              <ServiceChecklist
                title="This may include:"
                items={[
                  "Repairs",
                  "Cleaning",
                  "Painting",
                  "Garden work",
                  "Furniture",
                  "Minor renovation",
                  "Photography",
                  "Documentation",
                ]}
              />

              <p>
                We focus on practical improvements rather than recommending
                unnecessary spending.
              </p>
            </ServiceSection>

            <ServiceSection title="Property Maintenance">
              <p>We can coordinate ongoing services including:</p>

              <ServiceChecklist
                title="Home Maintenance"
                items={[
                  "General repairs",
                  "Plumbing",
                  "Electrical",
                  "Carpentry",
                  "Painting",
                ]}
              />

              <ServiceChecklist
                title="Garden"
                items={[
                  "Regular gardening",
                  "Landscaping",
                  "Outdoor maintenance",
                ]}
              />

              <ServiceChecklist
                title="Pool"
                items={[
                  "Cleaning",
                  "Servicing",
                  "Maintenance coordination",
                ]}
              />

              <ServiceChecklist
                title="Cleaning"
                items={[
                  "Regular cleaning",
                  "Occasional cleaning",
                  "Rental property cleaning",
                ]}
              />

              <ServiceChecklist
                title="Air Conditioning"
                items={[
                  "Cleaning",
                  "Servicing",
                  "Repair coordination",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Tenant Support">
              <p>
                For owners renting their properties, having someone local can
                make everyday management easier.
              </p>

              <ServiceChecklist
                title="We can help coordinate:"
                items={[
                  "Tenant communication",
                  "Maintenance requests",
                  "Repairs",
                  "Property access",
                  "Inspections",
                  "Move-in and move-out",
                  "Local service providers",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Storm & Weather Preparation">
              <p>
                Koh Phangan’s tropical climate means properties need to be
                prepared for heavy rain, wind and other seasonal conditions.
              </p>

              <ServiceChecklist
                title="Depending on the property, preventative maintenance may include:"
                items={[
                  "Roof checks",
                  "Drainage",
                  "Gutters",
                  "Trees",
                  "Outdoor structures",
                  "Water systems",
                  "Electrical systems",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Renovation & Improvement">
              <p>
                If your property needs more than maintenance, we can assist
                with renovation and improvement projects.
              </p>

              <p className="font-semibold text-primary">
                Planning → Contractors → Materials → Work → Updates →
                Completion
              </p>
            </ServiceSection>

            <ServiceSection title="Construction Support">
              <p>
                For owners planning a new build or major project, we can help
                coordinate local professionals and suppliers.
              </p>

              <ServiceChecklist
                title="Depending on the project, this may include:"
                items={[
                  "Contractor sourcing",
                  "Material sourcing",
                  "Site coordination",
                  "Supplier communication",
                  "Project updates",
                  "Local assistance",
                ]}
              />

              <p>
                Technical, structural and legal matters are handled by the
                appropriate qualified professionals.
              </p>
            </ServiceSection>

            <ServiceSection title="One Local Contact">
              <p>
                One of the biggest advantages of working with a local property
                partner is having someone who already understands your
                property.
              </p>

              <p>
                Instead of finding a new person every time you need something,
                you have one relationship that can grow with your property.
              </p>

              <p className="font-semibold text-primary">
                Buy → Rent → Maintain → Renovate → Build → Sell
              </p>
            </ServiceSection>

            <ServiceSection title="Why We Do This">
              <p>
                We believe the best property relationships are long-term.
              </p>

              <p>
                If you trust us with your property, our responsibility is not
                simply to complete one job.
              </p>

              <p>
                We want to build a relationship where you know:
              </p>

              <ServiceChecklist
                items={[
                  "Who to call",
                  "Who will respond",
                  "Who can coordinate the work",
                  "Who understands your property",
                ]}
              />

              <p>
                That is the kind of service we want Tropical Roots Realty to
                be known for.
              </p>
            </ServiceSection>
          </div>

          <ServiceCta
            title="Need a local partner for your property?"
            description="Whether you own a property from overseas or need ongoing support on Koh Phangan, we can help."
            buttonText="Contact Tropical Roots"
          />

          <ServiceDisclaimer className="mt-8">
            Property management, maintenance and construction services depend
            on the agreed scope of work. Technical, structural and legal
            matters should be handled by appropriately qualified professionals.
          </ServiceDisclaimer>
        </div>
      </main>
    </div>
  );
}