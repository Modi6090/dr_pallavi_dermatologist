import { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Dr. Pallawi's Skin & Hair Clinic, Jamshedpur",
  description:
    "Get in touch with Dr. Pallawi's Skin & Hair Clinic. Visit us in Jamshedpur, call, WhatsApp, or email for appointments and inquiries.",
};

export default function Contact() {
  return <ContactPage />;
}
