"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/gallery", label: "Gallery" },

    ];

    return (
        <footer className="bg-black text-white py-8 px-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 text-center md:text-left">

                {/* Logo + Info */}
                <div>
                    <Image src="/logo.png" alt="Satya Tattoo Logo" width={90} height={90} />

                </div>

                {/* Nav Links */}
                <div className="flex flex-col space-y-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm ${pathname === link.href
                                ? "text-red-500 font-semibold"
                                : "hover:text-red-400"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-red-500 text-xl font-bold">CALL US</p>
                    <p className="text-xl  font-bold">
                        <a href="tel:+917033124566" className="hover:text-red-600">
                            +91 7033124566
                        </a>
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center mt-5">
                <p className="text-xs">© 2010-2018 Satya Tattoo Studio</p>
                <p className="text-xs">All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
