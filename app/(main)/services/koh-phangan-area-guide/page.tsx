import UniversalHero from "@/components/layout/universal-hero";

import ServiceIntro from "../sections/service-intro";
import ServiceSection from "../sections/service-section";
import ServiceChecklist from "../sections/service-checklist";
import ServiceCta from "../sections/service-cta";
import ServiceDisclaimer from "../sections/service-disclaimer";

export default function KohPhanganAreaGuidePage() {
  return (
    <div>
      <UniversalHero page="Koh Phangan Area Guide" />

      <main className="container mx-auto">
        <div className="py-middel md:py-sections">
          <ServiceIntro
            eyebrow="08 — Koh Phangan Area Guide"
            title="Find the area that fits your life, property goals and budget."
            description="Koh Phangan is a diverse island. Each area has its own character, lifestyle, accessibility, property types and investment opportunities. The right location depends on what you want from your property."
          />

          <div className="mt-sections">
            <ServiceSection title="Understanding Koh Phangan">
              <p>
                Our area guides help you understand the island before choosing
                where to buy, rent or invest.
              </p>
            </ServiceSection>

            <ServiceSection title="Thong Sala">
              <p>
                The island’s main town and commercial centre.
              </p>

              <p>
                Thong Sala is practical, connected and convenient, with
                markets, shops, restaurants, services and the main ferry
                connection.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Permanent living, convenience, businesses and long-term
                rentals.
              </p>

              <p>
                <strong className="text-foreground">
                  Property considerations:
                </strong>{" "}
                Accessibility, commercial opportunities, residential
                properties and proximity to everyday services.
              </p>
            </ServiceSection>

            <ServiceSection title="Baan Tai">
              <p>
                Central, lively and well connected.
              </p>

              <p>
                Baan Tai sits between Thong Sala and Haad Rin and offers a mix
                of residential properties, restaurants, businesses, villas and
                rental opportunities.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong> Rental
                properties, businesses, younger residents and people wanting
                convenient access to different parts of the island.
              </p>

              <p>
                <strong className="text-foreground">
                  Property considerations:
                </strong>{" "}
                Rental demand, road access, commercial activity and proximity
                to the beach.
              </p>
            </ServiceSection>

            <ServiceSection title="Ban Khai">
              <p>Coastal living with development potential.</p>

              <p>
                Ban Khai offers a quieter alternative to Baan Tai while
                remaining relatively accessible.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Residential living, villas and rental properties.
              </p>

              <p>
                <strong className="text-foreground">
                  Property considerations:
                </strong>{" "}
                Land availability, access, views and proximity to Baan Tai and
                Haad Rin.
              </p>
            </ServiceSection>

            <ServiceSection title="Sri Thanu">
              <p>Wellness, community and lifestyle.</p>

              <p>
                Sri Thanu has become particularly known for wellness, yoga,
                cafés, healthy living and an international community.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Wellness-focused buyers, lifestyle properties, long-term
                residents and rental opportunities.
              </p>
            </ServiceSection>

            <ServiceSection title="Hin Kong">
              <p>Sunset, restaurants and coastal lifestyle.</p>

              <p>
                Hin Kong is known for its west-coast sunsets, relaxed
                atmosphere and growing selection of homes, villas and
                businesses.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Lifestyle buyers, long-term residents, villas and rental
                properties.
              </p>

              <p>
                <strong className="text-foreground">
                  Property considerations:
                </strong>{" "}
                Sea views, road access, proximity to Sri Thanu and Thong Sala.
              </p>
            </ServiceSection>

            <ServiceSection title="Wok Tum">
              <p>Quiet, central and close to everyday amenities.</p>

              <p>
                Wok Tum offers a more residential environment while remaining
                close to Thong Sala and the west coast.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Families, long-term residents and buyers looking for a quieter
                location.
              </p>
            </ServiceSection>

            <ServiceSection title="Haad Yao">
              <p>One of the island’s popular west-coast beaches.</p>

              <p>
                Haad Yao combines beach living with restaurants, accommodation
                and residential properties.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Lifestyle properties, holiday homes and rental opportunities.
              </p>
            </ServiceSection>

            <ServiceSection title="Haad Salad">
              <p>A quieter beach environment.</p>

              <p>
                Haad Salad is more peaceful and residential than some of the
                island’s busier areas.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Holiday homes, villas and buyers seeking a quieter coastal
                lifestyle.
              </p>
            </ServiceSection>

            <ServiceSection title="Mae Haad">
              <p>Beach, nature and access to Koh Ma.</p>

              <p>
                Mae Haad is known for its beach and proximity to Koh Ma and
                offers a more natural environment.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Holiday homes, lifestyle buyers and nature-focused properties.
              </p>
            </ServiceSection>

            <ServiceSection title="Chaloklum">
              <p>
                A traditional fishing village with a growing property market.
              </p>

              <p>
                Chaloklum has a strong local identity and a more relaxed
                northern-island atmosphere.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Long-term living, lifestyle properties and buyers looking for
                a quieter community.
              </p>
            </ServiceSection>

            <ServiceSection title="Thong Nai Pan">
              <p>Beautiful beaches and a more secluded lifestyle.</p>

              <p>
                Thong Nai Pan is one of the island’s best-known east-coast
                destinations, with a strong tourism and villa market.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Holiday homes, premium villas and tourism-related investment.
              </p>
            </ServiceSection>

            <ServiceSection title="Haad Rin">
              <p>
                The island’s most famous nightlife and Full Moon destination.
              </p>

              <p>
                Haad Rin has a very different property market from the rest of
                the island, with strong tourism activity and a wide range of
                accommodation and commercial properties.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Tourism businesses, rental accommodation and commercial
                opportunities.
              </p>
            </ServiceSection>

            <ServiceSection title="Than Sadet">
              <p>Nature, privacy and a quieter environment.</p>

              <p>
                Than Sadet is surrounded by natural landscapes and offers a
                very different lifestyle from the island’s developed west
                coast.
              </p>

              <p>
                <strong className="text-foreground">Good for:</strong>{" "}
                Nature-focused buyers and those seeking privacy.
              </p>
            </ServiceSection>

            <ServiceSection title="Other Areas">
              <p>
                Koh Phangan also has many smaller neighbourhoods and emerging
                areas.
              </p>

              <ServiceChecklist
                title="Some may offer:"
                items={[
                  "Larger plots",
                  "More privacy",
                  "Better value",
                  "Development opportunities",
                  "Mountain views",
                  "Sea views",
                  "Greater distance from tourist centres",
                ]}
              />

              <p>
                These areas can sometimes provide interesting opportunities,
                but they require careful consideration of access,
                infrastructure, land title and development restrictions.
              </p>
            </ServiceSection>

            <ServiceSection title="How We Help You Choose">
              <p>
                We don’t believe there is one “best area” in Koh Phangan.
              </p>

              <p>The best area depends on you.</p>

              <ServiceChecklist
                title="If you want:"
                items={[
                  "Convenience — consider areas close to Thong Sala.",
                  "Wellness & community — Sri Thanu and surrounding areas may be worth exploring.",
                  "Beach lifestyle — Haad Yao, Haad Salad, Mae Haad and Thong Nai Pan offer different coastal experiences.",
                  "Rental potential — areas with established tourism, infrastructure and tenant demand may be worth investigating.",
                  "Development — land availability, access, slope, infrastructure and planning restrictions become particularly important.",
                  "Peace & privacy — look beyond the main tourist centres and explore the island’s quieter areas.",
                ]}
              />
            </ServiceSection>

            <ServiceSection title="Our Local Knowledge">
              <p>
                We live and work around the property market in Koh Phangan and
                understand that location is about more than a name on a map.
              </p>

              <p className="font-semibold text-primary">
                Lifestyle → Accessibility → Property → Price → Rental Demand →
                Development Potential
              </p>

              <p>
                Then we help you find properties that fit your requirements.
              </p>
            </ServiceSection>
          </div>

          <ServiceCta
            title="Not sure which area is right for you?"
            description="Tell us about your lifestyle, property goals and budget. We can help you compare the different areas of Koh Phangan."
            buttonText="Talk to a Local Property Expert"
          />

          <ServiceDisclaimer className="mt-8">
            Area characteristics and property markets change over time. The
            information provided is a general guide and should be considered
            alongside current local conditions and property-specific due
            diligence.
          </ServiceDisclaimer>
        </div>
      </main>
    </div>
  );
}