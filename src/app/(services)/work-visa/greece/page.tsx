import type { Metadata } from "next";
import GreeceWClient from "./GreeceWClient";

export const metadata: Metadata = {
  title: "Greece Work Permit Visa from Qatar | WMIBC",
  description:
    "Apply for Greece work permit visa from Qatar with WMIBC. Professional support for Greece work visa processing, hospitality jobs, warehouse jobs, construction jobs, document preparation and application guidance.",
  keywords: [
    "Greece work permit",
    "Greece work visa",
    "Greece work permit visa",
    "Greece work permit from Qatar",
    "Greece work visa from Qatar",
    "Greece jobs visa",
    "Greece work permit apply online",
    "Greece work visa application form",
    "Greece work visa checklist",
    "Europe work permit from Qatar",
    "WMIBC Greece work visa",
  ],
  alternates: {
    canonical: "/work-visa/greece",
  },
  openGraph: {
    title: "Greece Work Permit Visa from Qatar | WMIBC",
    description:
      "Professional Greece work permit and work visa processing support from Qatar with document preparation and job category guidance.",
    url: "/work-visa/greece",
    siteName: "WMIBC",
    type: "website",
  },
};

export default function GreeceWorkVisaPage() {
  return <GreeceWClient />;
}