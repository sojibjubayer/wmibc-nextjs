import type { Metadata } from "next";
import WorkVisaClient from "./WorkVisaClient";

export const metadata: Metadata = {
  title:
    "Work Visa from Qatar | Europe Work Permit & Job Visa Services in Doha",
  description:
    "Apply for work visa opportunities from Qatar with expert support for Europe work permits, job placement, document guidance, and visa processing. Explore Poland, Italy, Portugal, Greece, Cyprus, UK, and more from Doha.",
  keywords: [
    "work visa from Qatar",
    "work permit from Qatar",
    "Europe work visa Qatar",
    "Doha work visa consultancy",
    "Poland work permit from Qatar",
    "Italy work visa from Qatar",
    "Portugal D1 visa Qatar",
    "Greece work permit Doha",
    "Cyprus work visa Qatar",
    "UK work visa Qatar",
    "job visa consultancy Doha",
    "Bangladesh to Europe work visa from Qatar",
  ],
  alternates: {
    canonical: "/work-visa",
  },
  openGraph: {
    title: "Work Visa from Qatar | Europe Work Permit & Job Visa Services",
    description:
      "Start your journey to work in Europe from Qatar. Get support for job placement, work permit guidance, and complete visa processing.",
    url: "/work-visa",
    siteName: "WMIBC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work Visa from Qatar | Europe Work Permit & Job Visa Services",
    description:
      "Explore work visa opportunities from Qatar for Poland, Italy, Portugal, Greece, Cyprus, UK, and more.",
  },
};

export default function Page() {
  return <WorkVisaClient />;
}