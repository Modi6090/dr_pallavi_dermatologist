"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <motion.a
        href="tel:+919876543210"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="bg-blue-600 text-white p-3.5 rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg shadow-[#25D366]/30 hover:bg-[#20bd5a] transition-colors"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Book Appointment (Mobile Only if floating, or everywhere) */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        className="md:hidden"
      >
        <Link
          href="/book"
          className="flex items-center justify-center bg-primary text-white p-3.5 rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
          aria-label="Book Appointment"
        >
          <Calendar className="w-6 h-6" />
        </Link>
      </motion.div>
    </div>
  );
}
