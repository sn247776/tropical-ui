import { baseURL } from "./api";

export interface BookVisitData {
  visitDate: Date;
  timeSlot: string;
  notes?: string;
  propertyCodes: string[];
  token: string;
}

export async function bookVisitApi(data: BookVisitData) {
  const response = await fetch(`${baseURL}/visits`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.token}`,
    },
    body: JSON.stringify({
      visitDate: data.visitDate,
      timeSlot: data.timeSlot,
      notes: data.notes,
      propertyCodes: data.propertyCodes,
    }),
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.message || "Failed to book visit"
    );
  }

  return result;
}