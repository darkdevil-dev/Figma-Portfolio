import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Gautam - Graphic Designer",
  description: "A self-taught Graphic designer. Creating meaningful and delightful digital products that balance user needs and business goals. 2+ years of industry experience.",
  keywords: [
    "Aman Gautam",
    "Graphic Designer",
    "Editor",
    "Freelancer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
    "Portfolio",
  ],
  authors: [{ name: "Aman Gautam" }],
  creator: "Aman Gautam",
  publisher: "Aman Gautam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vipamangautam.com",
    title: "Aman Gautam - Graphic Designer",
    description: "A self-taught graphic designer. Creating meaningful and delightful digital products.",
    siteName: "Aman gautam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Gautam - Graphic Designer",
    description: "A self-taught graphuc designer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://vipamangautam.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
