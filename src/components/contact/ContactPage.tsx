"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["123 Clinic Avenue", "Sakchi, Jamshedpur", "Jharkhand 831001, India"],
    action: { label: "Get Directions", href: "https://maps.google.com/?q=Jamshedpur+Jharkhand" },
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 65712 34567"],
    action: { label: "Call Now", href: "tel:+919876543210" },
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["contact@drpallawiclinic.com", "appointments@drpallawiclinic.com"],
    action: { label: "Send Email", href: "mailto:contact@drpallawiclinic.com" },
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Mon – Sat: 10:00 AM – 7:00 PM", "Sunday: Closed", "Public Holidays: Closed"],
    action: null,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have a question or want to schedule an appointment? We&apos;re here to help. Reach out to us through any of the
              channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${info.color}`}>
                  <info.icon className={`w-6 h-6 ${info.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.lines.map((line, idx) => (
                    <p key={idx} className="text-sm text-gray-600">
                      {line}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                  >
                    {info.action.label}
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + WhatsApp CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-[400px] lg:h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117170.46456820422!2d86.10786095!3d22.7872738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9b344!2sJamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Pallawi's Clinic Location — Jamshedpur"
              />
            </motion.div>

            {/* Quick Connect */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Connect</h3>
                <p className="text-gray-600 mb-6">
                  The fastest way to reach us is via WhatsApp. Send us a message and we&apos;ll respond within minutes during
                  clinic hours.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hi%20Dr.%20Pallawi%2C%20I%20would%20like%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full h-14 bg-[#25D366] text-white rounded-full font-semibold text-base hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Book an Appointment</h3>
                <p className="text-gray-600 mb-6">
                  Schedule your visit online. Choose your preferred date and time slot for a consultation.
                </p>
                <Link
                  href="/book"
                  className={buttonVariants({
                    size: "lg",
                    className: "w-full rounded-full h-14 text-base shadow-lg shadow-primary/20",
                  })}
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
