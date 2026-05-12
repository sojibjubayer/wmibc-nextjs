import type { Metadata } from "next";
import NewZealandWClient from "./NewZealandWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/new-zealand`;
const ogImage = `${siteUrl}/images/work/new-zealand-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "New Zealand Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for New Zealand work permit visa from Qatar with WMIBC. Professional support for New Zealand work visa processing, warehouse packer jobs, logistics jobs, document checking and application guidance for Qatar, GCC and Bangladeshi applicants.",
  keywords: [
    "New Zealand work permit",
    "New Zealand work visa",
    "New Zealand work permit visa",
    "New Zealand work permit from Qatar",
    "New Zealand work visa from Qatar",
    "New Zealand jobs visa",
    "New Zealand warehouse packer jobs",
    "New Zealand logistics jobs",
    "New Zealand work permit for Bangladeshi",
    "WMIBC New Zealand work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "New Zealand Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional New Zealand work permit and work visa processing support from Qatar with document checking and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "New Zealand Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Zealand Work Permit Visa from Qatar",
    description:
      "New Zealand work permit visa processing support from Qatar for Qatar, GCC and Bangladeshi applicants.",
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
    name: "New Zealand Work Permit Visa from Qatar",
    serviceType: "New Zealand Work Permit Visa Processing",
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
      "New Zealand work permit visa processing support from Qatar with document checklist, job category guidance, application preparation and visa consultation.",
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

      <NewZealandWClient />
    </>
  );
}