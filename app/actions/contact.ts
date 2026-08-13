"use server";

import { submitContactApi } from "@/app/api/contact";

export async function submitContactAction(data: {
  name: string;
  email: string;
  phone?: string;
  enquiryType: string;
  message: string;
}) {
  try {
    const response = await submitContactApi(data);

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    console.error("Submit contact error:", error);

    return {
      success: false,
      message:
        error?.message ||
        "Failed to submit contact enquiry.",
    };
  }
}