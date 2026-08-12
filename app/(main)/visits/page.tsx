import { cookies } from "next/headers";

import { baseURL } from "@/app/api/api";
import VisitList from "./visit-list";
import BookVisits from "./forms/book-visit";
import BookedVisits from "./booked-visits";

export default async function VisitPage() {
  const cookieStore = await cookies();

  // Property codes used for booking
  const visitCookie = cookieStore.get("visitIds");
  const codes = visitCookie?.value ?? "";

  // Client JWT
  const clientToken = cookieStore.get("clientToken")?.value;

  let properties = [];
  let bookedVisits = [];

  // Get selected properties
  if (codes) {
    const res = await fetch(
      `${baseURL}/code/multi/${codes}`,
      {
        cache: "no-store",
      }
    );

    if (res.ok) {
      const json = await res.json();
      properties = json.data || [];
    }
  }

  // Get already booked visits
  if (clientToken) {
    const res = await fetch(
      `${baseURL}/visits/my`,
      {
        cache: "no-store",
        headers: {
          Authorization: `Bearer ${clientToken}`,
        },
      }
    );

    if (res.ok) {
      const json = await res.json();
      bookedVisits = json.data || [];
    }
  }
  
  return (
    <div className="container mx-auto px-4 py-8">

      {/* BOOK VISIT */}
      <section>
        <h1 className="text-3xl font-bold mb-6">
          Book a Visit 
        </h1>

        <BookVisits disabled={codes.length === 0} />

        {properties.length > 0 && (
          <div className="mt-8">
            <VisitList properties={properties} />
          </div>
        )}
      </section>

      {/* BOOKED VISITS */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          My Booked Visits
        </h2>

        <BookedVisits visits={bookedVisits} />
      </section>

    </div>
  );
}