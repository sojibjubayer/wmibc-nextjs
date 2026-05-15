import type { Metadata } from "next";
import GermanyWClient from "./GermanyWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/germany`;
const ogImage = `${siteUrl}/images/work/germany-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Germany Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Germany work permit visa from Qatar with WMIBC. Professional support for Germany work visa processing, food court jobs, supermarket jobs, document checking, current work experience guidance and embassy submission support.",
  keywords: [
    "Germany work permit",
    "Germany work visa",
    "Germany work permit visa",
    "Germany work permit from Qatar",
    "Germany work visa from Qatar",
    "Germany jobs visa",
    "Germany food court jobs",
    "Germany supermarket jobs",
    "Germany supermarket work visa",
    "Germany food court work visa",
    "Germany work visa salary 1500 euro",
    "Europe work permit from Qatar",
    "Germany visa processing from Qatar",
    "WMIBC Germany work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Germany Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Germany work permit and work visa processing support from Qatar for food court and supermarket job categories with document checking and embassy guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Germany Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Germany Work Permit Visa from Qatar",
    description:
      "Germany work permit visa processing support from Qatar for food court and supermarket jobs with document checking and application guidance.",
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
    name: "Germany Work Permit Visa from Qatar",
    serviceType: "Germany Work Permit Visa Processing",
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
      "Germany work permit visa processing support from Qatar for food court and supermarket job categories with document checklist, current work experience guidance, pre-medical guidance, application preparation, and professional visa consultation.",
    url: pageUrl,
    offers: {
      "@type": "Offer",
      price: "38000",
      priceCurrency: "QAR",
      availability: "https://schema.org/InStock",
      description:
        "Service charge excluding ticket, embassy fees, and medical. Payment structure includes first payment, assessment payment, and final payment after visa stamping.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <GermanyWClient />
    </>
  );
}