"use client";

import { buttonVariants } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ShieldCheck, Award, Users } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              Accepting New Patients
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1]">
              Healthy Skin. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Beautiful Hair.
              </span> <br/>
              Expert Care.
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Trusted by 500+ happy patients with a 4.7-star rating. Experience advanced dermatology, hair restoration, and cosmetic treatments in Jamshedpur.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className={buttonVariants({ size: "lg", className: "rounded-full text-base h-14 px-8 shadow-xl shadow-primary/20" })}>
                Book Appointment
              </Link>
              <Link href="https://wa.me/919876543210" target="_blank" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full text-base h-14 px-8 border-gray-300 hover:bg-gray-50" })}>
                WhatsApp Consultation
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-center sm:items-start">
                <Users className="w-6 h-6 text-primary mb-2" />
                <span className="font-bold text-gray-900 text-lg">500+</span>
                <span className="text-xs text-gray-500 font-medium">Happy Patients</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <Star className="w-6 h-6 text-yellow-500 mb-2 fill-yellow-500" />
                <span className="font-bold text-gray-900 text-lg">4.7★</span>
                <span className="text-xs text-gray-500 font-medium">Google Rating</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <Award className="w-6 h-6 text-primary mb-2" />
                <span className="font-bold text-gray-900 text-lg">10+ Yrs</span>
                <span className="text-xs text-gray-500 font-medium">Experience</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                <span className="font-bold text-gray-900 text-lg">Advanced</span>
                <span className="text-xs text-gray-500 font-medium">Care</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop"
                alt="Dr. Pallawi Professional Portrait"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              
              {/* Floating review card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex text-yellow-500 mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-sm font-medium text-gray-800">"The best dermatologist in Jamshedpur! My skin has never looked better."</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full rounded-[2.5rem] border-2 border-primary/20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
