import { Metadata } from "next";
import { AboutDoctorPage } from "@/components/about/AboutDoctorPage";

export const metadata: Metadata = {
  title: "About Dr. Pallawi | Best Dermatologist in Jamshedpur",
  description:
    "Learn about Dr. Pallawi — MBBS, MD Dermatology with 10+ years of experience. Trusted skin, hair, and cosmetic specialist in Jamshedpur.",
};

export default function AboutPage() {
  return <AboutDoctorPage />;
}
