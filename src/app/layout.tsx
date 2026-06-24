import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/shared/FloatingActions";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Pallawi's Skin & Hair Clinic | Best Dermatologist in Jamshedpur",
  description: "Trusted by 500+ happy patients with a 4.7-star rating. Advanced dermatology, hair, and cosmetic treatments in Jamshedpur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <FloatingActions />
        <Toaster />
      </body>
    </html>
  );
}
