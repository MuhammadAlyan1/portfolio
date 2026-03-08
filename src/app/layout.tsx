import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import Navigation from "./_components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alyan.vercel.app/"),
  title: {
    default: "Alyan Hanif | Full Stack Developer",
    template: "%s | Alyan Hanif",
  },
  description:
    "Alyan Hanif is a Full Stack Developer specializing in Next.js, React, TypeScript, and Node.js. View projects, experience, and portfolio.",
  keywords: [
    "Alyan Hanif",
    "Muhammad Alyan",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Pakistan Developer",
    "Islamabad Developer",
    "AI Engineer",
    "AI Fullstack Developer",
  ],
  authors: [{ name: "Alyan Hanif" }],
  creator: "Alyan Hanif",
  publisher: "Alyan Hanif",
  openGraph: {
    title: "Alyan Hanif | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, TypeScript and Node.js.",
    url: "https://alyan.vercel.app/",
    siteName: "Alyan Hanif Portfolio",
    images: [
      {
        url: "/alyan.png",
        width: 1200,
        height: 630,
        alt: "Alyan Hanif Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alyan Hanif | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, TypeScript and Node.js.",
    images: ["/alyan.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://alyan.vercel.app/",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alyan Hanif",
  alternateName: ["Muhammad Alyan", "Alyan"],
  url: "https://alyan.vercel.app/",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://www.linkedin.com/in/alyan-hanif-2542b11ba/",
    "https://www.linkedin.com/in/alyan-hanif/",
    "https://github.com/MuhammadAlyan1",
    "https://x.com/AlyanDeveloper",
    "https://www.fiverr.com/alyan_hanif",
    "https://www.upwork.com/freelancers/~01bf5a1ce43634bf45",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navigation />
        <Toaster
          toastOptions={{
            duration: 5000,
            position: "bottom-left",
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
