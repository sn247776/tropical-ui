import { 
  FaBuilding, 
  FaHome, 
  FaLayerGroup, 
  FaHotel, 
  FaHouseUser, 
  FaTree,
  FaMapMarkedAlt,
  FaCouch,
  FaChair,
  FaBed,
  FaSwimmingPool,
  FaUmbrellaBeach,
  FaLeaf,
  FaCampground
} from 'react-icons/fa';
import { GiHouse } from 'react-icons/gi';


export const buyType = [
  { value: "studio", label: "Studio", icon: FaBed },
  { value: "apartment", label: "Apartment", icon: FaBuilding },
  { value: "condo", label: "Condo", icon: FaBuilding },
  { value: "penthouse", label: "Penthouse", icon: FaHotel },
  { value: "duplex", label: "Duplex", icon: FaLayerGroup },

  { value: "house", label: "House", icon: GiHouse },
  { value: "villa", label: "Villa", icon: FaHouseUser },
  { value: "pool villa", label: "Pool Villa", icon: FaSwimmingPool },
  { value: "beach house", label: "Beach House", icon: FaUmbrellaBeach },
  { value: "jungle house", label: "Jungle House", icon: FaTree },
  { value: "bamboo house", label: "Bamboo House", icon: FaLeaf },
  { value: "tiny house", label: "Tiny House", icon: FaHome },
  { value: "bungalow", label: "Bungalow", icon: FaCampground },

  { value: "land", label: "Land", icon: FaMapMarkedAlt },
];


export const rentType = [
  { value: "studio", label: "Studio", icon: FaBed },
  { value: "apartment", label: "Apartment", icon: FaBuilding },
  { value: "condo", label: "Condo", icon: FaBuilding },
  { value: "penthouse", label: "Penthouse", icon: FaHotel },
  { value: "duplex", label: "Duplex", icon: FaLayerGroup },

  { value: "house", label: "House", icon: GiHouse },
  { value: "villa", label: "Villa", icon: FaHouseUser },
  { value: "pool villa", label: "Pool Villa", icon: FaSwimmingPool },
  { value: "beach house", label: "Beach House", icon: FaUmbrellaBeach },
  { value: "jungle house", label: "Jungle House", icon: FaTree },
  { value: "bamboo house", label: "Bamboo House", icon: FaLeaf },
  { value: "tiny house", label: "Tiny House", icon: FaHome },
  { value: "bungalow", label: "Bungalow", icon: FaCampground },
];

export const leaseType = [
  { value: "land", label: "Land", icon: FaMapMarkedAlt },
];

export const furnishedStatuses = [
  { value: "furnished", label: "Furnished", icon: FaCouch},
  { value: "semi-furnished", label: "Semi-Furnished", icon: FaChair },
  { value: "unfurnished", label: "Unfurnished", icon: FaHome }
];

export const transactionTypes = [
  { value: "new booking", label: "New Booking"},
  { value: "resale", label: "Resale"},
];

export const constructionStatusList = [
  { value: "under construction", label: "Under Construction"},
  { value: "ready to move", label: "Ready to Move"},
];

export const bhkOptions = [
  { value: "1RK", label: "1 RK" },
  { value: "1", label: "1 BHK" },
  { value: "2", label: "2 BHK" },
  { value: "3", label: "3 BHK" },
  { value: "4", label: "4 BHK" },
  { value: "5", label: "5 BHK" },
  { value: "6", label: "6 BHK" },
  { value: "7", label: "7 BHK" },
  { value: "8", label: "8 BHK" },
  { value: "9", label: "9 BHK" },
]

export const areaUnits = [
  { value: "sq.m", label: "Square Meters" },
  { value: "sq.ft", label: "Square Feet" },
  { value: "acres", label: "Acres" },
  { value: "yards", label: "Yards" },
]
export const listingTypes = [
  { value: "rent", label: "Rent" },
  { value: "buy", label: "Buy" },
  {value:"lease", label: "Lease"}
]

export const balconySide = [
  { value: "front", label: "Front" },
  { value: "back", label: "Back" },
]

export const directions = [
  { value: "North", label: "North" },
  { value: "South", label: "South" },
  { value: "East", label: "East" },
  { value: "West", label: "West" },
  { value: "North-East", label: "North-East" },
  { value: "North-West", label: "North-West" },
  { value: "South-East", label: "South-East" },
  { value: "South-West", label: "South-West" },
]

export const profileTypes = [
  { value: "Family", label: "Family" },
  { value: "Bachelor Female", label: "Bachelor (Female)" },
  { value: "Bachelor Male", label: "Bachelor (Male)" },
  { value: "Bachelor Mix", label: "Bachelor (Mixed)" },
  { value: "Unmarried couple", label: "Unmarried Couple" },

]

export const rentalCondition = [
  { value: "TM30 Available", label: "TM30 Available" },
  { value: "Work Permit Address", label: "Work Permit Address" },
  { value: "Minimum Stay", label: "Minimum Stay" },
  { value: "Utilities Included", label: "Utilities Included" },
  { value: "Internet Included", label: "Internet Included" },
    { value: "Cleaning Included", label: "Cleaning Included" },
];

export const leadTypes = [
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
];

export const internetSpeedOptions = [
  { value: "100_mbps", label: "100+ Mbps" },
  { value: "300_mbps", label: "300+ Mbps" },
  { value: "500_mbps", label: "500+ Mbps" },
  { value: "1_gbps", label: "1 Gbps" },
];

export const essentialsOptions = [
  { value: "air_conditioning", label: "Air Conditioning" },
  { value: "hot_water", label: "Hot Water" },
  { value: "full_kitchen", label: "Full Kitchen" },
  { value: "kitchenette", label: "Kitchenette" },
  { value: "fast_wifi", label: "Fast Wi-Fi" },
  { value: "workspace", label: "Workspace" },
  { value: "washing_machine", label: "Washing Machine" },
  { value: "parking", label: "Parking" },
];

export const outdoorOptions = [
  { value: "balcony", label: "Balcony" },
  { value: "terrace", label: "Terrace" },
  { value: "garden", label: "Garden" },
  { value: "private_pool", label: "Private Pool" },
  { value: "shared_pool", label: "Shared Pool" },
];


export const wellnessOptions = [
  { value: "gym", label: "Gym" },
  { value: "sauna", label: "Sauna" },
  { value: "yoga_deck", label: "Yoga Deck" },
];

export const lifestyleOptions = [
  { value: "remote_work_friendly", label: "Remote Work Friendly" },
  { value: "family_friendly", label: "Family Friendly" },
  { value: "pet_friendly", label: "Pet Friendly" },
  { value: "quiet_area", label: "Quiet Area" },

  { value: "walk_to_beach", label: "Walk to Beach" },
  { value: "beachfront", label: "Beachfront" },

  { value: "walk_to_cafe", label: "Walk to Café" },
  { value: "walk_to_gym", label: "Walk to Gym" },
  { value: "walk_to_yoga", label: "Walk to Yoga" },
  { value: "walk_to_coworking", label: "Walk to Coworking" },

  { value: "walk_to_restaurants", label: "Walk to Restaurants" },
  { value: "walk_to_nightlife", label: "Walk to Nightlife" },
  { value: "walk_to_market", label: "Walk to Market" },
  { value: "walk_to_7eleven", label: "Walk to 7-Eleven" },

  { value: "sunset_view", label: "Sunset View" },
  { value: "sea_view", label: "Sea View" },
  { value: "mountain_view", label: "Mountain View" },
  { value: "jungle_view", label: "Jungle View" },

  { value: "gated_community", label: "Gated Community" },
];

export const additionalAmenities = [
  { value: "bbq_area", label: "BBQ Area" },
  { value: "outdoor_shower", label: "Outdoor Shower" },
  { value: "smart_tv", label: "Smart TV" },
  { value: "security", label: "24/7 Security" },
  { value: "gated_community", label: "Gated Community" },
];