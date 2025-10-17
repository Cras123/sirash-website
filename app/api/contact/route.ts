// app/api/contact/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export const runtime = "nodejs"; // <- important
export const dynamic = "force-dynamic"; // (optional) avoids static optimization here

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Better email check (allows long TLDs)
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    await connectDB();

    const contact = new Contact({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      message: String(message).trim(),
    });

    await contact.save();

    return NextResponse.json(
      {
        message: "Thank you for your message! I'll get back to you soon.",
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
