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