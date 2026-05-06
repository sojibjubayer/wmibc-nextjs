import type { Metadata } from "next";
import ThailandClient from "./ThailandClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/thailand`;
const ogImage =
  `${siteUrl}/images/visit/thailand/thailand-visit-visa.webp`;

export const metadata: Metadata = {
  title: "Thailand Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for Thailand visit visa from Qatar with professional document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "Thailand visit visa from Qatar",
    "Thailand tourist visa Qatar",
    "Thailand visa requirements Qatar",
    "Thailand visa from Doha",
    "Thailand tourist visa from Qatar",
    "Thailand visa consultant Qatar",
    "Thailand visa for Bangladeshi in Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Thailand Visit Visa from Qatar",
    description:
      "Complete Thailand tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Thailand Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thailand Visit Visa from Qatar",
    description:
      "Thailand tourist visa requirements, documents, itinerary support and consultation from Qatar.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Thailand Visit Visa from Qatar",
    serviceType: "Thailand Tourist Visa Consultation",
    provider: {
      "@type": "Organization",
      name: "WMIBC",
      url: siteUrl,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Qatar",
      },
      {
        "@type": "Country",
        name: "Bangladesh",
      },
      {
        "@type": "Place",
        name: "GCC",
      },
    ],
    description:
      "Thailand visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
    url: pageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <ThailandClient />
    </>
  );
}