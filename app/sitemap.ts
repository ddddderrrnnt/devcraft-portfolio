import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devcraft.dev";
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-25"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date("2026-06-25"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
