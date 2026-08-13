import UniversalHero from "@/components/layout/universal-hero";

import ServiceIntro from "../sections/service-intro";
import ServiceSection from "../sections/service-section";
import ServiceChecklist from "../sections/service-checklist";
import ServiceCta from "../sections/service-cta";
import ServiceDisclaimer from "../sections/service-disclaimer";

export default function RentingPropertyPage() {
  return (
    <div>
      <UniversalHero page="Renting Your Property" />

      <main className="container mx-auto">
        <div className="py-middel md:py-sections">
          <ServiceIntro
            eyebrow="04 — Renting Your Property"
            title="Find the right tenant. Protect your property. Build a long-term relationship."
            description="Renting out a property should be simple and well managed. Tropical Roots Realty helps property owners present their property professionally, reach suitable tenants and manage the practical process from enquiry to move-in."
          />

          <div className="mt-sections">
            <ServiceSection title="How We Help You Rent Your Property">
              <p>
                Whether you are renting a villa, apartment, house, commercial
                space or land, we provide local support designed around your
                property.
              </p>
            </ServiceSection>

            <ServiceSection title="1. Understand Your Property">
              <p>
                We start by understanding the property, its condition,
                location, facilities and your rental expectations.
              </p>

              <p>
                We also discuss whether you are looking for a long-term
                tenant, seasonal tenant or another rental arrangement.
              </p>

              <p>
                <strong className="text-foreground">Our role:</strong> Help
                position the property for the right rental market.
              </p>
            </ServiceSection>

            <ServiceSection title="2. Rental Pricing">
              <p>Setting the right rental price is important.</p>

              <ServiceChecklist
                title="We consider factors such as:"
                items={[
                  "Location",
                  "Property type",
                  "Size",
                  "Condition",
                  "Furnishing",
                  "Facilities",
                  "Accessibility",
                  "Seasonality",
                  "Comparable properties",
                  "Current demand",
                ]}
              />

              <p>
                We provide practical local rental guidance and help position
                your property competitively.
              </p>
            </ServiceSection>

            <ServiceSection title="3. Professional Listing">
              <p>
                We create a clear property listing designed to answer the
                questions tenants want to know.
              </p>

              <ServiceChecklist
                title="Listings can include:"
                items={[
                  "Professional photographs",
                  "Property description",
                  "Location",
                  "Size",
                  "Number of rooms",
                  "Facilities",
                  "Furnishing",
                  "Rental price",
                  "Availability",
                  "Important conditions",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="4. Promote Your Property">
              <p>
                We don’t believe in simply uploading a property and waiting.
              </p>

              <p>
                We actively work to expose suitable properties to potential
                tenants through our website, network and marketing channels.
              </p>

              <p className="font-medium text-foreground">
                Website → Social media → Direct enquiries → Local network →
                International audiences → Targeted marketing
              </p>
            </ServiceSection>

            <ServiceSection title="5. Tenant Enquiries">
              <p>
                We communicate with prospective tenants, answer initial
                questions and understand what they are looking for.
              </p>

              <p>
                This allows us to identify whether the property is a suitable
                match before arranging a viewing.
              </p>
            </ServiceSection>

            <ServiceSection title="6. Property Viewings">
              <p>
                We coordinate viewings and communicate with both the owner and
                potential tenant.
              </p>

              <p>
                For owners who live away from Koh Phangan, having a reliable
                local contact can make the rental process considerably easier.
              </p>
            </ServiceSection>

            <ServiceSection title="7. Tenant Matching">
              <p>
                A good tenant is not simply someone who can pay the rent.
              </p>

              <p>
                Compatibility with the property, rental period, intended use
                and owner’s requirements all matter.
              </p>
            </ServiceSection>

            <ServiceSection title="8. Rental Agreement">
              <p>
                Once the owner and tenant agree on the main terms, the
                appropriate rental documentation can be prepared.
              </p>

              <p>
                We help coordinate communication between the parties and
                recommend professional legal advice where required.
              </p>
            </ServiceSection>

            <ServiceSection title="9. Move-In Coordination">
              <ServiceChecklist
                title="We can help coordinate:"
                items={[
                  "Move-in arrangements",
                  "Property condition",
                  "Keys",
                  "Utilities",
                  "Inventory where applicable",
                  "Communication between owner and tenant",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="10. Ongoing Property Support">
              <p>
                Our relationship doesn’t have to end when the tenant moves in.
              </p>

              <ServiceChecklist
                title="For owners who want ongoing local support, we can assist with:"
                items={[
                  "Property inspections",
                  "Cleaning",
                  "Repairs",
                  "Maintenance",
                  "Garden care",
                  "Pool maintenance",
                  "Emergency coordination",
                  "Renovation",
                  "Construction",
                  "General property management",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="For Owners Living Overseas">
              <p>
                Managing a property from another country can be difficult.
              </p>

              <p className="font-medium text-foreground">
                Check the property → Coordinate repairs → Communicate with
                tenants → Arrange maintenance → Report issues → Help protect
                the property
              </p>

              <p>Tropical Roots can provide that local connection.</p>
            </ServiceSection>

            <ServiceSection title="For Tenants">
              <p>
                We also want the rental process to work well for tenants.
              </p>

              <p>
                Our goal is to provide clear property information, honest
                communication and a professional viewing and rental
                experience.
              </p>
            </ServiceSection>

            <ServiceSection title="Why Tropical Roots?">
              <ServiceChecklist
                items={[
                  "Professional presentation",
                  "Targeted marketing",
                  "Local support",
                  "Efficient service",
                  "Long-term relationships",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="More Than Finding a Tenant">
              <p>
                Our objective is not simply to fill a vacancy.
              </p>

              <p>
                We want to help you rent your property responsibly, maintain
                its value and build a relationship you can rely on for the
                future.
              </p>

              <p className="font-semibold text-primary">
                List. Market. Match. Manage.
              </p>
            </ServiceSection>
          </div>

          <ServiceCta
            title="Ready to rent your property?"
            description="Tell us about your property and rental requirements. We can help you prepare, market and manage the rental process."
            buttonText="Rent Your Property"
          />

          <ServiceDisclaimer className="mt-8">
            Rental arrangements and regulatory requirements can vary depending
            on the property and intended use. Independent professional advice
            should be obtained where appropriate.
          </ServiceDisclaimer>
        </div>
      </main>
    </div>
  );
}