import type { Metadata } from "next";
import SingaporeClient from "./SingaporeClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/visit-visa/singapore`;
const ogImage =
  `${siteUrl}/images/visit/singapore/singapore-visit-visa.webp`;

export const metadata: Metadata = {
  title: "Singapore Visit Visa from Qatar | Requirements & Documents",
  description:
    "Apply for Singapore visit visa from Qatar with professional document support, application guidance, travel itinerary, hotel booking, and visa consultation for Qatar residents and Bangladeshi applicants.",
  keywords: [
    "Singapore visit visa from Qatar",
    "Singapore tourist visa Qatar",
    "Singapore visa requirements Qatar",
    "Singapore visa from Doha",
    "Singapore tourist visa from Qatar",
    "Singapore visa consultant Qatar",
    "Singapore visa for Bangladeshi in Qatar",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Singapore Visit Visa from Qatar",
    description:
      "Complete Singapore tourist visa assistance from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Singapore Visit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Singapore Visit Visa from Qatar",
    description:
      "Singapore tourist visa requirements, documents, itinerary support and consultation from Qatar.",
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
    name: "Singapore Visit Visa from Qatar",
    serviceType: "Singapore Tourist Visa Consultation",
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
      "Singapore visit visa processing support from Qatar with document checklist, application guidance, travel itinerary assistance, and visa consultation.",
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

      <SingaporeClient />
    </>
  );
}