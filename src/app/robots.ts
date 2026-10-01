import type { MetadataRoute } from "next";

const siteUrl = "https://platzmacher.eu";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/design-system/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
