import type { Metadata } from "next";
import UKWClient from "./UKWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/uk`;
const ogImage = `${siteUrl}/images/work/uk-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "UK Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for UK work permit visa from Qatar with WMIBC. Professional support for UK work visa processing, hospitality worker jobs, hotel line worker jobs, document checking and application guidance for Qatar, GCC and Bangladeshi applicants.",
  keywords: [
    "UK work permit",
    "UK work visa",
    "UK work permit visa",
    "UK work permit from Qatar",
    "UK work visa from Qatar",
    "UK jobs visa",
    "UK hospitality worker jobs",
    "UK hotel line worker jobs",
    "UK work permit for Bangladeshi",
    "Europe work permit from Qatar",
    "WMIBC UK work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "UK Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional UK work permit and work visa processing support from Qatar with document checking and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "UK Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Work Permit Visa from Qatar",
    description:
      "UK work permit visa processing support from Qatar for Qatar, GCC and Bangladeshi applicants.",
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
    name: "UK Work Permit Visa from Qatar",
    serviceType: "UK Work Permit Visa Processing",
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
      "UK work permit visa processing support from Qatar with document checklist, job category guidance, application preparation and visa consultation.",
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

      <UKWClient />
    </>
  );
}