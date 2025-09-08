import Landing from "@/components/landing/Landing";
import type { Metadata } from "next";

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: "Satya Tattoo Studio | Best Tattoo Artists in Delhi, India",
  description:
    "Satya Tattoo Studio – professional tattoo artists in Delhi offering custom tattoos, realism, portrait tattoos, and hygienic tattooing since 2010.",
  keywords: [
    "Tattoo Studio Delhi",
    "Best tattoo artist India",
    "Satya Tattoo Studio",
    "Custom tattoos",
    "Realism tattoos",
    "Tattoo hygiene Delhi",
  ],
  openGraph: {
    title: "Satya Tattoo Studio | Best Tattoo Artists in Delhi",
    description:
      "Explore Satya Tattoo Studio – custom tattoos, portrait tattoos, and artistic ink by expert tattoo artists in Delhi.",
    url: "https://satya-tattoo.vercel.app/",
    siteName: "Satya Tattoo Studio",
    images: [
      {
        url: "https://satya-tattoo.vercel.app//og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Tattoo artist working at Satya Tattoo Studio Delhi",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satya Tattoo Studio | Professional Tattoo Artists in Delhi",
    description:
      "Get your custom tattoo designed at Satya Tattoo Studio Delhi – unique designs, safe practices, and professional artists.",
    images: ["https://satya-tattoo.vercel.app//og-home.jpg"],
  },
  alternates: {
    canonical: "https://satya-tattoo.vercel.app/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Landing />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TattooParlor",
            name: "Satya Tattoo Studio",
            image: "https://satya-tattoo.vercel.app//og-home.jpg",
            description:
              "Satya Tattoo Studio in Delhi offers professional tattoo artistry including realism, portraits, and custom designs in a hygienic environment.",
            telephone: "+91-7033124566",
            address: {
              "@type": "PostalAddress",
              streetAddress: "XYZ Road",
              addressLocality: "Delhi",
              postalCode: "110001",
              addressCountry: "IN",
            },
            openingHours: "Mo-Su 10:00-20:00",
            url: "https://satya-tattoo.vercel.app/",
            sameAs: [
              "https://facebook.com/yourpage",
              "https://instagram.com/yourpage",
            ],
          }),
        }}
      />
    </main>
  );
}
