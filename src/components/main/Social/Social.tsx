'use client';

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Facebook,
    Instagram,
    Mail,
    MessageCircle,
    Youtube,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const allIcons = [
    <Instagram key="i" />,
    <Facebook key="f" />,
    <MessageCircle key="w" />, // WhatsApp icon (you can replace with better one)
    <Mail key="m" />,
];

const FloatingButton: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [iconIndex, setIconIndex] = useState(0);

    // Rotate 1 icon at a time
    useEffect(() => {
        const interval = setInterval(() => {
            setIconIndex((prev) => (prev + 1) % allIcons.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    // AOS animation init
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: false,
        });
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
            {/* Floating social icons */}
            {open && (
                <div className="flex flex-col items-center mr-[3px] space-y-2">
                    <Button
                        variant="outline"
                        size="icon"
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="bg-[#131313] text-green-700 shadow-md transition-transform duration-300 hover:scale-110  "
                        onClick={() => window.open("https://wa.me/+917033124566")}
                    >
                        <MessageCircle className="h-5 w-5" />

                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="bg-[#131313] text-pink-600 shadow-md transition-transform duration-300 hover:scale-110"
                        onClick={() => window.open("https://www.instagram.com/satya_art_lab?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank")}
                    >
                        <Instagram className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="bg-[#131313] text-blue-600 shadow-md transition-transform duration-300 hover:scale-110"
                        onClick={() => window.open("https://www.facebook.com/Satya.artofficial?mibextid=rS40aB7S9Ucbxw6v", "_blank")}
                    >
                        <Facebook className="h-8 w-8" />
                    </Button>


                </div>

            )}

            {/* Main floating button with 1 rotating icon */}
            <Button
                size="icon"
                className="rounded-full bg-white border-2 border-red-500 text-red-500 shadow-lg hover:bg-primary/90 transition transform  hover:scale-105 p-6"
                onClick={() => setOpen((prev) => !prev)}
            >
                {allIcons[iconIndex]}
            </Button>
        </div>
    );
};

export default FloatingButton;
