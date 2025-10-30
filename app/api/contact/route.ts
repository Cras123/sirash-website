// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export const runtime = "nodejs"; // <- important
export const dynamic = "force-dynamic"; // (optional) avoids static optimization here

export async function POST(request: Request) {
  try {
    // Log environment check (without exposing values)
    console.log("Environment check:", {
      mongodbConfigured: !!process.env.MONGODB_URI,
      emailConfigured: !!process.env.EMAIL_USER && !!process.env.EMAIL_PASSWORD,
    });

    // Check if MongoDB URI is configured
    if (!process.env.MONGODB_URI) {
      console.error("MONGODB_URI is not configured");
      return NextResponse.json(
        {
          error:
            "Server configuration error. Please contact the administrator.",
        },
        { status: 500 }
      );
    }

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

    console.log("Attempting to connect to MongoDB...");
    await connectDB();
    console.log("✅ MongoDB connected successfully");

    const contact = new Contact({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      message: String(message).trim(),
    });

    console.log("Saving contact to database...");
    await contact.save();
    console.log("✅ Contact saved successfully");

    // Send email notification using Nodemailer (if credentials are configured)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // Send to yourself
          replyTo: email, // Allow replying directly to the sender
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
            <hr>
            <p><small>This message was sent from your portfolio contact form.</small></p>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully to:", process.env.EMAIL_USER);
      } catch (emailError) {
        // Log the error but don't fail the request
        console.error("Failed to send email notification:", emailError);
        console.log("Contact saved to database but email notification failed");
      }
    } else {
      console.log(
        "Email credentials not configured - skipping email notification"
      );
    }

    return NextResponse.json(
      {
        message: "Thank you for your message! I'll get back to you soon.",
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    // Provide more detailed error for debugging
    let errorMessage = "Something went wrong. Please try again.";

    if (error instanceof Error) {
      console.error("Error details:", error.message);
      // Don't expose internal errors to users, but log them
      if (
        error.message.includes("MONGODB_URI") ||
        error.message.includes("MongoDB")
      ) {
        errorMessage = "Database connection error. Please try again later.";
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
