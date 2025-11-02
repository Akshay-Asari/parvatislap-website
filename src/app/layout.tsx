import type { Metadata } from "next";
import "../../styles/globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { StructuredData } from "@/components/seo/StructuredData";
import { generateMetadata, generateOrganizationSchema } from "@/lib/seo";

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

  return (
    <html lang="en" className="theme-light">
      <head>
        {/* Organization Structured Data */}
        <StructuredData data={organizationSchema} />
      </head>
      <body className="font-system bg-primary text-primary transition-all duration-300">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
