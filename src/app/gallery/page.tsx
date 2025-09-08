import Gallery from "@/components/main/Gallery/gallery";
import type { Metadata } from "next";
import React from "react";

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: "Tattoo Gallery | Satya Tattoo Studio India",
  description:
    "Explore the Satya Tattoo Studio gallery – custom tattoos, realism, portraits, minimal tattoos, and artistic ink by professional tattoo artists in Delhi.",
  keywords: [
    "Tattoo Gallery",
    "Satya Tattoo Studio",
    "Tattoo designs India",
    "Realism tattoos",
    "Best tattoo artist Delhi",
    "Tattoo inspiration",
  ],
  openGraph: {
    title: "Tattoo Gallery | Satya Tattoo Studio",
    description:
      "Browse our tattoo portfolio – from realism tattoos to custom designs, crafted by professional artists at Satya Tattoo Studio.",
    url: "https://satya-tattoo.vercel.app/gallery",
    siteName: "Satya Tattoo Studio",
    images: [
      {
        url: "https://satya-tattoo.vercel.app/og-gallery.jpg",
        width: 1200,
        height: 630,
        alt: "Tattoo gallery at Satya Tattoo Studio",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://satya-tattoo.vercel.app/gallery",
  },
};

const GalleryPage = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="container mx-auto px-6 py-28">
        <h1 className="text-4xl font-bold text-red-500 mb-6 text-center">
          Tattoo Gallery – Our Artwork
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Discover our portfolio of{" "}
          <strong>custom tattoos, realism, portraits, and creative designs</strong>
          crafted by professional artists at Satya Tattoo Studio. Every tattoo
          tells a unique story.
        </p>
        <Gallery />
      </section>
    </main>
  );
};

export default GalleryPage;
