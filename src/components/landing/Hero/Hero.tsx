"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BookingForm from "../../main/BookingForm/BookingForm";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero Section - Satya Tattoo Studio"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/Hero/hero.jpg"
          alt="Tattoo artist working on a sleeve tattoo in Satya Tattoo Studio"
          fill
          priority
          className="object-cover opacity-40"
        />
      </div>

      {/* Center Logo + Title */}
      <motion.div
        className="text-center space-y-8 pt-15 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo with descriptive alt */}
        <Image
          src="/logo.png"
          alt="Satya Tattoo Studio Logo"
          width={230}
          height={120}
          className="mx-auto"
          priority
        />


        {/* Call to Action */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="mt-0 bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg"
              aria-label="Book a tattoo appointment"
            >
              Contact for Your New Style
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-zinc-950 border border-zinc-800 text-white sm:max-w-md">
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

        {/* Subheading with keywords */}
        <h2 className="text-xl md:text-2xl tracking-widest uppercase">
           Tattoos <span className="text-red-500 text-3xl md:text-4xl ">✕</span> Piercing <span className="text-red-500 text-3xl md:text-4xl ">✕</span> Art
        </h2>

        {/* Supporting description */}
        <p className="max-w-2xl mx-auto px-10 text-gray-300 text-sm md:text-base leading-relaxed">
          Satya Tattoo Studio is a premium tattoo studio in India, known for
          creative designs, hygiene, and professional artists. 
        </p>
      </motion.div>
    </section>
  );
}
