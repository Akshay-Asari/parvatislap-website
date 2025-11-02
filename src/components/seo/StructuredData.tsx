/**
 * StructuredData Component
 * Renders JSON-LD structured data for SEO
 * 
 * Usage:
 * <StructuredData data={organizationSchema} />
 */

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

