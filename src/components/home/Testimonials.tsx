"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    review: "I had severe acne issues for years. Dr. Pallawi's treatment plan worked wonders. Highly recommend her clinic for anyone struggling with skin problems.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Rahul Verma",
    review: "The PRP therapy for hair fall has shown great results. Very professional environment and the staff is extremely supportive throughout the process.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Anjali Gupta",
    review: "Best dermatologist in Jamshedpur! I got a Hydra Facial done before my wedding, and my skin was glowing. Thank you so much, doctor!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4 bg-yellow-50 text-yellow-800 px-4 py-2 rounded-full font-medium text-sm">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span>4.7 Rating from 500+ Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real stories and experiences from people who have transformed their skin and hair with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />
              
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed italic relative z-10">
                "{testimonial.review}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                  <p className="text-sm text-gray-500">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
