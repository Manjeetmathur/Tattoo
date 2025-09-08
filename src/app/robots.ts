import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api"], // adjust as per your project
      },
    ],
    sitemap: "https://satya-tattoo.vercel.app/sitemap.xml",
  };
}
