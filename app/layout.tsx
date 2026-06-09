import type { Metadata } from "next";
import { basicInfo } from "@/stores/basic-info";
import "./main.css";
import "./globals.css";
import { Inter, Poppins } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner"


export const metadata: Metadata = {
  title: basicInfo?.name || 'Tropical Roots Realty',
  description: basicInfo?.tagline,
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-display',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <Toaster />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}



