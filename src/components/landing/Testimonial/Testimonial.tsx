"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TestimonialSection() {
 const testimonials = [
  {
    name: "Rohit Sharma",
    feedback:
      "Got my first tattoo here and I’m so impressed with the detailing. The artist patiently explained everything and made me feel super comfortable.",
    img: "/clients/client1.jpg",
  },
  {
    name: "Priya Singh",
    feedback:
      "Amazing work! The design came out exactly as I imagined. The studio is very hygienic and the vibe is just perfect.Just Love it and praise it",
    img: "/clients/client2.jpg",
  },
  {
    name: "Arjun Verma",
    feedback:
      "I wanted a custom design and they nailed it! The precision and creativity are outstanding. Definitely the best tattoo place in town.",
    img: "/clients/client3.jpg",
  },
  {
    name: "Neha Patel",
    feedback:
      "Super professional team! They guided me through the entire process and the result is beautiful. Totally worth it!. thanks for a new love",
    img: "/clients/client4.jpg",
  },
];

  return (
    <section className="bg-neutral-900 py-10 px-6">
      <h2 className="text-white text-3xl font-bold tracking-wide text-center mb-4">
        WHAT OUR CLIENTS SAY
      </h2>
      <p className="text-gray-400 text-center mb-10">
        Real experiences from people who trusted us with their tattoos
      </p>

      <div className="max-w-4xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 mb-25">
                <Card className="bg-neutral-800 border border-neutral-700 shadow-lg rounded-xl overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-gray-300">
                    {/* <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-red-600 mb-4">
                      <Image
                        src={testimonial.img}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div> */}
                    <p className="italic text-center">
                      “{testimonial.feedback}”
                    </p>
                    <h4 className="mt-4 font-semibold text-red-500">
                      {testimonial.name}
                    </h4>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4">
  <CarouselPrevious className="text-red-500 border border-gray-600 hover:bg-red-600" />
  <CarouselNext className="text-red-500 border border-gray-600 hover:bg-red-600" />
</div>

        </Carousel>
      </div>
    </section>
  );
}
