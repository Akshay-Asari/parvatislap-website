import { Metadata } from "next";

/**
 * SEO Configuration & Utilities
 * Centralized SEO settings for the application
 */

// Base site configuration
export const siteConfig = {
  name: "Parvati's Lap",
  title: "Parvati's Lap — Luxury Himalayan Hostel & Villa in Kasol",
  description:
    "Experience the best hostel and villa stay in Kasol, Himachal Pradesh. Located in Lapas Village with stunning mountain views, our property offers luxury accommodation, cafe, and access to trekking trails.",
  url: "https://parvatislap.com", // Update with actual domain
  ogImage: "/images/og-image.jpg", // Create this image
  keywords: [
    "Kasol hostel",
    "Kasol villa",
    "Parvati Valley",
    "Himachal Pradesh",
    "mountain resort",
    "Kheerganga trek",
    "Lapas Village",
    "Kasol accommodation",
    "Himalayan hostel",
    "luxury villa Kasol",
    "hostel in Parvati Valley",
    "Kasol hotels",
    "backpacker hostel Kasol",
    "Kasol stays",
  ],
  links: {
    booking: "https://live.ipms247.com/booking/book-rooms-parvatislaphostelcamps",
    whatsapp: "https://wa.me/919082229363",
    email: "mailto:parvatislap@gmail.com",
  },
  contact: {
    phone: "+91 908 222 9363",
    email: "parvatislap@gmail.com",
    address: "Lapas Village, Kasol, Parvati Valley, Himachal Pradesh, India",
  },
  social: {
    // Add social media links when available
    facebook: "",
    instagram: "",
    twitter: "",
  },
};

/**
 * Generate metadata for a page
 */
export function generateMetadata({
  title,
  description,
  keywords,
  image,
  path = "",
  type = "website",
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  path?: string;
  type?: "website" | "article";
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageImage = image || siteConfig.ogImage;
  const pageUrl = `${siteConfig.url}${path}`;
  const allKeywords = [...siteConfig.keywords, ...(keywords || [])];

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: allKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: "@parvatislap", // Update with actual Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // Add verification codes when available
      google: "", // Google Search Console
      yandex: "", // Yandex Webmaster
      // bing: "", // Bing Webmaster
    },
  };
}

/**
 * Generate JSON-LD structured data for organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-updated.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lapas Village",
      addressLocality: "Kasol",
      addressRegion: "Himachal Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "32.0100", // Update with actual coordinates
      longitude: "77.3200", // Update with actual coordinates
    },
    priceRange: "₹₹",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Mountain View" },
      { "@type": "LocationFeatureSpecification", name: "Cafe" },
      { "@type": "LocationFeatureSpecification", name: "Trek Access" },
      { "@type": "LocationFeatureSpecification", name: "WiFi" },
    ],
    sameAs: [
      // Add social media URLs when available
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.twitter,
    ].filter(Boolean),
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Generate review aggregate schema
 */
export function generateAggregateRatingSchema(rating: number, reviewCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: rating,
    bestRating: "5",
    worstRating: "1",
    ratingCount: reviewCount,
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate hotel room schema
 */
export function generateHotelRoomSchema(room: {
  name: string;
  description: string;
  images: string[];
  beds: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.description,
    image: room.images.map((img) => `${siteConfig.url}${img}`),
    bed: {
      "@type": "BedDetails",
      numberOfBeds: room.beds,
    },
  };
}

