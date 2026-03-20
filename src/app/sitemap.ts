import type { MetadataRoute } from "next";
import { getAllPosts } from "@/utils/markdown";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://atomicimpact.engineering";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts(["slug", "date"]);
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  return [...staticPages, ...blogUrls];
}
