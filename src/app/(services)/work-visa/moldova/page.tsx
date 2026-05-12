import type { Metadata } from "next";
import MoldovaWClient from "./MoldovaWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/moldova`;
const ogImage = `${siteUrl}/images/work/moldova-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Moldova Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Moldova work permit visa from Qatar with WMIBC. Professional support for Moldova work visa processing, female massage therapist jobs, hospitality jobs, cleaner jobs, warehouse jobs, document checking and application guidance.",
  keywords: [
    "Moldova work permit",
    "Moldova work visa",
    "Moldova work permit visa",
    "Moldova work permit from Qatar",
    "Moldova work visa from Qatar",
    "Moldova jobs visa",
    "Moldova female massage therapist jobs",
    "Moldova hospitality jobs",
    "Moldova cleaner jobs",
    "Moldova warehouse jobs",
    "Europe work permit from Qatar",
    "WMIBC Moldova work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Moldova Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Moldova work permit and work visa processing support from Qatar with document checking and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Moldova Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moldova Work Permit Visa from Qatar",
    description:
      "Moldova work permit visa processing support from Qatar with document checking and application guidance.",
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
    name: "Moldova Work Permit Visa from Qatar",
    serviceType: "Moldova Work Permit Visa Processing",
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
      "Moldova work permit visa processing support from Qatar with job category guidance, document checklist, application preparation, and professional visa consultation.",
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

      <MoldovaWClient />
    </>
  );
}