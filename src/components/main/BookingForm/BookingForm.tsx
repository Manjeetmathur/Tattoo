"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage("✅ Request sent successfully! We'll contact you soon.");
        setFormData({ name: "", phone: "", email: "" });
      } else {
        setMessage("❌ Failed to send request. Try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className=" rounded-[20%] py-16 px-6 flex justify-center items-center">
      
      <motion.div
        className="flex flex-col items-center gap-4 w-full max-w-3xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full md:w-64 bg-white/10 border border-gray-600 text-white placeholder-gray-400 text-center focus:border-red-500 focus:ring-red-500"
        />
        <Input
          name="phone"
          type="tel"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full md:w-64 bg-white/10 border border-gray-600 text-white placeholder-gray-400 text-center focus:border-red-500 focus:ring-red-500"
        />
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full md:w-64 bg-white/10 border border-gray-600 text-white placeholder-gray-400 text-center focus:border-red-500 focus:ring-red-500"
        />
        <Button
          disabled={loading}
          onClick={handleSubmit}
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-none font-semibold tracking-wide shadow-md w-full md:w-auto"
        >
          {loading ? "Sending..." : "Contact For a New Tattoo"}
        </Button>
        {message && <p className="text-sm text-gray-300 mt-2">{message}</p>}
      </motion.div>
    </section>
  );
}
