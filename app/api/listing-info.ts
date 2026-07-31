import { baseURL } from "./api";

export async function fetchPropertyInfo(
  listingType: string,
  slug: string
) {
  try {
    const response = await fetch(
      `${baseURL}/listing/${listingType}/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch property");
    }

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}