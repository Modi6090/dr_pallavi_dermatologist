"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function AboutDoctor() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1000&auto=format&fit=crop"
                alt="Dr. Pallawi working with a patient"
                fill
                className="object-cover"
              />
            </div>
            {/* Decor element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About The Doctor</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dr. Pallawi
              </h3>
              <p className="text-lg text-gray-600 mb-6 italic">
                "My mission is to help you feel confident in your own skin through safe, effective, and evidence-based treatments."
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Dr. Pallawi is a highly respected and board-certified dermatologist based in Jamshedpur, known for her expertise in clinical dermatology, aesthetic medicine, and hair restoration.
              </p>
              <p>
                With over a decade of experience, she combines her deep medical knowledge with a refined aesthetic eye to deliver personalized, natural-looking results for every patient.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Qualifications & Expertise</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "MBBS, MD Dermatology",
                  "Fellowship in Aesthetic Medicine",
                  "10+ Years Experience",
                  "Member of IADVL",
                  "Advanced Laser Certified",
                  "Hair Transplant Specialist"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
