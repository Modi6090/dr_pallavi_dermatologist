"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Doctor" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-gray-100 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              123 Clinic Ave, Jamshedpur, India
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-primary" />
              +91 98765 43210
            </span>
          </div>
          <div>
            Opening Hours: Mon - Sat, 10:00 AM - 7:00 PM
          </div>
        </div>

        {/* Main nav */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-xl">
              <span className="text-primary font-bold text-2xl tracking-tight">DP</span>
            </div>
            <div>
              <h1 className="font-bold text-xl leading-none text-gray-900">Dr. Pallawi's</h1>
              <p className="text-xs font-medium text-primary uppercase tracking-wider">Skin & Hair Clinic</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary font-semibold" : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/book" className={buttonVariants({ className: "rounded-full shadow-lg shadow-primary/30" })}>
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b"
          >
            <div className="container px-4 py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors ${
                    pathname === link.href ? "text-primary" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/book" onClick={() => setIsOpen(false)} className={buttonVariants({ className: "w-full rounded-full mt-4" })}>
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
