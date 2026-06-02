import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://alyan.dev/sitemap.xml",
    host: "https://alyan.dev",
  };
}
