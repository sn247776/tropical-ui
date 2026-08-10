import { baseURL } from "./api";

export interface ClientData {
  fullName: string;
  number: string;
  profession?: string;
}

export async function createClient(data: ClientData) {
  try {
    const response = await fetch(`${baseURL}/client/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result?.message || "Failed to create client"
      );
    }

    return result;
  } catch (error) {
    console.error("Create client error:", error);
    throw error;
  }
}