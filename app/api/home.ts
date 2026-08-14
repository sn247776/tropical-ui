import { baseURL } from "./api";

export async function fetchHomeInfo() {
  try {
    const response = await fetch(`${baseURL}/featured-spaces`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

export async function getLocationsApi() {
  const response = await fetch(
    `${baseURL}/locations/areas/all`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch locations");
  }

  return response.json();
}