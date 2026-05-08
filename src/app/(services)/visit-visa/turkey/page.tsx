import type { Metadata } from "next";
import TurkeyClient from "./TurkeyClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/turkey`;
const ogImage =
  `${siteUrl}/images/visit/turkey/turkey-visit-visa.webp`;

export const metadata: Metadata = {
  title: "Turkey Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for Turkey visit visa from Qatar with professional document support, visa application guidance, travel itinerary, hotel booking, and consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "Turkey visit visa from Qatar",
    "Turkey tourist visa Qatar",
    "Turkey visa requirements Qatar",
    "Turkey visa from Doha",
    "Turkey tourist visa from Qatar",
    "Turkey visa consultant Qatar",
    "Turkey visa for Bangladeshi in Qatar",
    "Turkey e visa Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Turkey Visit Visa from Qatar",
    description:
      "Complete Turkey tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Turkey Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turkey Visit Visa from Qatar",
    description:
      "Turkey tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "Turkey Visit Visa from Qatar",
    serviceType: "Turkey Tourist Visa Consultation",
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
      "Turkey visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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

      <TurkeyClient />
    </>
  );
}