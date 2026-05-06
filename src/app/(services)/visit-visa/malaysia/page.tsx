import type { Metadata } from "next";
import MalaysiaClient from "./MalaysiaClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/malaysia`;
const ogImage =
  `${siteUrl}/images/visit/malaysia/malaysia-visit-visa.webp`;

export const metadata: Metadata = {
  title: "Malaysia Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for Malaysia visit visa from Qatar with professional document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "Malaysia visit visa from Qatar",
    "Malaysia tourist visa Qatar",
    "Malaysia visa requirements Qatar",
    "Malaysia visa from Doha",
    "Malaysia tourist visa from Qatar",
    "Malaysia visa consultant Qatar",
    "Malaysia visa for Bangladeshi in Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Malaysia Visit Visa from Qatar",
    description:
      "Complete Malaysia tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Malaysia Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malaysia Visit Visa from Qatar",
    description:
      "Malaysia tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "Malaysia Visit Visa from Qatar",
    serviceType: "Malaysia Tourist Visa Consultation",
    provider: {
      "@type": "Organization",
      name: "WMIBC",
      url: siteUrl,
    },
    areaServed: [
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "Place", name: "GCC" },
    ],
    description:
      "Malaysia visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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

      <MalaysiaClient />
    </>
  );
}