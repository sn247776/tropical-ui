export const propertyTypes = [
  { label: "All Types", value: "all" },
  { label: "Apartment", value: "apartment" },
  { label: "Flat", value: "flat" },
  { label: "Floor", value: "floor" },
  { label: "Plot", value: "plot" },
  { label: "Commercial", value: "commercial" },
];

export const listingTypes = [
  { label: "All Listing Types", value: "all" },
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
    { label: " Daily Rental", value: "day" },
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

export const rentPriceRanges = [
  { label: "All", value: "all" },
  { label: "Below THB 20,000", value: "0-20000" },
  { label: "THB 20,000 - THB 50,000", value: "20000-50000" },
  { label: "THB 50,000 - THB 1,00,000", value: "50000-100000" },
  { label: "THB 1,00,000 - THB 2,50,000", value: "100000-250000" },
  { label: "THB 2,50,000 - THB 5,00,000", value: "250000-500000" },
  { label: "THB 5,00,000 - THB 10,00,000", value: "500000-1000000" },
  { label: "Above THB 10,00,000", value: "1000000-" },
];

export const buyPriceRanges = [
  { label: "All", value: "all" },
  { label: "Below THB 2,00,00,000", value: "0-20000000" },
  { label: "THB 2,00,00,000 - THB 3,00,00,000", value: "20000000-30000000" },
  { label: "THB 3,00,00,000 - THB 5,00,00,000", value: "30000000-50000000" },
  { label: "Above THB 5,00,00,000", value: "50000000-" },
];


export const allPriceRanges = [
  { label: "All", value: "all" },
  { label: "Below THB 20,000", value: "0-20000" },
  { label: "THB 20,000 - THB 50,000", value: "20000-50000" },
  { label: "THB 50,000 - THB 1,00,000", value: "50000-100000" },
  { label: "THB 1,00,000 - THB 2,50,000", value: "100000-250000" },
  { label: "THB 2,50,000 - THB 5,00,000", value: "250000-500000" },
  { label: "THB 5,00,000 - THB 10,00,000", value: "500000-1000000" },
  { label: "THB 2,00,00,000 - THB 3,00,00,000", value: "20000000-30000000" },
  { label: "THB 3,00,00,000 - THB 5,00,00,000", value: "30000000-50000000" },
  { label: "Above THB 5,00,00,000", value: "50000000-" },
];

export const locationsData = {
  "Koh Phangan": [
    "Hin Kong",
    "Sri Thanu",
    "Haad Yao",
    "Haad Salad",
    "Thong Sala",
    "Chaloklum",
    "Baan Tai",
    "Haad Rin",
    "Mae Haad",
    "Wok Tum",
  ],

  "Koh Samui": [
    "Chaweng",
    "Lamai",
    "Bophut",
    "Maenam",
    "Bangrak",
    "Choeng Mon",
    "Plai Laem",
    "Nathon",
  ],

  "Phuket": [
    "Bang Tao",
    "Kamala",
    "Patong",
    "Kata",
    "Karon",
    "Rawai",
    "Nai Harn",
  ],
}