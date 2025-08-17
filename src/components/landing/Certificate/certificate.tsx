"use client";

import Image from "next/image";

export default function Certification() {
  return (
    <section className="bg-neutral-900 py-16 px-6 pt-40">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Certification
        </h2>
        <p className="text-gray-400">
          We are proudly certified and recognized for maintaining the highest
          standards of hygiene, safety, and artistry in tattooing.
        </p>
      </div>

      {/* Certificate Image */}
      <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-neutral-700 bg-neutral-800">
        <div className="relative w-full h-auto">
          <Image
            src="/certificate.png" // replace with your actual certificate image
            alt="Certification"
            width={1200}
            height={800}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
