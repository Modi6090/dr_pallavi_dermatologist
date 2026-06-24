import { BookingForm } from "@/components/book/BookingForm";

export const metadata = {
  title: "Book Appointment | Dr. Pallawi's Skin & Hair Clinic",
  description: "Book an appointment for advanced dermatology, hair, and cosmetic treatments.",
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Consultation</h1>
            <p className="text-lg text-gray-600">
              Take the first step towards healthy skin and beautiful hair. Fill out the form below to schedule your appointment.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100 p-6 sm:p-10">
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}
