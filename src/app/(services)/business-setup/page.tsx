import type { Metadata } from "next";
import BusinessSetupClient from "./BusinessSetupClient";

export const metadata: Metadata = {
  title: "Business Setup in Qatar | WMIBC",
  description:
    "Start your business setup in Qatar with WMIBC. Get expert support for company formation, trade license, legal documentation, PRO services, and business consultation.",
  keywords: [
    "business setup in Qatar",
    "company formation in Qatar",
    "start business in Qatar",
    "trade license Qatar",
    "Qatar company registration",
    "business consultancy Qatar",
    "WMIBC business setup",
  ],
  alternates: {
    canonical: "/business-setup",
  },
  openGraph: {
    title: "Business Setup in Qatar | WMIBC",
    description:
      "Expert support for company formation, trade license, legal documentation, and business setup services in Qatar.",
    url: "https://www.wmibc.com/business-setup",
    siteName: "WMIBC",
    type: "website",
  },
};

export default function BusinessSetupPage() {
  return <BusinessSetupClient />;
}