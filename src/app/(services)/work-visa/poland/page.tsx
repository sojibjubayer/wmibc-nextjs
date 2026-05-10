import type { Metadata } from "next";
import PolandWClient from "./PolandWClient";

export const metadata: Metadata = {
  title: "Poland Work Permit Visa Processing from Qatar | WMIBC",
  description:
    "Apply for Poland work permit visa processing from Qatar with WMIBC. Professional support for Construction Worker and Cleaner job categories.",
  keywords: [
    "Poland work permit visa from Qatar",
    "Poland work visa processing Qatar",
    "Poland work permit Qatar",
    "Poland construction worker visa",
    "Poland cleaner work visa",
    "Poland job visa from Qatar",
    "WMIBC Poland visa",
  ],
  alternates: {
    canonical: "https://www.wmibc.com/work-visa/poland",
  },
  openGraph: {
    title: "Poland Work Permit Visa Processing from Qatar | WMIBC",
    description:
      "Professional Poland work permit visa processing support from Qatar for Construction Worker and Cleaner categories.",
    url: "https://www.wmibc.com/work-visa/poland",
    siteName: "WMIBC",
    images: [
      {
        url: "/images/work/poland-work-permit-visa-processing.webp",
        width: 1200,
        height: 630,
        alt: "Poland work permit visa processing from Qatar",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
};

export default function PolandWorkVisaPage() {
  return <PolandWClient />;
}