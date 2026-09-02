"use server";

import {
  submitPropertyLeadApi,
  PropertyLeadData,
} from "@/app/api/property-lead";

export async function submitPropertyLeadAction(
  data: PropertyLeadData
) {
  try {
    const response =
      await submitPropertyLeadApi(data);

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    console.error(
      "Submit property lead error:",
      error
    );

    return {
      success: false,
      message:
        error?.message ||
        "Failed to submit property information.",
    };
  }
}

