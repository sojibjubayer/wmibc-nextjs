import type { Metadata } from "next";
import SouthKoreaClient from "./SouthKoreaClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/south-korea`;
const ogImage =
  `${siteUrl}/images/visit/south-korea/south-korea-visit-visa.webp`;

export const metadata: Metadata = {
  title: "South Korea Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for South Korea visit visa from Qatar with professional document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "South Korea visit visa from Qatar",
    "South Korea tourist visa Qatar",
    "Korea visa requirements Qatar",
    "South Korea visa from Doha",
    "Korea tourist visa from Qatar",
    "South Korea visa consultant Qatar",
    "South Korea visa for Bangladeshi in Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "South Korea Visit Visa from Qatar",
    description:
      "Complete South Korea tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "South Korea Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "South Korea Visit Visa from Qatar",
    description:
      "South Korea tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "South Korea Visit Visa from Qatar",
    serviceType: "South Korea Tourist Visa Consultation",
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
      "South Korea visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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
      <SouthKoreaClient />
    </>
  );
}