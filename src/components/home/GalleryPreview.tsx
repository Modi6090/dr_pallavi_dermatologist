"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=600&auto=format&fit=crop", category: "Skin" },
  { id: 2, src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=600&auto=format&fit=crop", category: "Hair" },
  { id: 3, src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop", category: "Cosmetic" },
  { id: 4, src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop", category: "Skin" },
];

export function GalleryPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Real Results</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Before & After Gallery
            </h3>
            <p className="text-lg text-gray-600">
              Browse through our gallery to see the transformative results achieved by our patients.
            </p>
          </div>
          <Link href="/gallery" className={buttonVariants({ variant: "outline", className: "shrink-0 rounded-full" })}>
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-md"
            >
              <Image
                src={img.src}
                alt={`${img.category} treatment before and after`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium text-sm backdrop-blur-sm">
                  {img.category} Result
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
