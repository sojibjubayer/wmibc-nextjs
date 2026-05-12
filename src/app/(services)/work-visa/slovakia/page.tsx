import type { Metadata } from "next";
import SlovakiaWClient from "./SlovakiaWClient";

export const metadata: Metadata = {
  title: "Slovakia Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Slovakia work permit visa from Qatar with WMIBC. Professional support for Slovakia work visa processing, factory worker jobs, warehouse worker jobs, helper jobs, document preparation and application guidance.",
  keywords: [
    "Slovakia work permit",
    "Slovakia work visa",
    "Slovakia work permit visa",
    "Slovakia work permit from Qatar",
    "Slovakia work visa from Qatar",
    "Slovakia jobs visa",
    "Slovakia factory worker visa",
    "Slovakia warehouse worker visa",
    "Slovakia helper jobs",
    "Europe work permit from Qatar",
    "WMIBC Slovakia work visa",
  ],
  alternates: {
    canonical: "/work-visa/slovakia",
  },
  openGraph: {
    title: "Slovakia Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Slovakia work permit and work visa processing support from Qatar with document preparation and job category guidance.",
    url: "/work-visa/slovakia",
    siteName: "WMIBC",
    type: "website",
  },
};

export default function SlovakiaWorkVisaPage() {
  return <SlovakiaWClient />;
}