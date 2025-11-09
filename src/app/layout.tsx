import type { Metadata } from "next";
import "../../styles/globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { StructuredData } from "@/components/seo/StructuredData";
import { generateMetadata, generateOrganizationSchema } from "@/lib/seo";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { generateReviewSchema } from "@/data/reviews";

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
    <html lang="en" className="theme-light">
      <head>
        {/* Google Fonts - Poppins & Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        
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
