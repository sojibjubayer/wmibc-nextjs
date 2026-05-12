import type { Metadata } from "next";
import CyprusWClient from "./CyprusWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/cyprus`;
const ogImage = `${siteUrl}/images/work/cyprus-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Cyprus Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Cyprus work permit visa from Qatar with WMIBC. Professional support for Cyprus work visa processing, hospitality jobs, construction jobs, warehouse jobs, helper jobs, document checking and application guidance.",
  keywords: [
    "Cyprus work permit",
    "Cyprus work visa",
    "Cyprus work permit visa",
    "Cyprus work permit from Qatar",
    "Cyprus work visa from Qatar",
    "Cyprus jobs visa",
    "Cyprus hospitality jobs",
    "Cyprus construction jobs",
    "Cyprus warehouse jobs",
    "Cyprus helper jobs",
    "Europe work permit from Qatar",
    "WMIBC Cyprus work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Cyprus Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Cyprus work permit and work visa processing support from Qatar with document checking and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Cyprus Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyprus Work Permit Visa from Qatar",
    description:
      "Cyprus work permit visa processing support from Qatar with document checking and application guidance.",
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
    name: "Cyprus Work Permit Visa from Qatar",
    serviceType: "Cyprus Work Permit Visa Processing",
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
      "Cyprus work permit visa processing support from Qatar with job category guidance, document checklist, application preparation, and professional visa consultation.",
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

      <CyprusWClient />
    </>
  );
}