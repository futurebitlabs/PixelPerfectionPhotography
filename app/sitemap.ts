import type { MetadataRoute } from "next";
import { weddings } from "@/data/weddings";

const baseUrl = "https://pixelperfection.example";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about-us",
    "/photo",
    "/services",
    "/videos",
    "/testimonials",
    "/blogs",
    "/contact-us",
    ...weddings.map((wedding) => `/weddings/${wedding.slug}`),
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
