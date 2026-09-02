
import { baseURL } from "./api";

export interface PropertyLeadData {
  listingType: "rent" | "buy" | "lease";
  propertyType: string;
  location: string;
  bedrooms?: number;
  landSize?: number;
  expectedPrice: number;
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

export async function submitPropertyLeadApi(
  data: PropertyLeadData
) {
  const response = await fetch(
    `${baseURL}/property-leads`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listingType: data.listingType,
        propertyType: data.propertyType,
        location: data.location,
        bedrooms: data.bedrooms,
        landSize: data.landSize,
        expectedPrice: data.expectedPrice,
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      }),
      cache: "no-store",
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.message ||
        "Failed to submit property information."
    );
  }

  return result;
}

