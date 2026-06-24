import { Hero } from "@/components/home/Hero";
import { AboutDoctor } from "@/components/home/AboutDoctor";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutDoctor />
      <ServicesOverview />
      <GalleryPreview />
      <Testimonials />
    </>
  );
}
