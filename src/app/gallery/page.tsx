import { Metadata } from "next";
import { GalleryPage } from "@/components/gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Before & After Gallery | Dr. Pallawi's Skin & Hair Clinic",
  description:
    "Browse real patient transformations. See before and after results for acne, hair fall, pigmentation, and cosmetic treatments.",
};

export default function Gallery() {
  return <GalleryPage />;
}
