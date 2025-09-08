import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header/Header";
import Footer from "@/components/main/Footer/Footer";
import FloatingButton from "@/components/main/Social/Social";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Tattoo Studio in India | Tattoo studio | Online & Tattoo",
  description:
    "Professional tattoo studio offering name tattoos, custom designs, linework, dotwork & minimalist tattoos. Hygienic, creative, and trusted by clients across India.",
  keywords: [
    "tattoo studio India",
    "best tattoo artist",
    "custom tattoos",
    "name tattoo design",
    "minimalist tattoo",
    "linework tattoo",
    "dotwork tattoo",
    "tattoo booking India",
  ],
  verification: {
    google: "pZli41Nz3TX5MpMf4PUrZprDEnf0_HwUw5-Pku3bBp0", // paste code here
  },
  authors: [{ name: "Satya Tatto Studio " }],
  openGraph: {
    title: "Best Tattoo Studio in India | Custom & Minimal Tattoos",
    description:
      "Get your dream tattoo with professional artists. Safe, hygienic & creative tattoo designs tailored for you.",
    // url: "https://yourdomain.com",
    siteName: "Satya Tattoo Studio",

    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/logo.png"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingButton/>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
