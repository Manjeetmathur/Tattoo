"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heart, Circle, Flower2, Eraser, ListPlus } from "lucide-react";
import BookingForm from "../../main/BookingForm/BookingForm";

export default function ServicesSection() {
  const services = [
    {
      title: "Name Tattoo",
      description: "Solid black designs to learn consistency and depth.",
      icon: <Flower2 className="w-10 h-10 text-red-600" />,
    },
    {
      title: "Designed Tattoo",
      description: "Bold lines and classic designs, perfect for beginners.",
      icon: <Heart className="w-10 h-10 text-red-600" />,
    },
    {
      title: "Linework Tattoo",
      description: "Simple and clean line tattoos for practicing precision.",
      icon: <ListPlus className="w-10 h-10 text-red-600" />,
    },
    {
      title: "Dotwork Tattoo",
      description: "Creative shading using dots, great for detailing practice.",
      icon: <Circle className="w-10 h-10 text-red-600" />,
    },
    {
      title: "Minimalist Tattoo",
      description: "Small and simple tattoos, ideal for beginners.",
      icon: <Eraser className="w-10 h-10 text-red-600" />,
    },
  ];

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-10 text-center">
      <h2 className="text-3xl font-bold text-white">OUR SERVICES</h2>
      <p className="text-gray-400 mt-2 text-sm sm:text-base">
        You can reach out to us for any of the services listed below.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-zinc-900 text-white border border-zinc-800 hover:scale-105 transition-transform duration-300"
          >
            <CardContent className="p-6 flex flex-col items-center space-y-4">
              {service.icon}
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Booking Button with Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg">
            Contact for Booking
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

          <BookingForm/>
        </DialogContent>
      </Dialog>
    </section>
  );
}
