"use client";

import { motion } from "framer-motion";
import { Sparkles, Scissors, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const services = [
  {
    id: "skin",
    title: "Skin Treatments",
    description: "Advanced solutions for acne, pigmentation, fungal infections, and psoriasis. Achieve clear and healthy skin.",
    icon: Activity,
    features: ["Acne Treatment", "Pigmentation", "Fungal Infection", "Psoriasis"],
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: "hair",
    title: "Hair Treatments",
    description: "Effective therapies for hair fall, dandruff, and alopecia. Restore your hair's natural volume and strength.",
    icon: Scissors,
    features: ["Hair Fall Treatment", "PRP Therapy", "Dandruff Treatment", "Alopecia"],
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Procedures",
    description: "Enhance your natural beauty with premium cosmetic treatments, anti-aging therapies, and facial rejuvenation.",
    icon: Sparkles,
    features: ["Hydra Facial", "Chemical Peel", "Laser Treatment", "Anti-aging"],
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  }
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Care for Your Skin & Hair
          </h3>
          <p className="text-lg text-gray-600">
            We offer a wide range of dermatological and cosmetic treatments tailored to your unique needs using the latest technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-6 flex-1">{service.description}</p>
              
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href={`/services#${service.id}`} className={buttonVariants({ variant: "ghost", className: "w-full justify-between hover:bg-gray-50 text-primary font-semibold group" })}>
                Explore Treatments
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
