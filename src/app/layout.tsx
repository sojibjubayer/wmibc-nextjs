import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import TopBar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WMIBC | Work Visa & Visit Visa from Qatar",
    template: "%s | WMIBC",
  },
  description:
    "World Multinational Immigration & Business Consultancy (WMIBC) provides expert support for work visas, visit visas, student visas, and business setup services from Qatar to Europe, Canada, Australia, and beyond.",
  keywords: [
    "work visa from Qatar",
    "visit visa from Qatar",
    "Europe work visa",
    "tourist visa Qatar",
    "student visa consultancy",
    "business setup Qatar",
    "WMIBC",
    "immigration consultancy Qatar",
  ],
  authors: [{ name: "WMIBC" }],
  creator: "WMIBC",
  publisher: "WMIBC",
  metadataBase: new URL("https://www.wmibc.com"),
  openGraph: {
    title: "WMIBC | Work Visa & Visit Visa from Qatar",
    description:
      "Expert immigration consultancy for work visas, visit visas, student visas, and business setup services from Qatar.",
    url: "https://www.wmibc.com",
    siteName: "WMIBC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-(--text-body)">
        <TopBar />
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}