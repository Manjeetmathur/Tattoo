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
                        alt="Tattoo studio interior with professional equipment"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* SEO Content */}
                <Card className="bg-neutral-800 border border-neutral-700 shadow-lg rounded-2xl">
                    <CardContent className="p-8 text-gray-300">
                        <article>
                            <h1
                                id="about-heading"
                                className="text-3xl md:text-4xl font-bold text-white mb-4"
                            >
                                About Our Tattoo Studio
                            </h1>

                            <p className="mb-4 leading-relaxed">
                                Welcome to <strong>Satya Tattoo Studio</strong> — the leading{" "}
                                <em>tattoo studio in India</em> where creativity meets
                                professionalism. We believe tattoos are more than just ink on
                                skin; they are stories, emotions, and memories etched forever.
                            </p>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Why Choose Our Tattoo Artists?
                            </h2>
                            <p className="mb-4 leading-relaxed">
                                Our team of skilled tattoo artists brings years of experience
                                and a deep passion for art. From{" "}
                                <strong>custom tattoo designs</strong> to{" "}
                                <strong>realism tattoos</strong>, we ensure every piece of art
                                reflects your individuality and vision.
                            </p>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Hygienic & Safe Tattoo Environment
                            </h2>
                            <p className="mb-4 leading-relaxed">
                                Your safety is our priority. We maintain a{" "}
                                <em>sterile, hygienic, and comfortable environment</em>, using
                                only high-quality, safe tattoo equipment to give you complete
                                peace of mind during your tattooing experience.
                            </p>

                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Book Your Tattoo Appointment
                            </h2>
                            <p className="leading-relaxed">
                                Whether it’s your first tattoo or an addition to your collection,
                                our studio is the perfect place to bring your ideas to life.{" "}

                                to book your free consultation and let’s craft your story
                                together.
                            </p>
                        </article>
                        <div className="flex justify-center items-center mt-10">
                            {/* Call to Action */}
                            <Dialog >
                                <DialogTrigger asChild className="mt-10">
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

                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
