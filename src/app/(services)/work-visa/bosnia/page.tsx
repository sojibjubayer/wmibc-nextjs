import type { Metadata } from "next";
import BosniaWClient from "./BosniaWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/bosnia`;
const ogImage = `${siteUrl}/images/work/bosnia-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Bosnia Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Bosnia work permit visa from Qatar with WMIBC. Professional support for Bosnia work visa processing, general worker jobs, document checking, job category guidance and application support for Qatar, GCC and Bangladeshi applicants.",
  keywords: [
    "Bosnia work permit",
    "Bosnia work visa",
    "Bosnia work permit visa",
    "Bosnia work permit from Qatar",
    "Bosnia work visa from Qatar",
    "Bosnia jobs visa",
    "Bosnia general worker jobs",
    "Bosnia work permit for Bangladeshi",
    "Europe work permit from Qatar",
    "WMIBC Bosnia work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Bosnia Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Bosnia work permit and work visa processing support from Qatar with document checking and application guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Bosnia Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bosnia Work Permit Visa from Qatar",
    description:
      "Bosnia work permit visa processing support from Qatar for Qatar, GCC and Bangladeshi applicants.",
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
    name: "Bosnia Work Permit Visa from Qatar",
    serviceType: "Bosnia Work Permit Visa Processing",
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
      "Bosnia work permit visa processing support from Qatar with document checklist, job category guidance, application preparation and visa consultation.",
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

      <BosniaWClient />
    </>
  );
}