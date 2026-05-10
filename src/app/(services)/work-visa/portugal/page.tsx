import type { Metadata } from "next";
import PortugalWClient from "./PortugalWClient";

export const metadata: Metadata = {
  title: "Portugal Agriculture D1 Work Visa from Qatar | WMIBC",
  description:
    "Apply for Portugal Agriculture D1 work permit visa from Qatar with WMIBC. Professional support for Portugal work visa processing, agriculture jobs, farm worker jobs, document preparation and D1 visa application guidance.",
  keywords: [
    "Portugal work permit",
    "Portugal work visa",
    "Portugal D1 visa",
    "Portugal Agriculture D1 visa",
    "Portugal agriculture work visa",
    "Portugal work permit from Qatar",
    "Portugal work visa from Qatar",
    "Portugal farm worker visa",
    "Portugal agriculture jobs visa",
    "Portugal D1 visa from Qatar",
    "Portugal work visa application form",
    "Portugal work visa checklist",
    "Europe work permit from Qatar",
    "WMIBC Portugal work visa",
  ],
  alternates: {
    canonical: "/work-visa/portugal",
  },
  openGraph: {
    title: "Portugal Agriculture D1 Work Visa from Qatar | WMIBC",
    description:
      "Professional Portugal Agriculture D1 work permit and work visa processing support from Qatar with document preparation and job category guidance.",
    url: "/work-visa/portugal",
    siteName: "WMIBC",
    type: "website",
  },
};

export default function PortugalWorkVisaPage() {
  return <PortugalWClient />;
}
