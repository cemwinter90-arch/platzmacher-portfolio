import type { MetadataRoute } from "next";

const siteUrl = "https://platzmacher.eu";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/impressum/`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/datenschutz/`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
