import type { Metadata } from "next";
import AlbaniaWClient from "./AlbaniaWClient";

const siteUrl = "https://www.wmibc.com";
const pageUrl = `${siteUrl}/work-visa/albania`;
const ogImage = `${siteUrl}/images/work/albania-work-permit-visa-qatar.webp`;

export const metadata: Metadata = {
  title: "Albania Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Albania work permit visa from Qatar with WMIBC. Professional support for Albania work visa processing, grill chef jobs, kitchen helper jobs, mason jobs, bricklayer jobs, document checking and application guidance.",
  keywords: [
    "Albania work permit",
    "Albania work visa",
    "Albania work permit visa",
    "Albania work permit from Qatar",
    "Albania work visa from Qatar",
    "Albania jobs visa",
    "Albania grill chef jobs",
    "Albania kitchen helper jobs",
    "Albania mason jobs",
    "Albania bricklayer jobs",
    "Europe work permit from Qatar",
    "WMIBC Albania work visa",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Albania Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Albania work permit and work visa processing support from Qatar with document checking and job category guidance.",
    url: pageUrl,
    siteName: "WMIBC",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Albania Work Permit Visa from Qatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Albania Work Permit Visa from Qatar",
    description:
      "Albania work permit visa processing support from Qatar for Qatar, GCC and Bangladeshi applicants.",
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
    name: "Albania Work Permit Visa from Qatar",
    serviceType: "Albania Work Permit Visa Processing",
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
      "Albania work permit visa processing support from Qatar with document checklist, job category guidance, application preparation and visa consultation.",
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

      <AlbaniaWClient />
    </>
  );
}