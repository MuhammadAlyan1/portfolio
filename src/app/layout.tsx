import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import Navigation from "./_components/navigation";
import JsonLd from "@/lib/jsonLd";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.siteDescription,
  keywords: profile.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: profile.name,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description: profile.shortDescription,
    url: profile.siteUrl,
    siteName: profile.siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: profile.shortDescription,
    site: profile.twitterHandle,
    creator: profile.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: profile.siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: profile.colors.background,
};

const personId = `${profile.siteUrl}/#person`;
const websiteId = `${profile.siteUrl}/#website`;

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${profile.siteUrl}/#profilepage`,
      url: profile.siteUrl,
      name: `${profile.name} | ${profile.title}`,
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      alternateName: profile.alternateNames,
      url: profile.siteUrl,
      image: `${profile.siteUrl}${profile.portraitPath}`,
      jobTitle: profile.title,
      email: `mailto:${profile.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.location.city,
        addressCountry: profile.location.countryCode,
      },
      worksFor: {
        "@type": "Organization",
        name: profile.employer,
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: profile.education,
      },
      hasOccupation: {
        "@type": "Occupation",
        name: profile.title,
      },
      sameAs: profile.socials.map((social) => social.url),
      knowsAbout: profile.knowsAbout,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: profile.name,
      alternateName: profile.siteName,
      url: profile.siteUrl,
      publisher: { "@id": personId },
    },
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
        <JsonLd data={schemaGraph} />
      </body>
    </html>
  );
}
