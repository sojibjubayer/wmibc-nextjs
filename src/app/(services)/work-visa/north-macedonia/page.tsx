import type { Metadata } from "next";
import NorthMacedoniaWClient from "./NorthMacedoniaWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/north-macedonia`;
const ogImage = `${siteUrl}/images/work/north-macedonia-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "North Macedonia Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for North Macedonia work permit visa from Qatar with WMIBC. Professional support for factory worker, warehouse worker, construction worker, hotel staff, cleaner, kitchen helper, agricultural worker and packaging worker jobs.",
  keywords: [
    "North Macedonia work permit",
    "North Macedonia work visa",
    "North Macedonia work permit visa from Qatar",
    "North Macedonia jobs visa",
    "North Macedonia factory worker jobs",
    "North Macedonia warehouse worker jobs",
    "North Macedonia construction worker jobs",
    "North Macedonia hotel staff jobs",
    "North Macedonia cleaner jobs",
    "Europe work permit from Qatar",
    "WMIBC North Macedonia work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "North Macedonia Work Permit Visa from Qatar | WMIBC",
    description:
      "North Macedonia work permit visa processing support from Qatar with document checking, job category guidance and application support.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "North Macedonia Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "North Macedonia Work Permit Visa from Qatar",
    description:
      "North Macedonia work permit visa support for Qatar, GCC and Bangladeshi applicants.",
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
    name: "North Macedonia Work Permit Visa from Qatar",
    serviceType: "North Macedonia Work Permit Visa Processing",
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
      "North Macedonia work permit visa processing support from Qatar with document checklist, job category guidance, application preparation and visa consultation.",
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

      <NorthMacedoniaWClient />
    </>
  );
}