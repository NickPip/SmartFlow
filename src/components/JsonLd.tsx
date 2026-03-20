const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://atomicimpact.engineering";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Atomic Impact Engineering",
  url: baseUrl,
  description:
    "AI Engineering - Transforming complex challenges into elegant solutions. We specialize in developing cutting-edge solutions using the latest technologies.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Atomic Impact Engineering",
  url: baseUrl,
  description:
    "AI Engineering - Transforming complex challenges into elegant solutions. We specialize in developing cutting-edge solutions using the latest technologies.",
  publisher: {
    "@type": "Organization",
    name: "Atomic Impact Engineering",
  },
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
