import type { Metadata } from "next";
import CroatiaWClient from "./CroatiaWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/croatia`;
const ogImage = `${siteUrl}/images/work/croatia-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Croatia Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Croatia work permit visa from Qatar with WMIBC. Professional support for Croatia work visa processing, housekeeping jobs, butcher jobs, general worker jobs, document checking and application support for Qatar, GCC and Bangladeshi applicants.",
  keywords: [
    "Croatia work permit",
    "Croatia work visa",
    "Croatia work permit visa",
    "Croatia work permit from Qatar",
    "Croatia work visa from Qatar",
    "Croatia jobs visa",
    "Croatia housekeeping jobs",
    "Croatia butcher jobs",
    "Croatia general worker jobs",
    "Croatia work permit for Bangladeshi",
    "Europe work permit from Qatar",
    "WMIBC Croatia work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Croatia Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Croatia work permit and work visa processing support from Qatar with document checking and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Croatia Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Croatia Work Permit Visa from Qatar",
    description:
      "Croatia work permit visa processing support from Qatar for Qatar, GCC and Bangladeshi applicants.",
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
    name: "Croatia Work Permit Visa from Qatar",
    serviceType: "Croatia Work Permit Visa Processing",
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
      "Croatia work permit visa processing support from Qatar with document checklist, job category guidance, application preparation and visa consultation.",
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

      <CroatiaWClient />
    </>
  );
}