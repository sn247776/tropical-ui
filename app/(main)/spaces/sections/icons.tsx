import {
  FaParking, FaUserShield, FaWifi, FaPowerOff, FaPlug,
  FaFan, FaLightbulb, FaTable, FaSwimmer, FaDumbbell, FaShoppingBag,
  FaBusAlt, FaSchool, FaHospitalAlt, FaPizzaSlice, FaTree, FaCloudSun,
  FaFireAlt, FaUtensils, FaWarehouse, FaBoxOpen,
  FaRegPlusSquare, FaSun,
} from 'react-icons/fa';
import {
  GiWaterDrop, GiGasStove, GiWoodCabin, GiPrayerBeads,
  GiWeightLiftingUp, GiPlantRoots, GiDirectionSigns,
  GiWaterTank,
  GiWaterSplash
} from 'react-icons/gi';
import {
  MdBalcony, MdOutlineKitchen, MdOutlineAir, MdSecurity,
  MdMicrowave, MdOutlineMeetingRoom, MdTv, MdOutlineHouse
} from 'react-icons/md';
import {
  TbAirConditioning, TbWashDry1, TbDeviceCctvFilled
} from 'react-icons/tb';
import {
  BiFridge, BiWater
} from 'react-icons/bi';
import { FaElevator } from 'react-icons/fa6';
import { RiSofaLine } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

export const renderIcon = (icon: string) => {
  const lowerCaseIcon = icon.toLowerCase().trim();

  const iconMap: Record<string, React.ReactNode> = {
    // Existing icons
    "electricity supply": <FaPlug className="h-5 w-5" />,
    "parking": <FaParking className="h-5 w-5" />,
    "ample reserved parking": <FaParking className="h-5 w-5" />,
    "lift": <FaElevator className="h-5 w-5" />,
    "ro": <GiWaterDrop className="h-5 w-5" />,
    "water supply": <BiWater className="h-5 w-5" />,
    "power backup": <FaPowerOff className="h-5 w-5" />,
    "inverter": <FaPlug className="h-5 w-5" />,
    "cctv": <TbDeviceCctvFilled className="h-5 w-5" />,
    "wifi": <FaWifi className="h-5 w-5" />,
    "security": <MdSecurity className="h-5 w-5" />,
    "secured gated community": <MdSecurity className="h-5 w-5" />,
    "secured gated": <MdSecurity className="h-5 w-5" />,
    "ac": <TbAirConditioning className="h-5 w-5" />,
    "acs": <TbAirConditioning className="h-5 w-5" />,
    "12 acs": <TbAirConditioning className="h-5 w-5" />,
    "air conditioner": <TbAirConditioning className="h-5 w-5" />,
    "fan": <FaFan className="h-5 w-5" />,
    "fans": <FaFan className="h-5 w-5" />,
    "geyser": <FaFireAlt className="h-5 w-5" />,
    "geysers": <FaFireAlt className="h-5 w-5" />,
    "washing machine": <TbWashDry1 className="h-5 w-5" />,
    "fridge": <BiFridge className="h-5 w-5" />,
    "refrigerator": <BiFridge className="h-5 w-5" />,
    "gas stove": <GiGasStove className="h-5 w-5" />,
    "oven": <MdMicrowave className="h-5 w-5" />,
    "microwave": <MdMicrowave className="h-5 w-5" />,
    "chimney": <MdOutlineAir className="h-5 w-5" />,
    "exhaust fan": <MdOutlineAir className="h-5 w-5" />,
    "sofa set": <RiSofaLine className="h-5 w-5" />,
    "sofa": <RiSofaLine className="h-5 w-5" />,
    "dining table": <FaTable className="h-5 w-5" />,
    "dining table & chairs": <FaTable className="h-5 w-5" />,
    "kitchen": <MdOutlineKitchen className="h-5 w-5" />,
    "wardrobe": <FaWarehouse className="h-5 w-5" />,
    "cupboard": <GiWoodCabin className="h-5 w-5" />,
    "study table": <FaTable className="h-5 w-5" />,
    "bookshelf": <FaBoxOpen className="h-5 w-5" />,
    "lights": <FaLightbulb className="h-5 w-5" />,
    "light": <FaLightbulb className="h-5 w-5" />,
    "chandelier": <FaLightbulb className="h-5 w-5" />,
    "led lights": <FaLightbulb className="h-5 w-5" />,
    "care taker": <FaUserShield className="h-5 w-5" />,
    "gym": <GiWeightLiftingUp className="h-5 w-5" />,
    "swimming pool": <FaSwimmer className="h-5 w-5" />,
    "garden": <GiPlantRoots className="h-5 w-5" />,
    "mini garden": <GiPlantRoots className="h-5 w-5" />,
    "balcony": <MdBalcony className="h-5 w-5" />,
    "terrace": <FaCloudSun className="h-5 w-5" />,
    "prayer room": <GiPrayerBeads className="h-5 w-5" />,
    "servant room": <MdOutlineMeetingRoom className="h-5 w-5" />,
    "market": <FaShoppingBag className="h-5 w-5" />,
    "supermarket": <FaShoppingBag className="h-5 w-5" />,
    "metro": <FaBusAlt className="h-5 w-5" />,
    "bus stop": <FaBusAlt className="h-5 w-5" />,
    "school": <FaSchool className="h-5 w-5" />,
    "hospital": <FaHospitalAlt className="h-5 w-5" />,
    "restaurant": <FaPizzaSlice className="h-5 w-5" />,
    "cafe": <FaUtensils className="h-5 w-5" />,
    "park": <FaTree className="h-5 w-5" />,
    "playground": <FaDumbbell className="h-5 w-5" />,
    "rain water harvesting": <GiWaterSplash className="h-5 w-5" />,
    "water storage": <GiWaterTank className="h-5 w-5" />,
    
    // New icons for your additional terms
    "west facing": <FaSun className="h-5 w-5" />,
    "surrounding big plots": <MdOutlineHouse className="h-5 w-5" />,
    "vastu perfect": <GiDirectionSigns className="h-5 w-5" />,
    "bespoke designer interiors": <IoIosPeople className="h-5 w-5" />,
    "tv lounge": <MdTv className="h-5 w-5" />,
    "bhk in basement": <MdOutlineHouse className="h-5 w-5" />,
    "pantry": <MdOutlineKitchen className="h-5 w-5" />,


    
  };

  // First try exact match
  if (iconMap[lowerCaseIcon]) {
    return iconMap[lowerCaseIcon];
  }

  // If no exact match, try to find a partial match
  const partialMatches = Object.keys(iconMap).filter(key => 
    lowerCaseIcon.includes(key.toLowerCase())
  );

  if (partialMatches.length > 0) {
    // Return the icon for the longest matching key (most specific match)
    const bestMatch = partialMatches.reduce((a, b) => a.length > b.length ? a : b);
    return iconMap[bestMatch];
  }

  // Default icon if no match found
  return <FaRegPlusSquare className="h-5 w-5" />;
};