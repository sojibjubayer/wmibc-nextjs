import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact WMIBC | Immigration Consultancy in Qatar",
  description:
    "Contact WMIBC for work visa, visit visa, student visa, and business setup consultation in Qatar.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact WMIBC | Immigration Consultancy in Qatar",
    description:
      "Get in touch with WMIBC for expert immigration and business setup support from Qatar.",
    url: "https://www.wmibc.com/contact",
    siteName: "WMIBC",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}