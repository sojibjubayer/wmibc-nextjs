import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | WMIBC",
  description:
    "Latest visa updates, work visa guides, visit visa requirements, and immigration consultancy insights from WMIBC.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}