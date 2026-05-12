import type { Metadata } from "next";
import TurkeyWClient from "./TurkeyWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/turkey`;
const ogImage = `${siteUrl}/images/work/turkey-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Turkey Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Turkey work permit visa from Qatar with WMIBC. Professional support for Turkey work visa processing, waiter jobs, waitress jobs, cook jobs, chef jobs, housekeeping jobs, barista jobs, dishwasher jobs, document checking and application guidance.",
  keywords: [
    "Turkey work permit",
    "Turkey work visa",
    "Turkey work permit visa",
    "Turkey work permit from Qatar",
    "Turkey work visa from Qatar",
    "Turkey jobs visa",
    "Turkey waiter jobs",
    "Turkey waitress jobs",
    "Turkey cook jobs",
    "Turkey chef jobs",
    "Turkey housekeeping jobs",
    "Turkey barista jobs",
    "Turkey dishwasher jobs",
    "Europe work permit from Qatar",
    "WMIBC Turkey work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Turkey Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Turkey work permit and work visa processing support from Qatar with document checking and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Turkey Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turkey Work Permit Visa from Qatar",
    description:
      "Turkey work permit visa processing support from Qatar for Qatar, GCC and Bangladeshi applicants.",
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
    name: "Turkey Work Permit Visa from Qatar",
    serviceType: "Turkey Work Permit Visa Processing",
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
      "Turkey work permit visa processing support from Qatar with document checklist, job category guidance, application preparation and visa consultation.",
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

      <TurkeyWClient />
    </>
  );
}