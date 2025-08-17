"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import BookingForm from "../../main/BookingForm/BookingForm";
import Image from "next/image";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-[90vh] bg-black text-white grid grid-cols-1 md:grid-cols-2"
    >
      {/* Left Side - Image */}
      <div className="relative w-full h-[90vh]">
        <Image
          src="/Hero/tattomachine.jpg"
          alt="Professional tattoo machine at Satya Tattoo Studio"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Side - Content */}
      <article
        className="
          absolute left-1/2 -translate-x-1/2 w-[100%] bg-black/70 p-8 
          md:static md:translate-x-0 md:w-full md:bg-black md:p-16 md:rounded-none
          flex flex-col justify-center h-full
        "
      >
        <header>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to <span className="text-red-600">Satya Tattoo</span>
          </h2>
        </header>

        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          At <strong>Satya Tattoo Studio</strong>, we bring your vision to life with
          precision, passion, and artistry. Located in the heart of the city, our
          studio specializes in <em>custom tattoo designs, fine line tattoos, realism,
          and traditional tattoo art</em>.
        </p>

        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          Our team of skilled tattoo artists ensures that every piece reflects your
          unique personality. We prioritize <strong>hygiene, safety, and creativity</strong>,
          making us one of the most trusted tattoo studios in India.
        </p>

        <Button
          className="bg-red-600 hover:bg-red-700 text-white w-fit px-6 py-3 text-lg"
          onClick={() => setOpen(true)}
          aria-label="Book a tattoo appointment at Satya Tattoo Studio"
        >
          Contact For a New Identity
        </Button>
      </article>

      {/* Booking Form Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px] bg-black text-white">
          <DialogHeader>
              <DialogTitle className="text-xl font-bold text-red-500">
                Book a Tattoo (On Delhi)
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                Fill in your details and we’ll reach out to confirm your
                booking.
              </DialogDescription>
            </DialogHeader>
          <BookingForm />
        </DialogContent>
      </Dialog>
    </section>
  );
}
