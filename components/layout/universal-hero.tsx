import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

function UniversalHero({ page }: any) {
  return (
    <div
      className="relative sm:h-[350px] h-[220px] overflow-hidden text-white 
  bg-linear-to-r from-primary via-primary/90 to-primary/50 py-20"
    >

      <div className="flex flex-col items-center h-full justify-between gap-4">
        <div></div>
        <h1 className="sm:text-5xl text-4xl font-semibold">{page}</h1>
        <div className="flex gap-2 text-sm font-medium pb-default uppercase text-white/80 items-center ">
          <Link href={"/"} className="hover:text-white duration-300">
            Home
          </Link>
          <ChevronRight size={15} />
          <p className="text-white font-bold">{page}</p>
        </div>
      </div>


    </div>
  );
}

export default UniversalHero;
