"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 inset-x-0 bg-neutral-900/70 backdrop-blur-md text-white z-20">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
                {/* Left Info */}
                <div className="text-left md:text-sm h">
                    <p className="text-red-500 text-xl  font-bold">On Delhi</p>
                    <p>Mon-Sun 9:00–18:00</p>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-sm uppercase font-semibold">
                    <Link href="/" className="hover:text-red-500 transition-colors">
                        Home
                    </Link>
                    <Link href="/gallery" className="hover:text-red-500 transition-colors">
                        Gallery
                    </Link>
                    {/* <Link href="/reviews" className="hover:text-red-500 transition-colors">
                        Reviews
                    </Link> */}
                    <Link href="/about" className="hover:text-red-500 transition-colors">
                        About Us
                    </Link>
                </nav>

                {/* Right Info (hidden on small screens) */}
                <div className="hidden md:block">
                    <p className="text-red-500 font-bold">CALL US</p>
                    <p className="text-xl md:text-2xl font-bold">
                        <a href="tel:+917033124566" className="hover:text-red-600">
                            +91 7033124566
                        </a>
                    </p>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 rounded-lg focus:outline-none"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 py-6 text-sm uppercase font-semibold bg-neutral-900/70 backdrop-blur-md">
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-red-500"
                    >
                        Home
                    </Link>
                    <Link
                        href="/gallery"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-red-500"
                    >
                        Gallery
                    </Link>
                    {/* <Link
                        href="/reviews"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-red-500"
                    >
                        Reviews
                    </Link> */}
                    <Link
                        href="/about"
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-red-500"
                    >
                        About Us
                    </Link>
                    <div className="flex  justify-center items-center gap-4">
                        <p className="text-red-500 text-xl font-bold">CALL US</p>
                        <p className="text-xl md:text-2xl font-bold">
                            <a href="tel:+917033124566" className="hover:text-red-600">
                                +91 7033124566
                            </a>
                        </p>
                    </div>

                </div>
            )}
        </header>
    );
}
