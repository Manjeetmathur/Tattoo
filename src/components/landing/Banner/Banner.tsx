"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Banner() {
  const [showOffer, setShowOffer] = useState(false);

  return (
    <section
      className="relative h-[80vh] w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/banner.png')", // replace with your banner image
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          🎉 Exciting Offer Just for You!
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 font-medium">
          Book your <span className="text-red-500 font-bold">Tattoo Today</span> &amp; Unlock Your Style
        </p>
        <Button
          className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-none font-semibold shadow-lg tracking-wide text-lg"
          onClick={() => setShowOffer(true)}
        >
          Contact For a New Tattoo
        </Button>
      </motion.div>

      {/* Popup Offer */}
      {showOffer && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Limited Time Tattoo Offer 🎁
            </h2>
            <p className="text-gray-700 mb-6">
              Get <span className="font-bold">10% OFF</span> on your first tattoo booking!  
              Don’t miss out – book your slot today.
            </p>
            <Button
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-none font-semibold tracking-wide shadow-md w-full"
              onClick={() => setShowOffer(false)}
            >
              Close
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
