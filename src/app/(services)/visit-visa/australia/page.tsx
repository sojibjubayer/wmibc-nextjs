import type { Metadata } from "next";
import AustraliaClient from "./AustraliaClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/australia`;
const ogImage = `${siteUrl}/images/visit/australia/australia-visit-visa.webp`;

export const metadata: Metadata = {
  title: "Australia Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for Australia visit visa from Qatar with professional document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "Australia visit visa from Qatar",
    "Australia tourist visa Qatar",
    "Australia visa requirements Qatar",
    "Australia visa from Doha",
    "Australia tourist visa from Qatar",
    "Australia visa consultant Qatar",
    "Australia visa for Bangladeshi in Qatar",
    "Australia visitor visa Qatar",
    "Australia subclass 600 visa Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Australia Visit Visa from Qatar",
    description:
      "Complete Australia tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Australia Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia Visit Visa from Qatar",
    description:
      "Australia tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "Australia Visit Visa from Qatar",
    serviceType: "Australia Tourist Visa Consultation",
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
      "Australia visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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

      <AustraliaClient />
    </>
  );
}