import UniversalHero from "@/components/layout/universal-hero";

import ServiceIntro from "../sections/service-intro";
import ServiceSection from "../sections/service-section";
import ServiceChecklist from "../sections/service-checklist";
import ServiceCta from "../sections/service-cta";
import ServiceDisclaimer from "../sections/service-disclaimer";

export default function RenovationConstructionPage() {
  return (
    <div>
      <UniversalHero page="Renovation & Construction" />

      <main className="container mx-auto px-4">
        <div className="py-middel md:py-sections">
          <ServiceIntro
            eyebrow="06 — Renovation & Construction"
            title="From an idea to a finished property."
            description="Whether you are renovating a small villa, upgrading a rental property or planning a new build, construction on an island requires good local coordination."
          />

          <div className="mt-sections">
            <ServiceSection title="Our Construction Approach">
              <p>
                Tropical Roots Realty provides practical renovation and
                construction assistance, helping property owners connect with
                the right local professionals, source materials and coordinate
                the work.
              </p>

              <p>
                Our role is to make the process more organised, transparent
                and efficient.
              </p>
            </ServiceSection>

            <ServiceSection title="Renovating a Property">
              <p>
                Not every property needs a complete renovation. Sometimes a
                few well-planned improvements can make a significant difference
                to comfort, rental appeal and overall presentation.
              </p>

              <ServiceChecklist
                title="We can help coordinate:"
                items={[
                  "Painting",
                  "Bathrooms",
                  "Kitchens",
                  "Flooring",
                  "Lighting",
                  "Furniture",
                  "Doors and windows",
                  "Outdoor areas",
                  "Landscaping",
                  "Pools",
                  "General repairs",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Before Starting a Project">
              <p>
                A successful renovation starts with understanding the property
                and the work required.
              </p>

              <ServiceChecklist
                title="We can help identify:"
                items={[
                  "What needs to be repaired",
                  "What could be improved",
                  "What materials are required",
                  "Which specialists are needed",
                  "Approximate project requirements",
                  "Potential priorities",
                ]}
              />

              <p>
                For technical, structural or legal matters, we coordinate with
                the appropriate qualified professionals.
              </p>
            </ServiceSection>

            <ServiceSection title="Finding Contractors">
              <p>
                Finding reliable people for construction work can be
                difficult, particularly when you are managing a project from
                overseas.
              </p>

              <p>
                We can help source and coordinate appropriate local
                contractors and service providers based on the requirements of
                the project.
              </p>

              <p>
                Where appropriate, we can assist with comparing quotations and
                communicating project requirements.
              </p>
            </ServiceSection>

            <ServiceSection title="Materials & Procurement">
              <p>
                Island construction can involve additional logistics when
                materials need to be sourced or transported.
              </p>

              <ServiceChecklist
                items={[
                  "Material sourcing",
                  "Supplier coordination",
                  "Delivery coordination",
                  "Furniture sourcing",
                  "Fixtures and fittings",
                  "Finishing materials",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Project Coordination">
              <p>
                A construction project can involve many different people.
              </p>

              <p className="font-semibold text-primary">
                Owner → Architect → Engineer → Contractor → Suppliers →
                Tradespeople
              </p>

              <p>
                We help keep communication moving between the relevant parties
                and provide practical local coordination.
              </p>
            </ServiceSection>

            <ServiceSection title="Building a New Property">
              <p>
                If you are considering building from the ground up, there are
                many things to consider before construction begins.
              </p>

              <ServiceChecklist
                items={[
                  "Land title",
                  "Legal access",
                  "Site conditions",
                  "Topography",
                  "Building permissions",
                  "Design",
                  "Infrastructure",
                  "Water",
                  "Electricity",
                  "Drainage",
                  "Construction costs",
                  "Materials",
                  "Contractor selection",
                  "Project timeline",
                ]}
              />

              <p>
                We can help you identify the key areas that need to be
                investigated and coordinate the appropriate professionals.
              </p>
            </ServiceSection>

            <ServiceSection title="Building on Hillside Land">
              <p>
                Koh Phangan has many properties with slopes and challenging
                terrain.
              </p>

              <ServiceChecklist
                title="Before purchasing land for development, it is important to understand:"
                items={[
                  "Slope",
                  "Access",
                  "Drainage",
                  "Soil conditions",
                  "Retaining requirements",
                  "Construction logistics",
                  "Building restrictions",
                  "Infrastructure",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Renovation for Rental">
              <p>
                If your goal is to rent your property, renovation should be
                considered from both a design and business perspective.
              </p>

              <ServiceChecklist
                title="The right improvements can focus on:"
                items={[
                  "Comfort",
                  "Durability",
                  "Appearance",
                  "Maintenance",
                  "Guest experience",
                  "Rental appeal",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Renovation Before Selling">
              <p>
                Sometimes improving a property before selling can make it
                easier to market and present.
              </p>

              <p>
                We can help identify visible improvements that may be worth
                considering before listing the property.
              </p>
            </ServiceSection>

            <ServiceSection title="Managing a Project Remotely">
              <p>
                If you live outside Thailand, managing construction can be
                challenging.
              </p>

              <p className="font-semibold text-primary">
                Communication → Site coordination → Suppliers → Contractors →
                Updates → Problem solving
              </p>

              <p>
                Tropical Roots can provide local coordination while keeping
                the owner informed.
              </p>
            </ServiceSection>

            <ServiceSection title="Our Construction Approach">
              <p className="font-semibold text-primary">
                Clearly planned.
                <br />
                Properly coordinated.
                <br />
                Professionally executed.
                <br />
                Fairly priced.
              </p>

              <p>
                We don’t try to be everything ourselves. Where specialist
                expertise is required, we work with appropriate architects,
                engineers, contractors and other professionals.
              </p>
            </ServiceSection>

            <ServiceSection title="From Property to Project">
              <p className="font-semibold text-primary">
                Find the property → Assess the potential → Plan the work →
                Coordinate professionals → Renovate or build → Maintain the
                property
              </p>

              <p>
                This is where our real-estate and property-services approach
                comes together.
              </p>
            </ServiceSection>
          </div>

          <ServiceCta
            title="Planning a renovation or construction project?"
            description="Tell us about your property and project. We can help coordinate the local professionals and practical support you need."
            buttonText="Discuss Your Project"
          />

          <ServiceDisclaimer className="mt-8">
            Construction, planning and technical requirements vary by project.
            Tropical Roots does not replace licensed architects, engineers,
            surveyors or other qualified specialists. Appropriate professional
            advice should be obtained where required.
          </ServiceDisclaimer>
        </div>
      </main>
    </div>
  );
}