import type { MetadataRoute } from "next";

const siteUrl = "https://sairafstudio.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/criacao-de-sites-sao-jose`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/landing-pages`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/sistemas-sob-medida`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
