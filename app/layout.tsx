import type { Metadata } from "next";
import { basicInfo } from "@/stores/basic-info";
import "./main.css";
import "./globals.css";
import "./range.css";
import { Toaster } from "@/components/ui/sonner"


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
    
      <body className="min-h-full flex flex-col">
          <Toaster />
        {children}</body>
    </html>
  );
}



