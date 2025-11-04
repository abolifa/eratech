import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EraTech | Software Solutions",
    template: "%s | EraTech",
  },
  description:
    "EraTech delivers innovative and efficient software solutions tailored to your business needs — from web applications to mobile systems and cloud integrations.",
  keywords: [
    "EraTech",
    "software development",
    "web apps",
    "mobile apps",
    "cloud solutions",
    "business automation",
    "IT consulting",
  ],
  authors: [{ name: "EraTech Team", url: "https://eratech.vercel.app" }],
  creator: "EraTech",
  publisher: "EraTech",
  metadataBase: new URL("https://eratech.vercel.app"),
  openGraph: {
    title: "EraTech | Software Solutions",
    description:
      "Innovative software solutions designed to accelerate your business growth.",
    url: "https://eratech.vercel.app",
    siteName: "EraTech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EraTech Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EraTech | Software Solutions",
    description:
      "Innovative software solutions for web, mobile, and enterprise systems.",
    creator: "@eratech",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://eratech.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
