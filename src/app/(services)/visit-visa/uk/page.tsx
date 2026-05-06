import type { Metadata } from "next";
import UKClient from "./UKClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/uk`;
const ogImage = `${siteUrl}/images/visit/uk/uk-visit-visa.webp`;

export const metadata: Metadata = {
  title: "UK Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for UK visit visa from Qatar with professional document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "UK visit visa from Qatar",
    "UK tourist visa Qatar",
    "UK visa requirements Qatar",
    "UK visa from Doha",
    "UK tourist visa from Qatar",
    "UK visa consultant Qatar",
    "UK visa for Bangladeshi in Qatar",
    "United Kingdom visit visa from Qatar",
    "UK standard visitor visa Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "UK Visit Visa from Qatar",
    description:
      "Complete UK tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "UK Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Visit Visa from Qatar",
    description:
      "UK tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "UK Visit Visa from Qatar",
    serviceType: "UK Standard Visitor Visa Consultation",
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
      "UK visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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

      <UKClient />
    </>
  );
}