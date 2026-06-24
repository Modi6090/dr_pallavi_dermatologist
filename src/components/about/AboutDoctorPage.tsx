"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  CheckCircle2,
  GraduationCap,
  BriefcaseMedical,
  Award,
  Heart,
  Stethoscope,
  Calendar,
} from "lucide-react";

const timeline = [
  {
    year: "2008",
    title: "MBBS",
    description: "Completed MBBS from a reputed medical college with distinction in Dermatology.",
    icon: GraduationCap,
  },
  {
    year: "2012",
    title: "MD Dermatology",
    description: "Earned MD in Dermatology, Venereology & Leprosy with specialized clinical training.",
    icon: Stethoscope,
  },
  {
    year: "2013",
    title: "Fellowship in Aesthetic Medicine",
    description: "Advanced training in laser therapy, chemical peels, PRP, and anti-aging treatments.",
    icon: Award,
  },
  {
    year: "2015",
    title: "Clinic Established in Jamshedpur",
    description: "Founded Dr. Pallawi's Skin & Hair Clinic, serving patients across Jharkhand.",
    icon: BriefcaseMedical,
  },
  {
    year: "2024",
    title: "500+ Happy Patients & 4.7★ Rating",
    description: "Built a trusted reputation with hundreds of satisfied patients and top Google reviews.",
    icon: Heart,
  },
];

const specializations = [
  "Clinical Dermatology",
  "Cosmetic Dermatology",
  "Hair Restoration & PRP Therapy",
  "Laser Treatments",
  "Anti-aging Medicine",
  "Acne & Scar Management",
  "Psoriasis & Eczema Care",
  "Fungal Infection Treatment",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function AboutDoctorPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative bg-slate-50 py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5 rounded-l-[100px] -z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Stethoscope className="w-4 h-4" />
                About The Doctor
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                Dr. Pallawi
              </h1>
              <p className="text-xl text-gray-500 font-medium">
                MBBS, MD (Dermatology) — Fellowship in Aesthetic Medicine
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                With over a decade of experience, Dr. Pallawi is one of Jamshedpur&apos;s most trusted dermatologists, combining 
                deep clinical knowledge with a refined aesthetic eye to deliver safe, effective, and natural-looking results.
              </p>
              <Link
                href="/book"
                className={buttonVariants({
                  size: "lg",
                  className: "rounded-full h-14 px-8 shadow-xl shadow-primary/20 text-base",
                })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Consultation
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=800&auto=format&fit=crop"
                  alt="Dr. Pallawi — Dermatologist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed italic">
              &ldquo;My mission is to help every patient feel confident in their own skin. I believe in providing 
              honest, evidence-based care that is tailored to each individual — because your skin deserves the best.&rdquo;
            </blockquote>
            <p className="mt-6 text-lg font-semibold text-primary">— Dr. Pallawi</p>
          </motion.div>
        </div>
      </section>

      {/* Qualifications & Specializations */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Qualifications */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Qualifications</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Education & Certifications</h3>
              <div className="space-y-5">
                {[
                  { label: "MBBS", detail: "Bachelor of Medicine, Bachelor of Surgery" },
                  { label: "MD Dermatology", detail: "Doctor of Medicine — Dermatology, Venereology & Leprosy" },
                  { label: "Fellowship", detail: "Fellowship in Aesthetic Medicine & Cosmetology" },
                  { label: "IADVL Member", detail: "Indian Association of Dermatologists, Venereologists & Leprologists" },
                  { label: "Advanced Laser Certified", detail: "Certified in advanced laser & light-based therapies" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-500">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Expertise</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Areas of Specialization</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specializations.map((spec, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="font-medium text-gray-800">{spec}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Journey</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Timeline</h3>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex gap-6 md:gap-8 items-start"
                >
                  {/* Icon circle */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1 pb-8 border-b border-gray-100 last:border-0">
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                    <h4 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h4>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
