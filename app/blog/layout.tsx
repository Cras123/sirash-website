import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles by Sirash Maharjan on IT support, troubleshooting, web development, and practical technology guides.",
  alternates: {
    canonical: "https://sirashmaharjan.com/blog",
  },
  openGraph: {
    title: "Blog | Sirash Maharjan",
    description:
      "Articles on IT support, troubleshooting, web development, and practical technology guides.",
    type: "website",
    url: "https://sirashmaharjan.com/blog",
    siteName: "sirashmaharjan.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sirash Maharjan",
    description:
      "Articles on IT support, troubleshooting, web development, and practical technology guides.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
