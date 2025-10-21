import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    mongodbConfigured: !!process.env.MONGODB_URI,
    emailUserConfigured: !!process.env.EMAIL_USER,
    emailPasswordConfigured: !!process.env.EMAIL_PASSWORD,
    nodeVersion: process.version,
    timestamp: new Date().toISOString(),
  });
}
