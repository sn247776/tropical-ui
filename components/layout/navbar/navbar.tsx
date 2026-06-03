'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { navLinks } from '../nav-links';
import LogoImg from "@/assets/LOGO.png"
import { Calendar } from 'lucide-react';
import MobNav from './mobile-nav';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
          <img src={LogoImg?.src} alt='logo' className='h-10'/>
          </Link>
        </div>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm uppercase font-semibold hover:text-primary ${
                isActive(href) ? 'text-primary' : 'text-foreground'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Link href={'/visits'}>
                    <Button variant="outline" >
            <Calendar />
            Visits
          </Button>
          </Link>
          <Button  asChild className="hidden lg:flex">
            <Link href="/spaces">Browse Spaces</Link>
          </Button>
          <MobNav/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
