import React from "react";

import {
  FaParking,
  FaWifi,
  FaPlug,
  FaFan,
  FaLightbulb,
  FaTable,
  FaSwimmer,
  FaDumbbell,
  FaShoppingBag,
  FaBusAlt,
  FaSchool,
  FaHospitalAlt,
  FaPizzaSlice,
  FaTree,
  FaCloudSun,
  FaFireAlt,
  FaUtensils,
  FaWarehouse,
  FaBoxOpen,
  FaSun,
  FaLeaf,
  FaCampground,
  FaUmbrellaBeach,
  FaSwimmingPool,
  FaRegPlusSquare,
} from "react-icons/fa";

import {
  GiWaterDrop,
  GiGasStove,
  GiWoodCabin,
  GiPrayerBeads,
  GiWeightLiftingUp,
  GiPlantRoots,
  GiDirectionSigns,
  GiWaterTank,
  GiWaterSplash,
} from "react-icons/gi";

import {
  MdBalcony,
  MdOutlineKitchen,
  MdOutlineAir,
  MdSecurity,
  MdMicrowave,
  MdOutlineMeetingRoom,
  MdTv,
  MdOutlineHouse,
  MdWorkspaces,
} from "react-icons/md";

import {
  TbAirConditioning,
  TbWashDry1,
  TbDeviceCctvFilled,
} from "react-icons/tb";

import {
  BiFridge,
  BiWater,
} from "react-icons/bi";

import { FaElevator } from "react-icons/fa6";
import { RiSofaLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

const iconMap: Record<string, React.ReactNode> = {
  // ========================
  // Essentials
  // ========================

  air_conditioning: <TbAirConditioning className="h-5 w-5" />,
  hot_water: <GiWaterDrop className="h-5 w-5" />,
  full_kitchen: <MdOutlineKitchen className="h-5 w-5" />,
  kitchenette: <MdOutlineKitchen className="h-5 w-5" />,
  fast_wifi: <FaWifi className="h-5 w-5" />,
  workspace: <MdWorkspaces className="h-5 w-5" />,
  washing_machine: <TbWashDry1 className="h-5 w-5" />,
  parking: <FaParking className="h-5 w-5" />,

  // ========================
  // Outdoor
  // ========================

  balcony: <MdBalcony className="h-5 w-5" />,
  terrace: <FaCloudSun className="h-5 w-5" />,
  garden: <GiPlantRoots className="h-5 w-5" />,
  private_pool: <FaSwimmingPool className="h-5 w-5" />,
  shared_pool: <FaSwimmingPool className="h-5 w-5" />,

  // ========================
  // Wellness
  // ========================

  gym: <GiWeightLiftingUp className="h-5 w-5" />,
  sauna: <FaFireAlt className="h-5 w-5" />,
  yoga_deck: <FaLeaf className="h-5 w-5" />,

  // ========================
  // Lifestyle
  // ========================

  remote_work_friendly: <MdWorkspaces className="h-5 w-5" />,
  family_friendly: <IoIosPeople className="h-5 w-5" />,
  pet_friendly: <FaTree className="h-5 w-5" />,
  quiet_area: <FaTree className="h-5 w-5" />,

  walk_to_beach: <FaUmbrellaBeach className="h-5 w-5" />,
  beachfront: <FaUmbrellaBeach className="h-5 w-5" />,

  walk_to_cafe: <FaUtensils className="h-5 w-5" />,
  walk_to_gym: <FaDumbbell className="h-5 w-5" />,
  walk_to_yoga: <FaLeaf className="h-5 w-5" />,
  walk_to_coworking: <MdWorkspaces className="h-5 w-5" />,

  walk_to_restaurants: <FaPizzaSlice className="h-5 w-5" />,
  walk_to_nightlife: <FaCloudSun className="h-5 w-5" />,
  walk_to_market: <FaShoppingBag className="h-5 w-5" />,
  walk_to_7eleven: <FaShoppingBag className="h-5 w-5" />,

  sunset_view: <FaSun className="h-5 w-5" />,
  sea_view: <BiWater className="h-5 w-5" />,
  mountain_view: <FaTree className="h-5 w-5" />,
  jungle_view: <FaLeaf className="h-5 w-5" />,

  gated_community: <MdSecurity className="h-5 w-5" />,

  // ========================
  // Amenities
  // ========================

  bbq_area: <FaFireAlt className="h-5 w-5" />,
  outdoor_shower: <GiWaterSplash className="h-5 w-5" />,
  smart_tv: <MdTv className="h-5 w-5" />,
  security: <MdSecurity className="h-5 w-5" />,

  // ========================
  // Rental Conditions
  // ========================

  tm30_available: <MdSecurity className="h-5 w-5" />,
  work_permit_address: <MdOutlineHouse className="h-5 w-5" />,
  minimum_stay: <FaCampground className="h-5 w-5" />,
  utilities_included: <FaPlug className="h-5 w-5" />,
  internet_included: <FaWifi className="h-5 w-5" />,
  cleaning_included: <FaLightbulb className="h-5 w-5" />,

  // ========================
  // Internet
  // ========================

  "100_mbps": <FaWifi className="h-5 w-5" />,
  "300_mbps": <FaWifi className="h-5 w-5" />,
  "500_mbps": <FaWifi className="h-5 w-5" />,
  "1_gbps": <FaWifi className="h-5 w-5" />,

  // ========================
  // Legacy Support
  // ========================

  electricity_supply: <FaPlug className="h-5 w-5" />,
  power_backup: <FaPlug className="h-5 w-5" />,
  inverter: <FaPlug className="h-5 w-5" />,
  cctv: <TbDeviceCctvFilled className="h-5 w-5" />,
  lift: <FaElevator className="h-5 w-5" />,
  water_supply: <BiWater className="h-5 w-5" />,
  gas_stove: <GiGasStove className="h-5 w-5" />,
  microwave: <MdMicrowave className="h-5 w-5" />,
  oven: <MdMicrowave className="h-5 w-5" />,
  fridge: <BiFridge className="h-5 w-5" />,
  refrigerator: <BiFridge className="h-5 w-5" />,
  chimney: <MdOutlineAir className="h-5 w-5" />,
  exhaust_fan: <MdOutlineAir className="h-5 w-5" />,
  fan: <FaFan className="h-5 w-5" />,
  sofa: <RiSofaLine className="h-5 w-5" />,
  dining_table: <FaTable className="h-5 w-5" />,
  wardrobe: <FaWarehouse className="h-5 w-5" />,
  cupboard: <GiWoodCabin className="h-5 w-5" />,
  bookshelf: <FaBoxOpen className="h-5 w-5" />,
  lights: <FaLightbulb className="h-5 w-5" />,
  prayer_room: <GiPrayerBeads className="h-5 w-5" />,
  servant_room: <MdOutlineMeetingRoom className="h-5 w-5" />,
  school: <FaSchool className="h-5 w-5" />,
  hospital: <FaHospitalAlt className="h-5 w-5" />,
  market: <FaShoppingBag className="h-5 w-5" />,
  restaurant: <FaPizzaSlice className="h-5 w-5" />,
  cafe: <FaUtensils className="h-5 w-5" />,
  park: <FaTree className="h-5 w-5" />,
  playground: <FaDumbbell className="h-5 w-5" />,
  rain_water_harvesting: <GiWaterSplash className="h-5 w-5" />,
  water_storage: <GiWaterTank className="h-5 w-5" />,
  
};

export const renderIcon = (value: string) => {
  if (!value) {
    return <FaRegPlusSquare className="h-5 w-5" />;
  }

  const key = value.toLowerCase().trim();

  if (iconMap[key]) {
    return iconMap[key];
  }

  const match = Object.keys(iconMap).find(
    (k) => key.includes(k) || k.includes(key)
  );

  return match
    ? iconMap[match]
    : <FaRegPlusSquare className="h-5 w-5" />;
};