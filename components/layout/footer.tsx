import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { navLinks, quickLinks } from './nav-links';
import { basicInfo } from "@/stores/basic-info";

export default function Footer() {
  return (
    <footer className="bg-[#cbded358] text-black md:pt-sections pt-middel">
      <div className="container mx-auto grid sm:grid-cols-[repeat(2,250px)] xl:grid-cols-[repeat(4,250px)] justify-between md:gap-sections gap-items">

        {/* About Section */}
        <div>
          <h2 className="text-primary text-2xl font-semibold">About</h2>
          <p className="my-middel">
            {basicInfo?.name} is a comprehensive real estate management platform based in Gurugram, offering tech driven solutions for leasing, selling, and managing properties from possession to post-sale.
          </p>

          <div className="flex gap-items">
            <Link href={basicInfo?.socialMedia?.facebook} className="text-primary hover:opacity-70 duration-300" target="_blank"><FaFacebookSquare size={30} /></Link>
            <Link href={basicInfo?.socialMedia?.instagram} className="text-primary hover:opacity-70 duration-300" target="_blank"><FaInstagramSquare size={30} /></Link>
            <Link href={basicInfo?.socialMedia?.whatsapp} className="text-primary hover:opacity-70 duration-300" target="_blank"><FaWhatsappSquare size={30} /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-primary text-2xl font-semibold">Quick Links</h2>
          <div className="my-middel flex flex-col gap-2">
            {quickLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="hover:text-primary duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-primary text-2xl font-semibold">Navigation</h2>
          <div className="my-middel flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="hover:text-primary duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact / Free Estimate */}
        <div>
          <h2 className="text-primary text-2xl font-semibold">Contact Us</h2>
          <div className="my-middel">
            <p className="sm:mb-middel mb-items font-semibold no-underline">Call Us: <span className="text-primary no-underline">{basicInfo?.phones[0]}</span></p>
            <p className="no-underline">Email: <span className="text-primary no-underline">{basicInfo?.emails[0]}</span> </p>
            <p className="mt-2">
              For consultations, site visits, or property assistance, feel free to reach out. We're here to simplify your real estate journey.
            </p>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-muted-foreground mt-middel py-middel text-center">
        &copy; {new Date().getFullYear()} {basicInfo?.name}. All rights reserved.
      </div>
    </footer>
  );
}
