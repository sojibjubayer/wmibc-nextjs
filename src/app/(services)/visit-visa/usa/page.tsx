import type { Metadata } from "next";
import USAClient from "./USAClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/usa`;
const ogImage = `${siteUrl}/images/visit/usa/usa-visit-visa.webp`;

export const metadata: Metadata = {
  title: "USA Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for USA visit visa from Qatar with professional document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "USA visit visa from Qatar",
    "USA tourist visa Qatar",
    "USA visa requirements Qatar",
    "USA visa from Doha",
    "USA tourist visa from Qatar",
    "USA visa consultant Qatar",
    "USA visa for Bangladeshi in Qatar",
    "US visitor visa Qatar",
    "USA B1 B2 visa from Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "USA Visit Visa from Qatar",
    description:
      "Complete USA tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "USA Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "USA Visit Visa from Qatar",
    description:
      "USA tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "USA Visit Visa from Qatar",
    serviceType: "USA B1/B2 Visitor Visa Consultation",
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
      "USA visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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

      <USAClient />
    </>
  );
}