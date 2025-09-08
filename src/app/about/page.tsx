import AboutPage from "@/components/main/About/About";
import type { Metadata } from "next";
import React from "react";

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: "About Satya Tattoo Studio | Professional Tattoo Artists in India",
  description:
    "Learn more about Satya Tattoo Studio, established in 2010. Discover our professional tattoo artists, hygiene practices, and custom tattoo artistry.",
  keywords: [
    "Tattoo Studio India",
    "Satya Tattoo",
    "Best tattoo artist",
    "Custom tattoos",
    "Tattoo hygiene",
  ],
  openGraph: {
    title: "About Satya Tattoo Studio",
    description:
      "Get to know Satya Tattoo Studio – professional tattoo artistry, safe practices, and unique designs since 2010.",
    url: "https://satya-tattoo.vercel.app/about",
    siteName: "Satya Tattoo Studio",
    images: [
      {
        url: "https://satya-tattoo.vercel.app/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Satya Tattoo Studio interior with artists at work",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://satya-tattoo.vercel.app/about",
  },
};

// --- Page Component ---
const About = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-28">
        <h1 className="text-4xl font-bold text-red-500 mb-6">
          About Satya Tattoo Studio
        </h1>
        <AboutPage />
      </section>
    </main>
  );
};

export default About;
