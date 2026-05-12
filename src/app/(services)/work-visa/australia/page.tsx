import type { Metadata } from "next";
import AustraliaWClient from "./AustraliaWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/australia`;
const ogImage = `${siteUrl}/images/work/australia-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Australia Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Australia work permit visa from Qatar with WMIBC. Professional support for Australia work visa processing, warehouse packer jobs, document checking and application guidance for Qatar, GCC and Bangladeshi applicants.",
  keywords: [
    "Australia work permit",
    "Australia work visa",
    "Australia work permit visa",
    "Australia work permit from Qatar",
    "Australia work visa from Qatar",
    "Australia jobs visa",
    "Australia warehouse packer jobs",
    "Australia work permit for Bangladeshi",
    "Australia work visa consultant Qatar",
    "WMIBC Australia work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Australia Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Australia work permit and work visa processing support from Qatar with document checking and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Australia Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia Work Permit Visa from Qatar",
    description:
      "Australia work permit visa processing support from Qatar for Qatar, GCC and Bangladeshi applicants.",
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
    name: "Australia Work Permit Visa from Qatar",
    serviceType: "Australia Work Permit Visa Processing",
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
      "Australia work permit visa processing support from Qatar with document checklist, job category guidance, application preparation and visa consultation.",
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

      <AustraliaWClient />
    </>
  );
}