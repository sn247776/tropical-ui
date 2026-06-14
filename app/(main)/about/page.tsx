import AboutImg from "@/assets/about.jpg";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/layout/section-title";
import { BarChart2, CheckCircle, Handshake } from "lucide-react";
import AboutCard from "@/components/global/cards/about-card";
import Brand1 from "@/assets/brands/brand.png";
import Brand2 from "@/assets/brands/brand2.png";
import Brand3 from "@/assets/brands/brand3.png";
import Brand4 from "@/assets/brands/brand4.png";
import Brand5 from "@/assets/brands/brand5.png";
import Brand6 from "@/assets/brands/brand6.png";
import Brand7 from "@/assets/brands/brand7.png";
import Brand8 from "@/assets/brands/brand8.png";
import { basicInfo } from "@/stores/basic-info";
import BrandSlider from "@/components/global/brand-slider";
import Link from "next/link";
import UniversalHero from "@/components/layout/universal-hero";

export default function AboutPage() {
  const brands = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
  ];

  return (
    <div>
      <UniversalHero page="About Us"  />

      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 md:py-sections sm:py-middel pt-middel md:gap-sections gap-middel items-center">
          <div className="md:h-[500px] h-[300px] rounded-lg shadow-md  animate-fade-in duration-300 relative">
            <div className="bg-primary/30 w-full h-full absolute z-10"/>
            <img
              src={AboutImg?.src}
              alt="About Us"
              className="w-full object-cover absolute h-full"
            />
          </div>

          <div className="flex flex-col gap-items">
            <SectionTitle
              align="center"
              title="Transforming Real Estate in Gurugram"
              heading="Tech powered space solutions"
              desc={`${basicInfo?.name} is revolutionizing real estate by offering seamless, tech-driven solutions from possession to post-sale management.`}
            />
            <p className="text-muted-foreground text-center">
              We aim to simplify India's complex realty sector by delivering an
              unparalleled experience in leasing, selling, and managing
              properties. Through innovation and exceptional service, we empower
              buyers, sellers, and brokers with a streamlined, reliable journey.
            </p>
            <div className="flex justify-center"><Link href={'/spaces'}> <Button className="w-fit mt-items">Browse Spaces</Button></Link></div>
          </div>
        </div>

        <div className="sm:mt-0 mt-middel">
          <SectionTitle
            align="center"
            title={`Why Choose ${basicInfo?.name}`}
            heading="Efficiency in every transaction"
            desc="We leverage cutting-edge technology to ensure your property experience is smooth, informed, and valuable."
          />

          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-middel pt-middel">
            <AboutCard
              icon={CheckCircle}
              title="End-to-End Solutions"
              desc="From possession to post-sale, we handle every stage with precision and care."
              href="/contact"
            />
            <AboutCard
              icon={BarChart2}
              title="Tech-Driven Intelligence"
              desc="Our advanced tools offer actionable insights for smarter real estate decisions."
              href="/contact"
            />
            <AboutCard
              icon={Handshake}
              title="Client-Centric Approach"
              desc="Whether you're a buyer, seller, or broker—we prioritize your needs and success."
              href="/contact"
            />
          </div>
        </div>
      </div>

      <div className="bg-primary md:py-sections py-middel md:mt-sections mt-middel">
        <SectionTitle
          isWhite
          heading="Our Clients"
          className="mb-items"
        />

        <div className="container md:py-sections py-middel overflow-hidden mx-auto">
          <BrandSlider brands={brands} />
        </div>
      </div>
    </div>
  );
}
