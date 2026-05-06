import type { Metadata } from "next";
import EuropeClient from "./EuropeClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/europe`;
const ogImage = `${siteUrl}/images/visit/europe/europe-visit-visa.webp`;

export const metadata: Metadata = {
  title: "Europe Visit Visa from Qatar | Schengen Requirements & Documents",
  description:
    "Apply for Europe visit visa from Qatar with professional Schengen document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "Europe visit visa from Qatar",
    "Schengen visa from Qatar",
    "Europe tourist visa Qatar",
    "Europe visa requirements Qatar",
    "Europe visa from Doha",
    "Schengen visa consultant Qatar",
    "Europe visa for Bangladeshi in Qatar",
    "Schengen tourist visa Qatar",
    "Europe visit visa Doha",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Europe Visit Visa from Qatar",
    description:
      "Complete Europe and Schengen tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Europe Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Europe Visit Visa from Qatar",
    description:
      "Europe and Schengen tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "Europe Visit Visa from Qatar",
    serviceType: "Europe Schengen Tourist Visa Consultation",
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
      "Europe and Schengen visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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

      <EuropeClient />
    </>
  );
}