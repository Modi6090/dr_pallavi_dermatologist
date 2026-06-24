import { NextResponse } from "next/server";
import * as z from "zod";

const bookingSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  age: z.number().min(1).max(120),
  gender: z.string().min(1),
  concern: z.string().min(10),
  date: z.string().min(1),
  time: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = bookingSchema.parse(body);

    // Try to save to DB if Prisma/PostgreSQL is configured
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.appointment.create({
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          age: data.age,
          gender: data.gender,
          concern: data.concern,
          date: data.date,
          time: data.time,
        },
      });
    } catch (dbError) {
      console.error("Database not configured or connection failed, skipping DB insert:", dbError);
    }

    // Resend email integration placeholder
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    // WhatsApp API integration placeholder
    // await fetch('https://api.whatsapp.com/...', { ... });

    return NextResponse.json(
      { success: true, message: "Appointment booked successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error booking appointment:", error);
    return NextResponse.json(
      { success: false, error: "Failed to book appointment" },
      { status: 400 }
    );
  }
}
