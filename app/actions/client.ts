"use server";

import { createClient } from "@/app/api/client";
import type { ClientData } from "@/app/api/client";

export async function createClientAction(data: ClientData) {
  try {
    const response = await createClient(data);

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Failed to create client",
    };
  }
}