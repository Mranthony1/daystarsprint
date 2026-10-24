import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/work",
    "/approach",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    ...services.map((service) => `/services/${service.slug}`),
    ...projects.map((project) => `/work/${project.slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: siteConfig.contentUpdated,
  }));
}
