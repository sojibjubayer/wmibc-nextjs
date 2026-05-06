import type { Metadata } from "next";
import IndiaClient from "./IndiaClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/india`;
const ogImage = `${siteUrl}/images/visit/india/india-visit-visa.webp`;

export const metadata: Metadata = {
  title: "India Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for India visit visa from Qatar with professional document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "India visit visa from Qatar",
    "India tourist visa Qatar",
    "India visa requirements Qatar",
    "India visa from Doha",
    "India tourist visa from Qatar",
    "India visa consultant Qatar",
    "India visa for Bangladeshi in Qatar",
    "India e visa from Qatar",
    "India tourist visa Doha",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "India Visit Visa from Qatar",
    description:
      "Complete India tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "India Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "India Visit Visa from Qatar",
    description:
      "India tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "India Visit Visa from Qatar",
    serviceType: "India Tourist Visa Consultation",
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
      "India visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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

      <IndiaClient />
    </>
  );
}