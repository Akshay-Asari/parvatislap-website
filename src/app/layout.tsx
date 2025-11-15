import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "../../styles/globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { StructuredData } from "@/components/seo/StructuredData";
import { generateMetadata, generateOrganizationSchema } from "@/lib/seo";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { generateReviewSchema } from "@/data/reviews";

/**
 * Font configurations using next/font for optimal loading
 */
const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Root metadata for SEO
 * Using centralized SEO configuration with Open Graph, Twitter Cards, and structured data
 */
export const metadata: Metadata = generateMetadata({});

/**
 * Root layout component (Server Component)
 * Provides the HTML shell and delegates client-side logic to ClientLayout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const reviewSchema = generateReviewSchema();

  return (
    <html lang="en" className={`theme-light ${poppins.variable} ${inter.variable}`}>
      <head>
        {/* Organization Structured Data */}
        <StructuredData data={organizationSchema} />
        
        {/* Review Structured Data */}
        <StructuredData data={reviewSchema} />
        
        {/* Google Analytics */}
        <GoogleAnalytics />
      </head>
      <body className="font-system bg-primary text-primary transition-all duration-300">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
