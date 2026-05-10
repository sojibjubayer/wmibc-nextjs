import type { Metadata } from "next";
import BulgariaWClient from "./BulgariaWClient";

export const metadata: Metadata = {
  title: "Bulgaria Work Permit Visa Processing from Qatar | WMIBC",
  description:
    "Apply for Bulgaria work permit visa processing from Qatar with WMIBC. Professional support for Hospitality, Construction, Warehouse, and Helper job categories.",
  keywords: [
    "Bulgaria work permit visa from Qatar",
    "Bulgaria work visa processing Qatar",
    "Bulgaria work permit Qatar",
    "Bulgaria hospitality jobs visa",
    "Bulgaria construction work visa",
    "Bulgaria warehouse helper visa",
    "WMIBC Bulgaria visa",
  ],
  alternates: {
    canonical: "https://www.wmibc.com/work-visa/bulgaria",
  },
  openGraph: {
    title: "Bulgaria Work Permit Visa Processing from Qatar | WMIBC",
    description:
      "Professional Bulgaria work permit visa processing support from Qatar for Hospitality, Construction, Warehouse, and Helper categories.",
    url: "https://www.wmibc.com/work-visa/bulgaria",
    siteName: "WMIBC",
    images: [
      {
        url: "/images/work/bulgaria-work-permit-visa-processing.webp",
        width: 1200,
        height: 630,
        alt: "Bulgaria work permit visa processing from Qatar",
      },
    ],
    locale: "en_QA",
    type: "website",
  },
};

export default function BulgariaWorkVisaPage() {
  return <BulgariaWClient />;
}