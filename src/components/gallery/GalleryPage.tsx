"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop", category: "Skin", title: "Acne Treatment Result", aspect: "tall" },
  { id: 2, src: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800&auto=format&fit=crop", category: "Hair", title: "Hair Restoration", aspect: "wide" },
  { id: 3, src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop", category: "Cosmetic", title: "Facial Rejuvenation", aspect: "square" },
  { id: 4, src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop", category: "Skin", title: "Pigmentation Treatment", aspect: "tall" },
  { id: 5, src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop", category: "Cosmetic", title: "Chemical Peel Results", aspect: "square" },
  { id: 6, src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop", category: "Skin", title: "Eczema Recovery", aspect: "wide" },
  { id: 7, src: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop", category: "Hair", title: "PRP Therapy Before/After", aspect: "tall" },
  { id: 8, src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop", category: "Cosmetic", title: "Anti-aging Treatment", aspect: "square" },
  { id: 9, src: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=800&auto=format&fit=crop", category: "Skin", title: "Clear Skin Journey", aspect: "wide" },
];

const filters = ["All", "Skin", "Hair", "Cosmetic"];

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<(typeof galleryImages)[0] | null>(null);

  const filteredImages =
    activeFilter === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              Before & After Gallery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real patient transformations showcasing the results of our advanced dermatology and cosmetic treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setLightboxImage(img)}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-shadow duration-300 ${
                      img.aspect === "tall"
                        ? "aspect-[3/4]"
                        : img.aspect === "wide"
                          ? "aspect-[4/3]"
                          : "aspect-square"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                        <p className="text-white font-semibold text-sm">{img.title}</p>
                        <span className="text-white/70 text-xs">{img.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
                <Image src={lightboxImage.src} alt={lightboxImage.title} fill className="object-contain" />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-bold">{lightboxImage.title}</h3>
                <span className="text-white/60 text-sm">{lightboxImage.category} Treatment</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
