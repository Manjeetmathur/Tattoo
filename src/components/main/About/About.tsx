"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BookingForm from "../BookingForm/BookingForm";

export default function AboutPage() {
  return (
    <section
      className="bg-neutral-900 min-h-screen py-36 pt-40 px-6 flex items-center"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center">
        {/* Studio Image */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/banner.png"
            alt="Satya Tattoo Studio interior with professional equipment in Delhi"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* SEO Content */}
        <Card className="bg-neutral-800 border border-neutral-700 shadow-lg rounded-2xl">
          <CardContent className="p-8 text-gray-300">
            <article itemScope itemType="https://schema.org/LocalBusiness">
              <h1
                id="about-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                itemProp="name"
              >
                About Satya Tattoo Studio
              </h1>

              <p className="mb-4 leading-relaxed" itemProp="description">
                Welcome to <strong>Satya Tattoo Studio</strong> — one of the{" "}
                <em>best tattoo studios in India</em> where creativity meets
                professionalism. Since 2010, we’ve been creating{" "}
                <strong>custom tattoos</strong> that tell stories, capture
                emotions, and become timeless memories.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-3">
                Why Choose Our Tattoo Artists?
              </h2>
              <p className="mb-4 leading-relaxed">
                Our experienced <strong>tattoo artists</strong> specialize in{" "}
                <em>custom designs, realism tattoos, and unique artwork</em>.
                Every piece we create is crafted with passion, precision, and
                your individuality in mind.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-3">
                Hygienic & Safe Tattoo Environment
              </h2>
              <p className="mb-4 leading-relaxed">
                Your health and safety come first. Satya Tattoo Studio maintains
                a <em>sterile, hygienic, and comfortable environment</em>,
                following international safety standards. We use only{" "}
                <strong>premium-quality tattoo inks and equipment</strong>.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-3">
                Book Your Tattoo Appointment
              </h2>
              <p className="leading-relaxed">
                Whether it’s your first tattoo or your tenth, our Delhi studio
                is the perfect place to bring your vision to life. Contact us
                today for a <strong>free tattoo consultation</strong> and let’s
                design your next masterpiece together.
              </p>
            </article>

            {/* Call to Action */}
            <div className="flex justify-center items-center mt-10">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg"
                    aria-label="Book a tattoo appointment at Satya Tattoo Studio Delhi"
                  >
                    Book Your Tattoo Consultation
                  </Button>
                </DialogTrigger>

                <DialogContent className="bg-zinc-950 border border-zinc-800 text-white sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-red-500">
                      Book a Tattoo (Delhi Studio)
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Fill in your details and our team will contact you to
                      confirm your appointment.
                    </DialogDescription>
                  </DialogHeader>

                  <BookingForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TattooParlor",
            name: "Satya Tattoo Studio",
            image: "https://yourdomain.com/banner.png",
            description:
              "Satya Tattoo Studio in Delhi offers custom tattoos, realism, and unique designs with professional hygiene standards since 2010.",
            telephone: "+91-7033124566",
            address: {
              "@type": "PostalAddress",
              streetAddress: "XYZ Road",
              addressLocality: "Delhi",
              postalCode: "110001",
              addressCountry: "IN",
            },
            openingHours: "Mo-Su 10:00-20:00",
            url: "https://yourdomain.com",
            sameAs: [
              "https://facebook.com/yourpage",
              "https://instagram.com/yourpage",
            ],
          }),
        }}
      />
    </section>
  );
}
