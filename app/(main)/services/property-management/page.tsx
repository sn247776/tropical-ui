import UniversalHero from "@/components/layout/universal-hero";

import ServiceIntro from "../sections/service-intro";
import ServiceSection from "../sections/service-section";
import ServiceChecklist from "../sections/service-checklist";
import ServiceCta from "../sections/service-cta";
import ServiceDisclaimer from "../sections/service-disclaimer";

export default function PropertyManagementPage() {
  return (
    <div>
      <UniversalHero page="Property Management & Maintenance" />

      <main className="container mx-auto">
        <div className="py-middel md:py-sections">
          <ServiceIntro
            eyebrow="05 — Property Management & Maintenance"
            title="Your property. Our local support."
            description="Owning a property in Koh Phangan is easier when you have someone reliable on the island. Whether you live locally, visit occasionally or manage your property from overseas, Tropical Roots can provide practical support."
          />

          <div className="mt-sections">
            <ServiceSection title="What Does Property Management Include?">
              <p>
                Property management is about more than collecting rent. It is
                about making sure someone is available to check the property,
                identify problems and coordinate solutions.
              </p>

              <ServiceChecklist
                title="Depending on your needs, our services can include:"
                items={[
                  "Regular property inspections",
                  "Cleaning",
                  "Garden maintenance",
                  "Pool maintenance",
                  "Repairs",
                  "Utility coordination",
                  "Contractor coordination",
                  "Tenant communication",
                  "Emergency assistance",
                  "Renovation coordination",
                  "Construction support",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Regular Property Checks">
              <p>
                Small problems can become expensive problems when nobody is
                around.
              </p>

              <ServiceChecklist
                title="Regular checks can help identify:"
                items={[
                  "Water leaks",
                  "Electrical issues",
                  "Air-conditioning problems",
                  "Damp or mould",
                  "Storm damage",
                  "Garden issues",
                  "Pool problems",
                  "Security concerns",
                  "General wear and tear",
                ]}
              />

              <p>
                We can report issues to you and help coordinate the appropriate
                response.
              </p>
            </ServiceSection>

            <ServiceSection title="Maintenance & Repairs">
              <p>Every property needs ongoing maintenance.</p>

              <ServiceChecklist
                title="We can help coordinate local professionals for:"
                items={[
                  "Plumbing",
                  "Electrical",
                  "Air conditioning",
                  "Painting",
                  "Carpentry",
                  "Roofing",
                  "General repairs",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Garden & Outdoor Maintenance">
              <p>Tropical properties require regular outdoor care.</p>

              <ServiceChecklist
                items={[
                  "Gardening",
                  "Tree and plant maintenance",
                  "Grass cutting",
                  "Landscaping",
                  "Outdoor cleaning",
                  "Drainage maintenance",
                  "Pool surroundings",
                  "General outdoor upkeep",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Pool Maintenance">
              <p>
                If your property has a swimming pool, regular maintenance is
                essential.
              </p>

              <ServiceChecklist
                items={[
                  "Cleaning",
                  "Water treatment",
                  "Equipment checks",
                  "Minor repairs",
                  "Regular servicing",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Property Cleaning">
              <p>
                For homes, rental properties and holiday properties,
                professional cleaning can help maintain the condition and
                presentation of the property.
              </p>

              <p>
                Services can be arranged around your needs, including regular
                or occasional cleaning.
              </p>
            </ServiceSection>

            <ServiceSection title="Managing Your Property From Overseas">
              <p>
                If you live outside Koh Phangan, everyday property issues can
                become difficult to manage.
              </p>

              <p className="font-semibold text-primary">
                Check → Report → Coordinate → Resolve
              </p>

              <p>
                Instead of finding different people every time something goes
                wrong, you can have one local point of contact.
              </p>
            </ServiceSection>

            <ServiceSection title="Emergency Support">
              <p>
                Island properties can occasionally face unexpected problems,
                particularly during heavy rain, storms or periods when the
                property is unoccupied.
              </p>

              <p>
                Where possible, we can help coordinate a local response and
                keep the owner informed.
              </p>
            </ServiceSection>

            <ServiceSection title="Maintenance Before Renting or Selling">
              <p>
                A well-maintained property is easier to present and can make a
                better impression on potential buyers and tenants.
              </p>

              <ServiceChecklist
                title="Before marketing your property, we can help identify:"
                items={[
                  "Visible repairs",
                  "Cleaning requirements",
                  "Garden work",
                  "Painting",
                  "Furniture issues",
                  "General improvements",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Renovation & Improvement">
              <p>Sometimes maintenance is not enough.</p>

              <ServiceChecklist
                title="We can help coordinate:"
                items={[
                  "Painting",
                  "Bathroom upgrades",
                  "Kitchen improvements",
                  "Flooring",
                  "Landscaping",
                  "Furniture",
                  "Outdoor areas",
                  "Pool improvements",
                  "General renovation",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Construction Support">
              <p>
                For larger projects, Tropical Roots can also assist with local
                coordination.
              </p>

              <ServiceChecklist
                title="Depending on the project, this may include:"
                items={[
                  "Finding contractors",
                  "Obtaining quotations",
                  "Sourcing materials",
                  "Coordinating suppliers",
                  "Site communication",
                  "Project coordination",
                  "Progress updates",
                ]}
              />

              <p>
                We work with appropriate local professionals rather than
                attempting to replace architects, engineers or licensed
                specialists.
              </p>
            </ServiceSection>

            <ServiceSection title="A Practical Local Partnership">
              <p>
                We understand that property ownership doesn’t always follow a
                9-to-5 schedule.
              </p>

              <p>
                A pipe can leak while you’re abroad. A storm can damage a roof.
                A tenant may need assistance. A property may need work before
                the next tenant arrives.
              </p>

              <p>
                Having a reliable local contact makes these situations much
                easier to manage.
              </p>

              <p className="font-semibold text-primary">
                Professional work. Efficient coordination. Fair pricing. Clear
                communication.
              </p>
            </ServiceSection>

            <ServiceSection title="One Partner for Your Property">
              <p className="font-semibold text-primary">
                Buy → Sell → Rent → Manage → Maintain → Renovate → Build
              </p>

              <p>
                We want to be the local property partner you can continue
                working with long after the original transaction.
              </p>
            </ServiceSection>
          </div>

          <ServiceCta
            title="Need reliable local support for your property?"
            description="Whether you live overseas or simply need a local partner on Koh Phangan, we're here to help."
            buttonText="Talk to Our Team"
          />

          <ServiceDisclaimer className="mt-8">
            Property management, maintenance and construction services depend
            on the agreed scope of work. Specialist technical, structural and
            legal matters should be handled by appropriately qualified
            professionals.
          </ServiceDisclaimer>
        </div>
      </main>
    </div>
  );
}