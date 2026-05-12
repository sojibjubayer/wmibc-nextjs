import type { Metadata } from "next";
import ItalyWClient from "./ItalyWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/italy`;
const ogImage = `${siteUrl}/images/work/italy-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Italy Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Italy work permit visa from Qatar with WMIBC. Professional support for Italy work visa processing, light duty driver jobs, forklift driver jobs, agricultural worker jobs, waiter jobs, cleaner jobs, factory worker jobs, document preparation and application guidance.",
  keywords: [
    "Italy work permit",
    "Italy work visa",
    "Italy work permit visa",
    "Italy work permit from Qatar",
    "Italy work visa from Qatar",
    "Italy jobs visa",
    "Italy light duty driver visa",
    "Italy forklift driver visa",
    "Italy agricultural worker visa",
    "Italy waiter jobs",
    "Italy cleaner jobs",
    "Italy factory worker jobs",
    "Europe work permit from Qatar",
    "WMIBC Italy work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Italy Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Italy work permit and work visa processing support from Qatar with document preparation and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Italy Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Italy Work Permit Visa from Qatar",
    description:
      "Italy work permit visa processing support from Qatar with document preparation and job category guidance.",
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
    name: "Italy Work Permit Visa from Qatar",
    serviceType: "Italy Work Permit Visa Processing",
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
      "Italy work permit visa processing support from Qatar with job category guidance, document checklist, application preparation, and professional visa consultation.",
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

      <ItalyWClient />
    </>
  );
}