import type { Metadata } from "next";
import { basicInfo } from "@/stores/basic-info";
import "./globals.css";

export const metadata: Metadata = {
  title: basicInfo?.name || 'Tropical Roots Realty',
  description: basicInfo?.tagline,
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
