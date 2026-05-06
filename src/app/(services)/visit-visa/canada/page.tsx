import type { Metadata } from "next";
import CanadaClient from "./CanadaClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/canada`;
const ogImage = `${siteUrl}/images/visit/canada/canada-visit-visa.webp`;

export const metadata: Metadata = {
  title: "Canada Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for Canada visit visa from Qatar with professional document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "Canada visit visa from Qatar",
    "Canada tourist visa Qatar",
    "Canada visa requirements Qatar",
    "Canada visa from Doha",
    "Canada tourist visa from Qatar",
    "Canada visa consultant Qatar",
    "Canada visa for Bangladeshi in Qatar",
    "Canada visitor visa Qatar",
    "Canada TRV from Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Canada Visit Visa from Qatar",
    description:
      "Complete Canada tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Canada Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada Visit Visa from Qatar",
    description:
      "Canada tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "Canada Visit Visa from Qatar",
    serviceType: "Canada Tourist Visa Consultation",
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
      "Canada visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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

      <CanadaClient />
    </>
  );
}