import type { Metadata } from "next";
import CanadaWClient from "./CanadaWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/canada`;
const ogImage = `${siteUrl}/images/work/canada-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Canada Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Canada work permit visa from Qatar with WMIBC. Professional support for Canada work visa processing, multiple job positions, document checking and application guidance for Qatar, GCC and Bangladeshi applicants.",
  keywords: [
    "Canada work permit",
    "Canada work visa",
    "Canada work permit visa",
    "Canada work permit from Qatar",
    "Canada work visa from Qatar",
    "Canada jobs visa",
    "Canada multiple positions available",
    "Canada work permit for Bangladeshi",
    "Canada work visa consultant Qatar", 
    "WMIBC Canada work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Canada Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Canada work permit and work visa processing support from Qatar with document checking and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Canada Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canada Work Permit Visa from Qatar",
    description:
      "Canada work permit visa processing support from Qatar for Qatar, GCC and Bangladeshi applicants.",
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
    name: "Canada Work Permit Visa from Qatar",
    serviceType: "Canada Work Permit Visa Processing",
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
      "Canada work permit visa processing support from Qatar with document checklist, job category guidance, application preparation and visa consultation.",
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

      <CanadaWClient />
    </>
  );
}