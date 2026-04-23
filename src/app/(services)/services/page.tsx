import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Our Services | WMIBC",
  description:
    "Explore WMIBC services including work visa, visit visa, student visa, and business setup solutions from Qatar.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | WMIBC",
    description:
      "Professional immigration consultancy services for work visa, visit visa, student visa, and business setup from Qatar.",
    url: "https://www.wmibc.com/services",
    siteName: "WMIBC",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}