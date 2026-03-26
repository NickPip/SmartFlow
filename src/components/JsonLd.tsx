const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://atomicimpact.engineering";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Atomic Impact",
  alternateName: "Atomic Impact Engineering",
  url: baseUrl,
  description:
    "Atomic Impact builds web, mobile, and AI-powered software for teams worldwide.",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Atomic Impact",
  url: baseUrl,
  description:
    "Atomic Impact — software development, AI engineering, and custom digital products.",
  publisher: {
    "@type": "Organization",
    name: "Atomic Impact",
    alternateName: "Atomic Impact Engineering",
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
