import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  try {
    console.log("Testing email configuration...");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASSWORD exists:", !!process.env.EMAIL_PASSWORD);

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return NextResponse.json(
        { error: "Email credentials not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify connection
    await transporter.verify();
    console.log("✅ Email server connection verified!");

    // Send test email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email from Portfolio Contact Form",
      html: `
        <h2>✅ Email Configuration Test</h2>
        <p>If you're reading this, your email configuration is working correctly!</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    console.log("✅ Test email sent:", info.messageId);

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully!",
      messageId: info.messageId,
    });
  } catch (error: any) {
    console.error("❌ Email test failed:", error);
    return NextResponse.json(
      {
        error: error.message,
        details: error.toString(),
      },
      { status: 500 }
    );
  }
}
