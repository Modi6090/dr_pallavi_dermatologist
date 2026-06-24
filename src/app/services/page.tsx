import { Metadata } from "next";
import { ServicesPage } from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Our Services | Skin, Hair & Cosmetic Treatments — Dr. Pallawi's Clinic",
  description:
    "Explore our range of dermatology, hair, and cosmetic treatments including acne, pigmentation, PRP therapy, Hydra Facial, laser therapy, and more.",
};

export default function Services() {
  return <ServicesPage />;
}
