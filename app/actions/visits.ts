"use server";

import { cookies } from "next/headers";
import { bookVisitApi } from "@/app/api/visits";

export async function bookVisitAction(data: {
  visitDate: string;
  timeSlot: string;
  notes?: string;
  propertyCodes: string[];
}) {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("clientToken")?.value;

    if (!token) {
      return {
        success: false,
        message: "Client authentication required.",
      };
    }

    const response = await bookVisitApi({
      ...data,
      token,
      visitDate: new Date(data.visitDate),
    });

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    console.error("Book visit error:", error);

    return {
      success: false,
      message:
        error?.message || "Failed to book visit.",
    };
  }
}