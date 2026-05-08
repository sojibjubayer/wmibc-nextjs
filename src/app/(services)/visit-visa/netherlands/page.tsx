import type { Metadata } from "next";
import NetherlandsClient from "./NetherlandsClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/netherlands`;
const ogImage =
  `${siteUrl}/images/visit/netherlands/netherlands-visit-visa.webp`;

export const metadata: Metadata = {
  title: "Netherlands Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for Netherlands visit visa from Qatar with professional document support, Schengen application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "Netherlands visit visa from Qatar",
    "Netherlands tourist visa Qatar",
    "Netherlands Schengen visa Qatar",
    "Netherlands visa requirements Qatar",
    "Netherlands visa from Doha",
    "Netherlands tourist visa from Qatar",
    "Netherlands visa consultant Qatar",
    "Netherlands visa for Bangladeshi in Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Netherlands Visit Visa from Qatar",
    description:
      "Complete Netherlands Schengen tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Netherlands Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netherlands Visit Visa from Qatar",
    description:
      "Netherlands tourist visa requirements, Schengen documents, itinerary support and consultation from Qatar.",
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
    name: "Netherlands Visit Visa from Qatar",
    serviceType: "Netherlands Schengen Tourist Visa Consultation",
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
      "Netherlands visit visa processing support from Qatar with Schengen document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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

      <NetherlandsClient />
    </>
  );
}