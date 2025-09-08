"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <footer
      className="bg-black text-white py-8 px-6"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 text-center md:text-left">
        
        {/* Logo + Info */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" aria-label="Satya Tattoo Studio Homepage">
            <Image
              src="/logo.png"
              alt="Satya Tattoo Studio official logo"
              width={90}
              height={90}
              priority
            />
          </Link>
          <p className="text-xs mt-2 max-w-xs">
            Satya Tattoo Studio – premium tattoo artistry with professional
            hygiene standards and unique designs since 2010.
          </p>
        </div>

        {/* Nav Links */}
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-col space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm ${
                    pathname === link.href
                      ? "text-red-500 font-semibold"
                      : "hover:text-red-400"
                  }`}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <address className="flex flex-col justify-center items-center gap-4 not-italic">
          <p className="text-red-500 text-xl font-bold">Call Us</p>
          <p className="text-xl font-bold">
            <a
              href="tel:+917033124566"
              className="hover:text-red-600"
              aria-label="Call Satya Tattoo Studio"
            >
              +91 70331 24566
            </a>
          </p>
        </address>
      </div>

      {/* Bottom Copyright */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-5 gap-2 text-gray-400 text-xs">
        <p>© 2010–2025 Satya Tattoo Studio</p>
        <span className="hidden md:inline-block">|</span>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
