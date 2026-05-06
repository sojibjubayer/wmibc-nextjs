import type { Metadata } from "next";
import JapanClient from "./JapanClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/japan`;
const ogImage = `${siteUrl}/images/visit/japan/japan-visit-visa.webp`;

export const metadata: Metadata = {
  title: "Japan Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for Japan visit visa from Qatar with professional document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "Japan visit visa from Qatar",
    "Japan tourist visa Qatar",
    "Japan visa requirements Qatar",
    "Japan visa from Doha",
    "Japan tourist visa from Qatar",
    "Japan visa consultant Qatar",
    "Japan visa for Bangladeshi in Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Japan Visit Visa from Qatar",
    description:
      "Complete Japan tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Japan Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan Visit Visa from Qatar",
    description:
      "Japan tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "Japan Visit Visa from Qatar",
    serviceType: "Japan Tourist Visa Consultation",
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
      "Japan visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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
      <JapanClient />
    </>
  );
}