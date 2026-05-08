import type { Metadata } from "next";
import NewZealandClient from "./NewZealandClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/new-zealand`;
const ogImage = `${siteUrl}/images/visit/new-zealand/new-zealand-visit-visa.webp`;

export const metadata: Metadata = {
  title: "New Zealand Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for New Zealand visit visa from Qatar with professional document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "New Zealand visit visa from Qatar",
    "New Zealand tourist visa Qatar",
    "New Zealand visa requirements Qatar",
    "New Zealand visa from Doha",
    "New Zealand tourist visa from Qatar",
    "New Zealand visa consultant Qatar",
    "New Zealand visa for Bangladeshi in Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "New Zealand Visit Visa from Qatar",
    description:
      "Complete New Zealand tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "New Zealand Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Zealand Visit Visa from Qatar",
    description:
      "New Zealand tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "New Zealand Visit Visa from Qatar",
    serviceType: "New Zealand Tourist Visa Consultation",
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
      "New Zealand visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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

      <NewZealandClient />
    </>
  );
}