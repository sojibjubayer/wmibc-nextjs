import type { Metadata } from "next";
import StudyVisaClient from "./StudyVisaClient";

export const metadata: Metadata = {
  title: "Study Visa from Qatar | Student Visa Assistance for UK, Canada, USA & Europe",
  description:
    "Get expert study visa assistance from Qatar for Canada, the UK, the USA, Australia, and Europe. Application guidance, university admission support, SOP review, document checklist, and visa filing support.",
  keywords: [
    "study visa Qatar",
    "student visa Qatar",
    "study abroad consultants Qatar",
    "Canada study visa from Qatar",
    "UK student visa from Qatar",
    "USA student visa from Qatar",
    "Australia study visa from Qatar",
    "Europe student visa from Qatar",
    "student admission support Qatar",
    "study permit assistance Qatar",
  ],
  alternates: {
    canonical: "/study-visa",
  },
  openGraph: {
    title: "Study Visa from Qatar | Student Visa Assistance",
    description:
      "Professional study visa and student admission support from Qatar for top destinations worldwide.",
    url: "/study-visa",
    siteName: "Visa Slide",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Visa from Qatar | Student Visa Assistance",
    description:
      "Professional support for study visa applications, admissions, SOPs, and document preparation.",
  },
};

export default function Page() {
  return <StudyVisaClient />;
}