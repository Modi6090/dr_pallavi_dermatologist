"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Clock } from "lucide-react";

const morningSlots = [
  { time: "10:00 AM", label: "10:00 AM" },
  { time: "10:30 AM", label: "10:30 AM" },
  { time: "11:00 AM", label: "11:00 AM" },
];

const eveningSlots = [
  { time: "04:00 PM", label: "4:00 PM" },
  { time: "04:30 PM", label: "4:30 PM" },
  { time: "05:00 PM", label: "5:00 PM" },
];

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Please select gender"),
  concern: z.string().min(10, "Please describe your concern (at least 10 characters)"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time slot"),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      gender: "",
      time: "",
    },
  });

  const handleSlotSelect = (time: string) => {
    setSelectedSlot(time);
    setValue("time", time, { shouldValidate: true });
  };

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
    setValue("gender", gender, { shouldValidate: true });
  };

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, age: parseInt(data.age, 10) }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setIsSuccess(true);
      toast.success("Appointment booked successfully!");
    } catch {
      toast.error("Failed to book appointment. Please try again or contact us via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </motion.div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Appointment Booked!</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Thank you for choosing Dr. Pallawi&apos;s Clinic. We will confirm your appointment shortly via phone or WhatsApp.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false);
            setSelectedSlot("");
            setSelectedGender("");
            reset();
          }}
          variant="outline"
          className="rounded-full"
        >
          Book Another Appointment
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Step 1: Personal Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
            1
          </span>
          Personal Information
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Full Name *</label>
            <Input {...register("name")} placeholder="Enter your full name" className="h-12 rounded-xl" />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone Number *</label>
            <Input {...register("phone")} placeholder="+91 9876543210" className="h-12 rounded-xl" />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email Address *</label>
            <Input {...register("email")} type="email" placeholder="you@example.com" className="h-12 rounded-xl" />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Age *</label>
              <Input {...register("age")} type="number" placeholder="25" className="h-12 rounded-xl" />
              {errors.age && <p className="text-sm text-red-500">{errors.age.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Gender *</label>
              <input type="hidden" {...register("gender")} />
              <div className="flex gap-1.5">
                {["Male", "Female", "Other"].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => handleGenderSelect(g.toLowerCase())}
                    className={`flex-1 h-12 rounded-xl border text-xs font-medium transition-all duration-200 ${
                      selectedGender === g.toLowerCase()
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-gray-600 border-gray-200 hover:border-primary/50"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
              {errors.gender && <p className="text-sm text-red-500">{errors.gender.message}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Concern */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
            2
          </span>
          Your Concern
        </h3>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Describe your skin/hair concern *</label>
          <Textarea
            {...register("concern")}
            placeholder="E.g., I've been experiencing hair fall for the past 3 months, or I have persistent acne on my cheeks..."
            className="rounded-xl resize-none h-32"
          />
          {errors.concern && <p className="text-sm text-red-500">{errors.concern.message}</p>}
        </div>
      </div>

      {/* Step 3: Date & Time */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
            3
          </span>
          Preferred Date & Time
        </h3>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Select Date *</label>
            <Input
              {...register("date")}
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="h-12 rounded-xl max-w-xs"
            />
            {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium text-gray-700">Select Time Slot *</label>
            <input type="hidden" {...register("time")} />

            {/* Morning Slots */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" /> Morning Slots
              </p>
              <div className="grid grid-cols-3 gap-3">
                {morningSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => handleSlotSelect(slot.time)}
                    className={`h-12 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                      selectedSlot === slot.time
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                        : "bg-white text-gray-700 border-gray-200 hover:border-primary/50 hover:bg-primary/5"
                    }`}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Evening Slots */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" /> Evening Slots
              </p>
              <div className="grid grid-cols-3 gap-3">
                {eveningSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => handleSlotSelect(slot.time)}
                    className={`h-12 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                      selectedSlot === slot.time
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                        : "bg-white text-gray-700 border-gray-200 hover:border-primary/50 hover:bg-primary/5"
                    }`}
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            </div>
            {errors.time && <p className="text-sm text-red-500">{errors.time.message}</p>}
          </div>
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full rounded-full h-14 text-base font-semibold shadow-lg shadow-primary/30"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          "Confirm Appointment"
        )}
      </Button>
    </form>
  );
}
