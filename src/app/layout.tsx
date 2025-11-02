import type { Metadata } from "next";
import "../../styles/globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

/**
 * Root metadata for SEO
 * These will be enhanced with structured data and Open Graph tags
 */
export const metadata: Metadata = {
  title: "Parvati's Lap — Luxury Himalayan Hostel & Villa in Kasol",
  description: "Experience the best hostel and villa stay in Kasol, Himachal Pradesh. Located in Lapas Village with stunning mountain views, our property offers luxury accommodation, cafe, and access to trekking trails.",
  keywords: ["Kasol hostel", "Kasol villa", "Parvati Valley", "Himachal Pradesh", "mountain resort", "Kheerganga trek", "Lapas Village"],
};

/**
 * Root layout component
 * Wraps all pages with consistent header and footer
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-light">
      <body className="font-system bg-primary text-primary transition-all duration-300">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
