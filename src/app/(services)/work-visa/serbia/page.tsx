import type { Metadata } from "next";
import SerbiaWClient from "./SerbiaWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/serbia`;
const ogImage = `${siteUrl}/images/work/serbia-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Serbia Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Serbia work permit visa from Qatar with WMIBC. Professional support for Serbia work visa processing, construction jobs, cleaner jobs, warehouse jobs, tile mason jobs, document checking and application guidance.",
  keywords: [
    "Serbia work permit",
    "Serbia work visa", 
    "Serbia work permit visa",
    "Serbia work permit from Qatar",
    "Serbia work visa from Qatar",
    "Serbia jobs visa",
    "Serbia construction jobs",
    "Serbia cleaner jobs",
    "Serbia warehouse jobs",
    "Serbia tile mason jobs",
    "Europe work permit from Qatar",
    "WMIBC Serbia work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Serbia Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Serbia work permit and work visa processing support from Qatar with document checking and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Serbia Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serbia Work Permit Visa from Qatar",
    description:
      "Serbia work permit visa processing support from Qatar with document checking and application guidance.",
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
    name: "Serbia Work Permit Visa from Qatar",
    serviceType: "Serbia Work Permit Visa Processing",
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
      "Serbia work permit visa processing support from Qatar with job category guidance, document checklist, application preparation, and professional visa consultation.",
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

      <SerbiaWClient />
    </>
  );
}