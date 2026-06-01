"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Logo from "@/assets/LOGO.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "../nav-links";
import { basicInfo } from "@/stores/basic-info";
import { FaWhatsapp } from "react-icons/fa";



function MobNav() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="w-[300px]">
          <div className="flex flex-col gap-default">
            <Link href={"/"} >
              <img
                src={Logo.src}
                alt="logo"
                className="h-12 filter dark:invert dark:brightness-0"
              />
            </Link>

            <div className="flex flex-col uppercase font-semibold ">
              {navLinks.map((route) => (
                <SheetClose asChild key={route.href}>
                  <Link  href={route.href}>
                    <div
                      className={cn(
                        "flex items-center flex-1 hover:text-primary duration-300 p-items border-b",
                        pathname === route.href ? "text-primary" : " "
                      )}
                    >
                      {route.label}
                    </div>
                  </Link>
                  </SheetClose>
              ))}
            </div>

            <div className="flex flex-col gap-8 text-primary">
              <div className="flex items-center gap-items">
                <Phone size={35} />

                <div>
                  <p className="font-semibold text-sm">Call now</p>
                  <a href={"tel:" + basicInfo?.phones[0]} className="text-xs">
                    {basicInfo?.phones[0]}
                  </a>
                </div>
              </div>

              <Link href={basicInfo?.socialMedia?.whatsapp} className="flex items-center gap-items">
                <FaWhatsapp size={35} />

                <div>
                  <p className="font-semibold text-sm">Chat with us</p>
                  <a className="text-xs">{basicInfo?.phones[0]}</a>
                </div>
              </Link>

              <div className="flex items-center gap-items">
                <MapPin size={35} />

                <div>
                  <p className="font-semibold text-sm">Address</p>
                  <p className="text-xs">{basicInfo?.address}</p>
                  <p className="text-xs">{basicInfo?.location}</p>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobNav;