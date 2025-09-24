import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Create new contact document
    const contact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    // Save to database
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
