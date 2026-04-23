import type { Metadata } from "next";
import SuccessStoriesClient from "./SuccessStoriesClient";

export const metadata: Metadata = {
  title: "Success Stories | WMIBC",
  description:
    "Read real client success stories for work visas, visit visas, and student visas supported by WMIBC from Qatar and beyond.",
  alternates: {
    canonical: "/success-stories",
  },
  openGraph: {
    title: "Success Stories | WMIBC",
    description:
      "Real visa success stories from WMIBC clients across visit visa, work visa, and student visa categories.",
    url: "https://www.wmibc.com/success-stories",
    siteName: "WMIBC",
    type: "website",
  },
};

export default function SuccessStoriesPage() {
  return <SuccessStoriesClient />;
}