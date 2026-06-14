import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

function UniversalHero({ page, img }: any) {
  return (
    <div
      className="relative sm:h-[400px] h-[250px] overflow-hidden text-white bg-primary"
      style={{ clipPath: "ellipse(150% 100% at 50% 0%)" }}
    >
      {/* <div className="bg-black/50 w-full h-full absolute -z-10"></div> */}
      <div className="flex flex-col items-center h-full justify-between">
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

      {/* <img
        src={img}
        alt="img"
        className="absolute w-full h-full object-cover object-center -z-20 top-0 left-0 i"
      /> */}
    </div>
  );
}

export default UniversalHero;
