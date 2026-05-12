import type { Metadata } from "next";
import MontenegroWClient from "./MontenegroWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/montenegro`;
const ogImage = `${siteUrl}/images/work/montenegro-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Montenegro Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Montenegro work permit visa from Qatar with WMIBC. Professional support for Montenegro work visa processing, hospitality jobs, construction jobs, warehouse jobs, electrician jobs, tile mason jobs, gypsum worker jobs, document checking and application guidance.",
  keywords: [
    "Montenegro work permit",
    "Montenegro work visa",
    "Montenegro work permit visa",
    "Montenegro work permit from Qatar",
    "Montenegro work visa from Qatar",
    "Montenegro jobs visa",
    "Montenegro hospitality jobs",
    "Montenegro construction jobs",
    "Montenegro warehouse jobs",
    "Montenegro electrician jobs",
    "Montenegro tile mason jobs",
    "Montenegro gypsum worker jobs",
    "Europe work permit from Qatar",
    "WMIBC Montenegro work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Montenegro Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Montenegro work permit and work visa processing support from Qatar with document checking and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Montenegro Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Montenegro Work Permit Visa from Qatar",
    description:
      "Montenegro work permit visa processing support from Qatar for Qatar, GCC and Bangladeshi applicants.",
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
    name: "Montenegro Work Permit Visa from Qatar",
    serviceType: "Montenegro Work Permit Visa Processing",
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
      "Montenegro work permit visa processing support from Qatar with document checklist, job category guidance, application preparation and visa consultation.",
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

      <MontenegroWClient />
    </>
  );
}