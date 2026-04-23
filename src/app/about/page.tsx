import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About WMIBC | Immigration Consultancy in Qatar",
  description:
    "Learn about WMIBC, a trusted immigration consultancy in Qatar for work visa, visit visa, student visa, and business setup services.",
  keywords: [
    "immigration consultancy Qatar",
    "work visa from Qatar",
    "visit visa from Qatar",
    "tourist visa from Qatar",
    "student visa from Qatar",
    "business setup Qatar",
    "WMIBC Qatar",
    "visa consultancy Qatar",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About WMIBC | Immigration Consultancy in Qatar",
    description:
      "Trusted immigration consultancy in Qatar for work visa, visit visa, student visa, and business setup services.",
    url: "https://www.wmibc.com/about",
    siteName: "WMIBC",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
