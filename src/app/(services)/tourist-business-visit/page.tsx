import { Metadata } from "next";
import TouristVisaClient from "./TouristVisaClient";

// 2026 Optimized SEO Metadata
export const metadata: Metadata = {
  title: "Tourist & Visit Visa Services Qatar 2026 | Hayya & Schengen Support",
  description: "Doha's leading visa experts for 2026. Specialized in Hayya A1/A2/A3 permits, Schengen digital appointments, Canada eTA, and USA visit visas. Get professional document review and appointment scheduling today.",
  keywords: [
    "Tourist visa from Qatar 2026",
    "Hayya e-visa assistance Doha",
    "Schengen visa appointment Qatar 2026",
    "Canada eTA for Qatari passport",
    "UK standard visitor visa Doha",
    "USA B1/B2 visa Qatar",
    "Japan e-visa Qatar",
    "Schengen digital identity visa 2026",
    "Qatar Executive Residence support",
  ],
  alternates: {
    canonical: "https://yourdomain.com/tourist-visa",
  },
  openGraph: {
    title: "Apply for Your Tourist Visa from Qatar | 2026 Expert Guide",
    description: "Fast-track your travel with Doha's most trusted visa consultancy. From Hayya permits to Schengen appointments, we handle the paperwork.",
    images: [
      {
        url: "/og-tourist-visa.jpg", // Ensure you have an OG image for social sharing
        width: 1200,
        height: 630,
        alt: "Tourist Visa Services Qatar",
      },
    ],
  },
};

export default function TouristVisaPage() {
  return (
    <>
      {/* Schema.org JSON-LD for local SEO in Qatar */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Tourist Visa Assistance",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Your Agency Name",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Doha",
                "addressCountry": "QA"
              }
            },
            "areaServed": "Qatar",
            "description": "Expert assistance for Tourist, Visit, and Hayya visas from Doha, Qatar."
          }),
        }}
      />
      <TouristVisaClient />
    </>
  );
}