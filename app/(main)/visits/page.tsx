import { cookies } from "next/headers";
import VisitList from "./visit-list";
import { baseURL } from "@/app/api/api";
import { Button } from "@/components/ui/button";

export default async function VisitPage() {
  const cookieStore = await cookies();

  const cookie = cookieStore.get("visitIds");
  const codes = cookie?.value ?? "";

  let properties = [];

  if (codes) {
    const res = await fetch(
      `${baseURL}/code/multi/${codes}`,
      { cache: "no-store" }
    );

    const json = await res.json();
    properties = json.data;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">All Visits</h1>

      <VisitList properties={properties} />

            <div className="my-default">
       <Button disabled className="w-full"> Book Visit</Button>
      </div>
    </div>
  );
}