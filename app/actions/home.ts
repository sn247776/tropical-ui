
"use server";

import { getLocationsApi } from "../api/home";


export async function getLocationsAction() {
  try {
    const response = await getLocationsApi();

    return {
      success: true,
      data: response?.data ?? [],
    };
  } catch (error: any) {
    console.error("Get locations error:", error);

    return {
      success: false,
      data: [],
      message:
        error?.message || "Failed to fetch locations.",
    };
  }
}