import { 
  FaBuilding, 
  FaHome, 
  FaLayerGroup, 
  FaHotel, 
  FaHouseUser, 
  FaTree,
  FaMapMarkedAlt,
  FaBed,
  FaSwimmingPool,
  FaUmbrellaBeach,
  FaLeaf,
  FaCampground
} from 'react-icons/fa';
import { GiHouse } from 'react-icons/gi';

export const buyType = [
  { value: "studio", label: "Studio", icon: FaBed },
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



export const furnishedStatus = [
  { label: "All Types", value: "all" },
  { label: "Furnished", value: "furnished" },
  { label: "Semi Furnished", value: "semi-furnished" },
  { label: "Unfurnished", value: "unfurnished" },
];

export const bhkRent = [
  { label: "Any BHK", value: "all" },
  { label: "1 RK", value: "1 RK" },
  { label: "1 BHK", value: "1" },
  { label: "2 BHK", value: "2" },
  { label: "3 BHK", value: "3" },
  { label: "4 BHK", value: "4" },
  { label: "4+ BHK", value: "5" },
];

export const bhkBuy = [
  { label: "Any BHK", value: "all" },
  { label: "2 BHK", value: "2" },
  { label: "3 BHK", value: "3" },
  { label: "4 BHK", value: "4" },
  { label: "4+ BHK", value: "5" },
];


export const leaseTypes = [
  { label: "Any Lease Type", value: "all" },
  { label: "Monthly", value: "monthly" },
  { label: "Quarterly", value: "quarterly" },
  { label: "Yearly", value: "yearly" },
  { label: "Flexible", value: "flexible" },
];


export const rentRange = {
  min: 20000,
  max: 1000000,
  steps:10000,
};

export const buyRange = {
  min: 20000000,
  max: 500000000,
  steps:10000000,
};

export const listingTypes = [
  {
    label: "Rent",
    value: "rent",
  },
  {
    label: "Buy",
    value: "buy",
  },
  {
    label: "Lease",
    value: "lease",
  },
];

export const thbRentPriceRanges = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Below ฿20,000",
    value: "0-20000",
  },
  {
    label: "฿20,000 - ฿50,000",
    value: "20000-50000",
  },
  {
    label: "฿50,000 - ฿1,00,000",
    value: "50000-100000",
  },
  {
    label: "฿1,00,000 - ฿2,50,000",
    value: "100000-250000",
  },
  {
    label: "฿2,50,000 - ฿5,00,000",
    value: "250000-500000",
  },
  {
    label: "฿5,00,000 - ฿10,00,000",
    value: "500000-1000000",
  },
  {
    label: "Above ฿10,00,000",
    value: "1000000-",
  },
];

export const thbBuyPriceRanges = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Below ฿2,00,00,000",
    value: "0-20000000",
  },
  {
    label: "฿2,00,00,000 - ฿3,00,00,000",
    value: "20000000-30000000",
  },
  {
    label: "฿3,00,00,000 - ฿5,00,00,000",
    value: "30000000-50000000",
  },
  {
    label: "Above ฿5,00,00,000",
    value: "50000000-",
  },
];

export const thbLeasePriceRanges = [
  ...thbRentPriceRanges,
];

export const thbAllPriceRanges = [
  ...thbRentPriceRanges.slice(0, -1),
  {
    label: "฿2,00,00,000 - ฿3,00,00,000",
    value: "20000000-30000000",
  },
  {
    label: "฿3,00,00,000 - ฿5,00,00,000",
    value: "30000000-50000000",
  },
  {
    label: "Above ฿5,00,00,000",
    value: "50000000-",
  },
];