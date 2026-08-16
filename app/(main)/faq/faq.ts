import type { ElementType } from "react";
import {
  Building2,
  FileCheck2,
  HardHat,
  Home,
  Landmark,
  MapPin,
  ShieldCheck,
  Users,
  Wallet,
  Wrench,
  Handshake,
} from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
  help?: string;
  bullets?: string[];
};

export type FAQSection = {
  number: string;
  title: string;
  description?: string;
  icon: ElementType;
  faqs: FAQItem[];
};

const faqSections: FAQSection[] = [
  {
    number: "01",
    title: "Foreign Ownership",
    icon: Landmark,
    faqs: [
      {
        question: "Can foreigners own land in Thailand?",
        answer:
          "Generally, foreigners cannot directly own Thai land in their personal name, subject to limited legal exceptions. There are other ways a foreign buyer may obtain rights to use or own property, depending on the circumstances.",
        help:
          "We explain the available structures at a practical level and coordinate with an independent Thai lawyer before you commit.",
      },
      {
        question: "Can foreigners own a house or villa?",
        answer:
          "A foreigner may be able to own a building separately from the land underneath it. The land and building therefore need to be considered separately when purchasing a villa.",
        help:
          "We identify the proposed structure and coordinate the legal and property checks required.",
      },
      {
        question: "Can a foreigner own a condominium?",
        answer:
          "Qualifying condominium units can generally be owned directly by foreigners, subject to Thai law and the applicable foreign ownership quota within the building.",
        help:
          "We source suitable condominiums and coordinate ownership and document checks.",
      },
      {
        question: "Freehold or leasehold — which is better?",
        answer:
          "Neither is automatically better. The right option depends on your budget, intended use, timeframe, family situation and long-term plans.",
        help:
          "We explain the practical differences so you can have an informed discussion with your lawyer.",
      },
      {
        question: "Is a 30+30+30 lease really 90 years?",
        answer:
          "A registered lease term is subject to the legal limits applicable in Thailand. Future renewal periods should not simply be treated as guaranteed ownership.",
        help:
          "We highlight the lease term and renewal provisions and recommend independent legal review before signing.",
      },
      {
        question: "Can I buy a villa on leasehold land?",
        answer:
          "A foreign buyer may acquire a villa while holding a lease or other registered right over the land, depending on the structure.",
        help:
          "We help identify exactly what is being sold and coordinate the appropriate legal checks.",
      },
      {
        question: "Can I sell a leasehold property?",
        answer:
          "Potentially, depending on the lease agreement and its assignment provisions. The remaining lease term, transfer conditions and building ownership all matter.",
        help:
          "We can market the property, find buyers and coordinate the transaction with the relevant professionals.",
      },
      {
        question: "What happens when my lease expires?",
        answer:
          "The answer depends on the lease agreement and applicable law. A future renewal should never be assumed to be automatic.",
        help:
          "We encourage buyers to understand the exit and renewal provisions before purchasing.",
      },
    ],
  },

  {
    number: "02",
    title: "Thai Companies & Other Structures",
    icon: Building2,
    faqs: [
      {
        question: "Can a Thai company own land?",
        answer:
          "A Thai company may own land where it is legally entitled to do so and operates as a genuine Thai company. Using nominee shareholders simply to circumvent foreign ownership restrictions is a different matter and can create serious legal risks.",
        help:
          "We do not recommend nominee arrangements. Where a genuine business structure is relevant, we coordinate with qualified legal and corporate professionals.",
      },
      {
        question: "Can I use Thai nominees?",
        answer:
          "We do not recommend or facilitate nominee ownership structures. If you are considering a company structure, it should be properly established, commercially genuine and independently reviewed.",
      },
      {
        question: "What is usufruct?",
        answer:
          "Usufruct is a registered right allowing a person to use and benefit from property owned by another person, subject to its terms and applicable law. It can be relevant in family and personal arrangements.",
        help:
          "We explain the basic concept and connect you with an appropriate lawyer.",
      },
      {
        question: "What is superficies?",
        answer:
          "Superficies is a legal right that can separate ownership of a building from ownership of the land. It can be relevant when a person owns a building on land owned by someone else.",
        help:
          "We identify when the structure may be relevant and coordinate legal advice.",
      },
      {
        question: "What is Sap-Ing-Sith?",
        answer:
          "Sap-Ing-Sith is a registered property right created under Thai law that can provide rights to use or benefit from land or buildings for a defined period. It is different from both a normal lease and superficies.",
        help:
          "We can identify the structure being offered and recommend specialist legal advice.",
      },
      {
        question: "Can my Thai spouse own the land?",
        answer:
          "A Thai spouse may own land in their own name, subject to the applicable requirements. A foreign spouse should obtain independent legal advice about their rights and financial contribution.",
        help:
          "We can coordinate the property transaction while your lawyer advises on the family and ownership structure.",
      },
      {
        question: "What happens to my property when I die?",
        answer:
          "Different property rights can be treated differently on death. A lease, building ownership, condominium and company shares may each require different succession planning.",
        help:
          "We can help identify the property interests involved and coordinate with a lawyer for estate planning.",
      },
    ],
  },

  {
    number: "03",
    title: "Land Documents",
    icon: FileCheck2,
    faqs: [
      {
        question: "What is a Chanote?",
        answer:
          "Chanote, or Nor Sor 4 Jor, is the highest-grade commonly recognised land title in Thailand. It identifies the registered land and its boundaries.",
        help:
          "We can help obtain and organise the available property documentation and coordinate professional verification.",
      },
      {
        question: "What is Nor Sor 3 Gor?",
        answer:
          "Nor Sor 3 Gor is another form of land title with surveyed boundaries, but it is different from Chanote. The specific property and its documentation should be checked before purchase.",
      },
      {
        question: "What is Nor Sor 3?",
        answer:
          "Nor Sor 3 is a lower level of land documentation with different boundary characteristics from Chanote and Nor Sor 3 Gor.",
        help:
          "Do not judge a property solely from a photograph of the document. Have the title independently checked.",
      },
      {
        question: "What is Por Bor Tor 5?",
        answer:
          "Por Bor Tor 5 is not equivalent to a Chanote land title. Buyers should be particularly careful when a property is marketed as land but does not have a standard title deed.",
      },
      {
        question: "What is Sor Por Kor?",
        answer:
          "Sor Por Kor land is subject to specific agricultural and land-use rules and should not be treated as ordinary freehold land.",
        help:
          "We identify the document type and recommend professional verification before any commitment.",
      },
      {
        question: "How do I verify a land title?",
        answer:
          "The title should be checked against the official Land Office records. Ownership, encumbrances, boundaries and other relevant matters should also be investigated.",
        help:
          "We coordinate the process with appropriate legal and surveying professionals.",
      },
      {
        question: "How do I verify the seller?",
        answer:
          "The seller’s identity should correspond with the registered ownership information, or they must have appropriate authority to act.",
        help:
          "We coordinate the seller, documents and professional checks.",
      },
      {
        question: "What if the land size is different from the advertised size?",
        answer:
          "The advertised area should not automatically be treated as the legally verified area. Where necessary, a survey can establish the physical boundaries and identify discrepancies.",
        help:
          "We can coordinate surveyors and communicate the findings between buyer and seller.",
      },
      {
        question: "Does road access matter?",
        answer:
          "Absolutely. A property can be attractive but still have significant problems if legal or practical access is unclear.",
        help:
          "We identify access as part of the property’s initial assessment and coordinate professional verification where necessary.",
      },
      {
        question: "Does a sea view mean I will always have the view?",
        answer:
          "No. Neighbouring land can potentially be developed subject to applicable laws and restrictions.",
        help:
          "We encourage buyers to investigate surrounding plots and development possibilities rather than relying solely on the current view.",
      },
    ],
  },

  {
    number: "04",
    title: "Building & Land Use",
    icon: HardHat,
    faqs: [
      {
        question: "Can I build whatever I want on my land?",
        answer:
          "No. Building rights depend on applicable zoning, environmental restrictions, access, permits, land characteristics and other requirements.",
        help:
          "We identify the questions that need to be answered and coordinate with architects, engineers and other professionals.",
      },
      {
        question: "Can I build on hillside land?",
        answer:
          "Possibly, but slope can have a significant impact on what can be built. Koh Phangan’s terrain makes topography and access particularly important.",
        help:
          "We can help arrange topographic surveys and coordinate professional assessment before you invest in a project.",
      },
      {
        question: "Can I build near the beach?",
        answer:
          "Coastal properties can be subject to additional environmental and building restrictions. The exact position of the land and applicable regulations must be checked.",
        help:
          "We flag coastal properties for additional due diligence.",
      },
      {
        question: "Can I renovate an existing villa?",
        answer:
          "Possibly. The scope of the renovation matters, and certain works may require professional design, approval or permits.",
        help:
          "We can help source contractors and coordinate architects, engineers and other specialists.",
      },
      {
        question: "Can I build a pool?",
        answer:
          "A pool may be possible, but site conditions, planning and construction requirements need to be considered.",
        help:
          "We can coordinate contractors and relevant professionals.",
      },
      {
        question: "Can I build a commercial property?",
        answer:
          "That depends on the location, zoning, permitted use and relevant approvals.",
        help:
          "We can help investigate the property’s potential and connect you with the appropriate professionals.",
      },
    ],
  },

  {
    number: "05",
    title: "Costs & Taxes",
    icon: Wallet,
    faqs: [
      {
        question: "What costs should I budget for when buying?",
        answer:
          "The purchase price is only one part of the total cost. Depending on the transaction, there may be Land Office fees, taxes, legal fees, surveys, inspections, translation and other professional costs.",
        help:
          "We help you understand the likely categories of costs and coordinate with lawyers and accountants for exact figures.",
      },
      {
        question: "Who pays the agent commission?",
        answer:
          "This depends on the agency agreement and transaction.",
        help: "Our fee structure will always be explained clearly before you proceed. Our principle: No unexpected fees.",
      },
      {
        question: "What taxes apply when buying?",
        answer:
          "The applicable taxes and government fees depend on the property and transaction structure.",
        help:
          "We identify the relevant categories and coordinate with the appropriate legal or tax professional for the exact calculation.",
      },
      {
        question: "What taxes apply when selling?",
        answer:
          "A seller may face different taxes and transfer-related costs depending on ownership structure, holding period and the nature of the property.",
        help:
          "We help prepare the transaction and coordinate with the relevant professionals.",
      },
      {
        question: "What is Specific Business Tax?",
        answer:
          "Specific Business Tax can apply to certain property transactions. Whether it applies depends on the circumstances of the seller and transaction.",
        help:
          "We flag the issue early and recommend professional confirmation of the amount.",
      },
      {
        question: "What is withholding tax?",
        answer:
          "Withholding tax can arise when property is transferred. The calculation can differ depending on whether the seller is an individual or company and other circumstances.",
        help:
          "We coordinate with the lawyer/accountant handling the transaction.",
      },
      {
        question: "What is stamp duty?",
        answer:
          "Stamp duty is a government charge that may apply in certain property transactions. Whether it applies and the amount depend on the circumstances.",
      },
      {
        question: "What is Land & Building Tax?",
        answer:
          "Thailand has an annual Land and Building Tax system. The applicable liability depends on the property, use, ownership and applicable assessment.",
        help:
          "We can help owners understand what needs to be checked and connect them with an accountant or tax professional.",
      },
      {
        question: "Do I pay tax on rental income?",
        answer:
          "Rental income can create Thai tax obligations. The exact treatment depends on the owner’s circumstances.",
        help:
          "We can help owners organise their rental information and connect them with an appropriate tax professional.",
      },
      {
        question: "How much does a property lawyer cost?",
        answer:
          "Legal fees vary according to the property and the scope of work. A simple transaction and a complex land or development transaction should not be expected to cost the same.",
        help:
          "We can introduce appropriate legal professionals and help clarify what work is required.",
      },
    ],
  },

  {
    number: "06",
    title: "Money & Financing",
    icon: Wallet,
    faqs: [
      {
        question: "Can foreigners get a mortgage in Thailand?",
        answer:
          "Financing options for foreign buyers can be limited and depend on the buyer, lender and property.",
        help:
          "We can explain the property-side requirements and, where appropriate, introduce buyers to financing professionals.",
      },
      {
        question: "How do I transfer money into Thailand?",
        answer:
          "International buyers should use an appropriate banking channel and maintain proper records of the transfer. For certain purchases, documentation showing the origin and movement of funds can be important.",
        help:
          "We coordinate with the buyer’s lawyer and bank so the transaction documentation is properly organised.",
      },
      {
        question: "What is an FET?",
        answer:
          "A Foreign Exchange Transaction document is issued by a Thai bank in qualifying circumstances when foreign currency is transferred into Thailand. It can be important documentation for certain foreign property purchases and future repatriation.",
        help: "Keep all original banking and transaction records.",
      },
      {
        question: "Can I buy property remotely?",
        answer:
          "Many parts of the property process can be handled remotely. However, some transactions may require personal attendance or properly authorised representation.",
        help:
          "We provide local coordination, virtual viewings, document communication and professional introductions for overseas buyers.",
      },
    ],
  },

  {
    number: "07",
    title: "The Buying Process",
    icon: Home,
    faqs: [
      {
        question: "How do I start looking for property?",
        answer: "Start with your:",
        bullets: [
          "Budget",
          "Preferred areas",
          "Property type",
          "Intended use",
          "Timeframe",
          "Investment objectives",
        ],
        help: "We turn your requirements into a focused property search.",
      },
      {
        question: "How do I find the right property?",
        answer:
          "We combine our website listings, owner network and local market knowledge to identify suitable properties. We focus on matching the property to the buyer, rather than simply showing everything available.",
      },
      {
        question: "Can I view properties remotely?",
        answer:
          "Yes. We can provide photographs, videos, additional information and virtual viewing support where available. For a major purchase, however, we recommend visiting the property personally whenever possible.",
      },
      {
        question: "Can I negotiate the price?",
        answer:
          "Yes, depending on the property and seller. Good negotiation starts with understanding the property’s market position and the seller’s circumstances.",
        help:
          "We communicate between buyer and seller and work toward a practical agreement.",
      },
      {
        question: "What is a reservation deposit?",
        answer:
          "A reservation deposit is normally used to temporarily secure a property while the parties move toward a formal agreement. The exact conditions should always be written clearly.",
      },
      {
        question: "Can I get my deposit back?",
        answer:
          "That depends on the reservation agreement and the reason for cancellation.",
        help:
          "Understand the refund and cancellation conditions before paying.",
      },
      {
        question: "What is due diligence?",
        answer: "Due diligence is the process of checking whether the property and transaction are what they appear to be.",
        bullets: [
          "Ownership",
          "Title",
          "Encumbrances",
          "Access",
          "Boundaries",
          "Building documentation",
          "Zoning",
          "Utilities",
          "Contracts",
          "Physical condition",
        ],
        help: "We coordinate the appropriate professionals.",
      },
      {
        question: "Do I need a lawyer?",
        answer:
          "For a significant property transaction, we strongly recommend independent legal advice.",
        help:
          "Our role is to help connect you with an appropriate lawyer and coordinate communication.",
      },
      {
        question: "What happens at the Land Office?",
        answer:
          "The Land Office is involved in registering certain property transfers and rights. The exact process depends on the transaction.",
        help:
          "We coordinate the parties and professionals so the completion process is organised.",
      },
      {
        question: "How long does buying property take?",
        answer:
          "There is no universal timeline. A clean, straightforward transaction may move quickly, while complex ownership, title, company, construction or legal issues can take considerably longer.",
        help:
          "We give you a realistic timeline based on the specific property rather than promising an artificial deadline.",
      },
      {
        question: "Do I need to be in Thailand?",
        answer:
          "Not necessarily for every stage. Some transactions can be handled through authorised representatives, depending on the circumstances.",
        help: "Your lawyer should confirm what is required.",
      },
    ],
  },

  {
    number: "08",
    title: "What Can Go Wrong?",
    icon: ShieldCheck,
    faqs: [
      {
        question: "What are the biggest risks when buying property?",
        answer: "Common areas of concern include:",
        bullets: [
          "Unclear ownership",
          "Title problems",
          "Access issues",
          "Boundary disputes",
          "Unauthorised construction",
          "Development restrictions",
          "Poor contracts",
          "Unrealistic rental projections",
          "Hidden repair costs",
        ],
        help:
          "We help identify these questions early and coordinate appropriate due diligence.",
      },
      {
        question: "What if I discover a problem during due diligence?",
        answer:
          "The correct response depends on the problem. It may be possible to resolve the issue, renegotiate the terms or decide not to proceed.",
        help:
          "We communicate with the parties and help coordinate the professionals needed to make an informed decision.",
      },
      {
        question: "Can I cancel after signing?",
        answer:
          "That depends on the contract. Never assume a deposit is refundable or a contract can simply be cancelled.",
        help: "Have the agreement reviewed before signing.",
      },
    ],
  },

  {
    number: "09",
    title: "Buying Different Types of Property",
    icon: Building2,
    faqs: [
      {
        question: "Land, villa or off-plan — which is best?",
        answer:
          "Each has different advantages and risks.",
        bullets: [
          "Land: More control, but construction and development risk.",
          "Finished villa: More certainty, but usually a higher entry cost.",
          "Off-plan: Potentially staged payments and a new property, but developer and construction risk.",
        ],
        help: "We compare opportunities based on your goals.",
      },
      {
        question: "Is off-plan property safe?",
        answer:
          "No property purchase is risk-free. With off-plan, investigate the developer, land, permits, contract, payment schedule and construction obligations carefully.",
      },
      {
        question: "What should I check when buying an existing villa?",
        answer: "Look beyond appearance. Consider:",
        bullets: [
          "Structure",
          "Roof",
          "Plumbing",
          "Electrical systems",
          "Water",
          "Drainage",
          "Pool",
          "Access",
          "Building documentation",
          "Land title",
          "Renovation requirements",
        ],
        help: "We coordinate appropriate inspections and professional checks.",
      },
    ],
  },

  {
    number: "10",
    title: "Selling Property",
    icon: Users,
    faqs: [
      {
        question: "How do I sell my property?",
        answer:
          "A successful sale begins with proper positioning.",
        bullets: [
          "Property assessment",
          "Pricing guidance",
          "Listing",
          "Marketing",
          "Buyer enquiries",
          "Viewings",
          "Negotiation",
          "Transaction coordination",
        ],
      },
      {
        question: "How will you promote my property?",
        answer:
          "We don’t want your property to simply sit on a listing page.",
        bullets: [
          "Tropical Roots website",
          "Social media",
          "Direct enquiries",
          "Buyer networks",
          "Investor networks",
          "Local contacts",
          "International marketing",
          "Targeted promotion where appropriate",
        ],
        help: "The objective is the right audience, not just more views.",
      },
      {
        question: "How do you decide the asking price?",
        answer:
          "We look at the property’s location, condition, size, features, comparable opportunities and market positioning.",
        help:
          "Where a formal valuation is required, we recommend an appropriate professional.",
      },
      {
        question: "How long will it take to sell?",
        answer:
          "There is no honest universal answer. Price, property quality, location, documentation, market conditions and buyer demand all affect the timeline.",
      },
      {
        question: "Can I sell my leasehold property?",
        answer:
          "Potentially, depending on the lease agreement and assignment provisions.",
        help:
          "We will review the available information and coordinate with your lawyer.",
      },
      {
        question: "Can I sell a property while living overseas?",
        answer:
          "Yes, depending on the property and transaction structure.",
        help:
          "We can provide local representation and coordination while you are away, subject to the appropriate legal authorisations.",
      },
    ],
  },

  {
    number: "11",
    title: "Koh Phangan Property Questions",
    icon: MapPin,
    faqs: [
      {
        question: "Why invest in Koh Phangan?",
        answer:
          "Koh Phangan offers a distinctive combination of lifestyle, tourism, wellness, nature and growing international interest. But it is not the right market for every investor.",
        help:
          "We help you assess the property based on your objectives rather than simply selling the idea of the island.",
      },
      {
        question: "Koh Phangan or Koh Samui?",
        answer:
          "They are different markets. Samui has more mature infrastructure and a larger established property market. Koh Phangan offers a different lifestyle and development profile.",
        help:
          "We help you compare the locations based on your intended use and investment goals.",
      },
      {
        question: "Which area of Koh Phangan is best?",
        answer:
          "There is no single best area. Sri Thanu, Hin Kong, Haad Yao, Ban Tai, Thong Sala, Chaloklum, Thong Nai Pan, Haad Rin and the island’s inland areas all offer different lifestyles and property opportunities.",
        help: "We match the area to your priorities.",
      },
      {
        question: "Is sea-view property a good investment?",
        answer:
          "A good view can add value, but it should not be the only consideration. Access, title, buildability, surrounding land, slope, infrastructure and price all matter.",
      },
      {
        question: "Is hillside land a good investment?",
        answer:
          "It can be attractive, but hillside land requires additional due diligence. Slope, access, drainage, construction requirements and development restrictions should be investigated before purchase.",
      },
      {
        question: "Is Koh Phangan good for rental property?",
        answer:
          "Some areas and properties can have strong rental demand, but rental performance varies significantly. We recommend using realistic assumptions for occupancy, management, maintenance and seasonality.",
        help: "We do not promise rental returns.",
      },
    ],
  },

  {
    number: "12",
    title: "Renting Property",
    icon: Home,
    faqs: [
      {
        question: "Can I rent my property long-term?",
        answer:
          "Long-term rental can be an appropriate option for many properties. The rental agreement should clearly define the parties’ rights and obligations.",
      },
      {
        question: "Can I rent my villa short-term?",
        answer:
          "Short-term accommodation can be subject to Thailand’s hotel and other regulatory requirements. Owners should not assume that a villa can automatically be rented on a nightly basis.",
        help:
          "We can help investigate the intended rental model and coordinate appropriate professional advice.",
      },
      {
        question: "Can Tropical Roots find tenants?",
        answer:
          "Yes. We can market properties, communicate with prospective tenants, arrange viewings and help coordinate the rental process.",
      },
      {
        question: "How do you find the right tenant?",
        answer:
          "We focus on matching the tenant to the property rather than simply filling a vacancy. We consider the tenant’s requirements, rental period, budget and intended use.",
      },
      {
        question: "Can you manage my rental property?",
        answer:
          "Yes, where the required management service is agreed. Services can include property checks, tenant communication, maintenance coordination and general local support.",
      },
    ],
  },

  {
    number: "13",
    title: "Property Management",
    icon: Wrench,
    faqs: [
      {
        question: "What does property management include?",
        answer: "Depending on the service required:",
        bullets: [
          "Property inspections",
          "Cleaning",
          "Repairs",
          "Garden maintenance",
          "Pool maintenance",
          "Tenant coordination",
          "Utility coordination",
          "Contractor management",
          "Emergency assistance",
        ],
      },
      {
        question: "Can you manage my property while I live overseas?",
        answer:
          "Yes. This is one of the services we want Tropical Roots to be known for. You have one local point of contact who understands your property and can coordinate issues when you are not on the island.",
      },
      {
        question: "Can you check my property regularly?",
        answer:
          "Yes, if included in the agreed management service. We can inspect the property, identify issues and report them to you.",
      },
      {
        question: "Can you arrange repairs?",
        answer:
          "Yes. We can coordinate suitable local professionals for maintenance and repairs.",
      },
      {
        question: "Can you maintain gardens and pools?",
        answer:
          "Yes, through our property maintenance network.",
      },
      {
        question: "Can you prepare my property for rental?",
        answer:
          "Yes. We can coordinate cleaning, repairs, landscaping, furniture, presentation and marketing.",
      },
      {
        question: "Can you prepare my property for sale?",
        answer:
          "Yes. We can identify practical improvements that may improve presentation and buyer appeal.",
      },
    ],
  },

  {
    number: "14",
    title: "Construction & Renovation",
    icon: HardHat,
    faqs: [
      {
        question: "Can Tropical Roots help renovate my property?",
        answer:
          "Yes. We can assist with contractor sourcing, materials, coordination and project support.",
      },
      {
        question: "Can you build a villa?",
        answer:
          "We can provide construction assistance and coordinate appropriate contractors and professionals. We do not replace licensed architects, engineers or other specialists.",
      },
      {
        question: "Can you find contractors?",
        answer:
          "Yes. We can help source local contractors based on the requirements of the project.",
      },
      {
        question: "Can you source materials?",
        answer:
          "Yes. Where appropriate, we can assist with material and supplier coordination.",
      },
      {
        question: "Can you manage a construction project remotely?",
        answer:
          "We can provide local coordination and communication for owners who are not on the island. The scope of our involvement should be agreed before the project begins.",
      },
      {
        question: "Can you help with a topographic survey?",
        answer:
          "Yes, we can help coordinate appropriate surveying professionals where required.",
      },
      {
        question: "Can you help with building permits?",
        answer:
          "We can help coordinate the professionals and documentation required, but permits and technical compliance should be handled by the appropriate licensed professionals and authorities.",
      },
      {
        question: "Can you help renovate a property before selling?",
        answer:
          "Yes. We can assess the property’s presentation and help coordinate practical improvements.",
      },
    ],
  },

  {
    number: "15",
    title: "Living in Koh Phangan",
    icon: Users,
    faqs: [
      {
        question: "Is Koh Phangan suitable for families?",
        answer:
          "It can be, but families should consider schools, healthcare, transport, services and the location of the property carefully.",
      },
      {
        question: "Is Koh Phangan good for remote workers?",
        answer:
          "Many properties can suit remote working, but internet, electricity, workspace and location should be checked before choosing a property.",
      },
      {
        question: "What about schools?",
        answer:
          "Koh Phangan has a growing range of educational options. We can help you understand which areas are convenient for the options you are considering.",
      },
      {
        question: "What about healthcare?",
        answer:
          "Healthcare facilities are available on the island, but serious or specialised treatment may require travel off-island.",
      },
      {
        question: "Does buying property give me a visa?",
        answer:
          "No. Property ownership and immigration status are separate matters.",
        help:
          "We can help with the property side and direct you to appropriate immigration professionals for visa questions.",
      },
    ],
  },

  {
    number: "16",
    title: "Utilities & Everyday Property Issues",
    icon: Wrench,
    faqs: [
      {
        question: "Is electricity reliable?",
        answer:
          "Electricity availability and reliability should be assessed for the specific property.",
      },
      {
        question: "Does every property have mains water?",
        answer:
          "No. Water supply can vary by location and property.",
        help:
          "We encourage buyers to verify the actual water source, storage and running costs.",
      },
      {
        question: "What about internet?",
        answer:
          "Internet availability varies by location. For remote workers or businesses, we recommend checking the exact property rather than relying on general area information.",
      },
      {
        question: "Does road access matter?",
        answer:
          "Yes. Road quality, legal access, slope and emergency access can all affect the practicality and value of a property.",
      },
    ],
  },

  {
    number: "17",
    title: "Working With Tropical Roots",
    icon: Handshake,
    faqs: [
      {
        question: "What exactly does Tropical Roots do?",
        answer:
          "We provide property services across the property lifecycle:",
        bullets: [
          "Buy",
          "Sell",
          "Rent",
          "Manage",
          "Maintain",
          "Renovate",
          "Build",
        ],
      },
      {
        question: "Do you only work with buyers?",
        answer: "No. We work with:",
        bullets: [
          "Property owners",
          "Buyers",
          "Sellers",
          "Tenants",
          "Investors",
          "Developers",
          "Businesses",
        ],
      },
      {
        question: "What happens if I list my property with you?",
        answer: "We aim to:",
        bullets: [
          "Understand your property",
          "Prepare the listing",
          "Present it professionally",
          "Promote it",
          "Find suitable enquiries",
          "Arrange viewings",
          "Support negotiations",
          "Coordinate the transaction",
        ],
      },
      {
        question: "Do you provide maintenance after I sell or rent?",
        answer:
          "Yes. Where required, we can continue supporting owners through maintenance, management, renovation and construction services.",
      },
      {
        question: "Why should I choose Tropical Roots?",
        answer:
          "Because we want to build a relationship rather than complete a single transaction.",
        bullets: [
          "Efficient service.",
          "Professional work.",
          "Fair pricing.",
          "Clear communication.",
          "Long-term relationships.",
        ],
      },
      {
        question: "Do you provide legal or tax advice?",
        answer:
          "No. We provide property guidance and coordination and can introduce appropriate professionals for legal, tax, architectural, engineering and other specialist matters.",
      },
      {
        question: "Can I ask you a question that isn’t listed?",
        answer:
          "Absolutely. Every property is different. If you have a question about buying, selling, renting, maintaining or developing property in Koh Phangan, contact us and we’ll help you find the right answer.",
      },
    ],
  },
];

export default faqSections;
