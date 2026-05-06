import type { Metadata } from "next";
import ChinaClient from "./ChinaClient";

const siteUrl = "https://wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/china`;
const ogImage = `${siteUrl}/images/visit-visa/china-visit-visa.jpg`;

export const metadata: Metadata = {
  title: "China Visit Visa from Qatar | Requirements, Fee & Processing Time",
  description:
    "Apply for China visit visa from Qatar with document support, appointment guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents, Bangladeshi applicants, and GCC residents.",
  keywords: [
    "China visit visa from Qatar",
    "China tourist visa from Qatar",
    "China visa requirements Qatar",
    "China visitor visa",
    "China visa fee Qatar",
    "China visa for Bangladeshi in Qatar",
    "China visa from Doha",
    "China visa consultant Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "China Visit Visa from Qatar",
    description:
      "Complete China visit visa assistance from Qatar for Qatar residents, Bangladeshi applicants, and GCC residents.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "China Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "China Visit Visa from Qatar",
    description:
      "China tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "China Visit Visa from Qatar",
    serviceType: "China Tourist Visa Consultation",
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
      "China visit visa processing support from Qatar with document checklist, application guidance, appointment support, and travel itinerary assistance.",
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
      <ChinaClient />
    </>
  );
}