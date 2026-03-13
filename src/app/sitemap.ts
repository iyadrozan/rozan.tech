import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rozan.tech/",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
