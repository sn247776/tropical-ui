import { baseURL } from "./api";

export interface ContactData {
  name: string;
  email?: string;
  phone: string;
  enquiryType?: string;
  message: string;
}

export async function submitContactApi(
  data: ContactData
) {
  const response = await fetch(`${baseURL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      enquiryType: data.enquiryType,
      message: data.message,
    }),
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result?.message || "Failed to submit contact enquiry"
    );
  }

  return result;
}