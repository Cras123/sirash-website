import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sirash Maharjan — Full-Stack Developer",
    template: "%s — Sirash Maharjan",
  },
  description:
    "Full-Stack Developer building reliable web apps with Next.js, TypeScript, and great UX.",
  metadataBase: new URL("https://sirashmaharjan.com"),
  openGraph: {
    title: "Sirash Maharjan — Full-Stack Developer",
    description:
      "Full-Stack Developer building reliable web apps with Next.js, TypeScript, and great UX.",
    url: "https://sirashmaharjan.com",
    siteName: "sirashmaharjan.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sirash Maharjan — Full-Stack Developer",
    description:
      "Full-Stack Developer building reliable web apps with Next.js, TypeScript, and great UX.",
  },
  alternates: {
    canonical: "https://sirashmaharjan.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-neutral-900 dark:bg-black dark:text-neutral-100`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
