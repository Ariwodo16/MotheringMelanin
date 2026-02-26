import { NextResponse } from "next/server";

const BASE = "https://www.motheringmelanin.com";

export async function GET() {
  const routes = [
    { path: "/", priority: "1.0", freq: "weekly" },
    { path: "/about", priority: "0.9", freq: "monthly" },
    { path: "/services", priority: "0.9", freq: "monthly" },
    { path: "/hire-a-doula", priority: "0.8", freq: "weekly" },
    { path: "/contact", priority: "0.8", freq: "monthly" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url>
    <loc>${BASE}${r.path}</loc>
    <priority>${r.priority}</priority>
    <changefreq>${r.freq}</changefreq>
  </url>`).join("\n")}
</urlset>`;

  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
