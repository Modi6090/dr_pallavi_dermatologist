"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Activity,
  Scissors,
  Sparkles,
  ArrowRight,
  Droplets,
  Zap,
  ShieldCheck,
  Leaf,
  Waves,
  Sun,
  Palette,
  Flame,
  Wind,
} from "lucide-react";

const skinTreatments = [
  {
    name: "Acne Treatment",
    slug: "acne-treatment",
    description: "Advanced medical and cosmetic treatments to clear active acne, prevent breakouts, and reduce scarring.",
    icon: Droplets,
  },
  {
    name: "Pigmentation Treatment",
    slug: "pigmentation-treatment",
    description: "Targeted therapies for dark spots, melasma, uneven skin tone, and hyperpigmentation correction.",
    icon: Palette,
  },
  {
    name: "Fungal Infection",
    slug: "fungal-infection-treatment",
    description: "Effective antifungal treatments for ringworm, tinea, candidiasis, and other skin infections.",
    icon: ShieldCheck,
  },
  {
    name: "Psoriasis Treatment",
    slug: "psoriasis-treatment",
    description: "Comprehensive management plans for psoriasis with topical, systemic, and light-based therapies.",
    icon: Leaf,
  },
  {
    name: "Eczema Treatment",
    slug: "eczema-treatment",
    description: "Gentle and effective treatment to soothe eczema flares, reduce itching, and restore skin barrier.",
    icon: Waves,
  },
];

const hairTreatments = [
  {
    name: "Hair Fall Treatment",
    slug: "hair-fall-treatment",
    description: "Root-cause diagnosis and personalized treatment plans to stop hair loss and promote regrowth.",
    icon: Wind,
  },
  {
    name: "PRP Therapy",
    slug: "prp-therapy",
    description: "Platelet-Rich Plasma therapy to stimulate dormant hair follicles and strengthen existing hair.",
    icon: Zap,
  },
  {
    name: "Dandruff Treatment",
    slug: "dandruff-treatment",
    description: "Medicated solutions and scalp care routines to permanently eliminate dandruff and flaky scalp.",
    icon: Droplets,
  },
  {
    name: "Alopecia Treatment",
    slug: "alopecia-treatment",
    description: "Specialized treatment for alopecia areata, androgenic alopecia, and pattern baldness.",
    icon: ShieldCheck,
  },
];

const cosmeticTreatments = [
  {
    name: "Hydra Facial",
    slug: "hydra-facial",
    description: "Multi-step facial for deep cleansing, exfoliation, extraction, hydration, and antioxidant protection.",
    icon: Droplets,
  },
  {
    name: "Chemical Peel",
    slug: "chemical-peel",
    description: "Medical-grade peels for skin rejuvenation, scar reduction, and improved skin texture and tone.",
    icon: Flame,
  },
  {
    name: "Laser Treatment",
    slug: "laser-treatment",
    description: "State-of-the-art laser therapies for hair removal, scar treatment, skin tightening, and pigmentation.",
    icon: Zap,
  },
  {
    name: "Anti-aging Treatment",
    slug: "anti-aging-treatment",
    description: "Turn back the clock with Botox, dermal fillers, collagen therapy, and skin tightening procedures.",
    icon: Sun,
  },
  {
    name: "Skin Rejuvenation",
    slug: "skin-rejuvenation",
    description: "Comprehensive treatments to restore youthful glow, improve elasticity, and diminish fine lines.",
    icon: Sparkles,
  },
];

const categories = [
  {
    id: "skin",
    title: "Skin Treatments",
    subtitle: "Clear, healthy, radiant skin",
    icon: Activity,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    items: skinTreatments,
  },
  {
    id: "hair",
    title: "Hair Treatments",
    subtitle: "Restore strength and volume",
    icon: Scissors,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
    items: hairTreatments,
  },
  {
    id: "cosmetic",
    title: "Cosmetic Procedures",
    subtitle: "Enhance your natural beauty",
    icon: Sparkles,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
    items: cosmeticTreatments,
  },
];

export function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-primary/5 blur-[100px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Our Treatments
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We provide a comprehensive range of dermatological, hair restoration, and cosmetic procedures 
              using the latest technology and evidence-based practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {categories.map((category, catIdx) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-20 md:py-24 ${catIdx % 2 === 1 ? "bg-slate-50" : "bg-white"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${category.color}`}>
                <category.icon className={`w-7 h-7 ${category.iconColor}`} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                <p className="text-gray-500 mt-1">{category.subtitle}</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    href={`/services/${item.slug}`}
                    className={`group block p-6 rounded-2xl border bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full ${category.borderColor} border-opacity-50 hover:border-opacity-100`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${category.color}`}>
                      <item.icon className={`w-6 h-6 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Not Sure Which Treatment is Right for You?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Book a consultation with Dr. Pallawi for a personalized assessment and treatment plan tailored to your needs.
            </p>
            <Link
              href="/book"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full h-14 px-10 shadow-xl shadow-primary/20 text-base",
              })}
            >
              Book Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
