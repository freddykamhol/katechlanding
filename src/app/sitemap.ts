import type { MetadataRoute } from "next";
import { locationPages } from "./seo/locations";

const baseUrl = "https://katechnologies.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...locationPages.map((location) => ({
      url: `${baseUrl}/webdesign/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
