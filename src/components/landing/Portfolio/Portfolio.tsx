"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PortfolioSection() {
    const works = [
        { src: "/gallery/g1.png", alt: "Tattoo 1" },
        { src: "/gallery/g2.png", alt: "Tattoo 2" },
        { src: "/gallery/g3.png", alt: "Tattoo 3" },
        { src: "/gallery/g4.png", alt: "Tattoo 4" },
        { src: "/gallery/g6.png", alt: "Tattoo 5" },
    ];

    return (
        <section className="bg-neutral-900 py-16 px-6 text-center">
            <h2 className="text-white text-3xl font-bold tracking-wide mb-4">
                OUR WORKS
            </h2>
            <p className="text-gray-400 mb-10">
                Examples of tattoos created by our professional artists
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                {works.map((work, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg group relative"
                    >
                        <Image
                            src={work.src}
                            alt={work.alt}
                            width={400}
                            height={500}
                            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>

            <div  className="mt-10">
                <Link href={"/gallery"}>
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
                        MORE WORKS
                    </Button>
                </Link>
            </div>
        </section>
    );
}
