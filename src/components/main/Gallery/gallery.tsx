"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function Gallery() {
  const images = [
    { src: "/gallery/g1.png", alt: "Tattoo 1", w: 600, h: 800 },
    { src: "/gallery/g2.png", alt: "Tattoo 2", w: 600, h: 750 },
    { src: "/gallery/g3.png", alt: "Tattoo 3", w: 700, h: 700 },
    { src: "/gallery/g4.png", alt: "Tattoo 4", w: 600, h: 850 },
    { src: "/gallery/g6.png", alt: "Tattoo 5", w: 600, h: 900 },
    { src: "/gallery/g7.png", alt: "Tattoo 1", w: 600, h: 800 },
    { src: "/gallery/g8.png", alt: "Tattoo 2", w: 600, h: 750 },
    { src: "/gallery/g9.png", alt: "Tattoo 3", w: 700, h: 700 },
    { src: "/gallery/g10.png", alt: "Tattoo 4", w: 600, h: 850 },
    { src: "/gallery/g11.png", alt: "Tattoo 5", w: 600, h: 900 },
    { src: "/gallery/g12.png", alt: "Tattoo 5", w: 600, h: 900 },
  ];

  return (
    <section className="bg-neutral-900 py-16 px-6 pt-40">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Gallery
        </h2>
        <p className="text-gray-400">
          Explore some of our finest tattoo artworks and studio moments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <Card
            key={index}
            className="overflow-hidden rounded-xl border border-neutral-700 bg-neutral-800 hover:scale-105 transition-transform shadow-md flex justify-center"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={1000}
              className="object-contain w-full h-auto"
            />
          </Card>
        ))}
      </div>
    </section>
  );
}
