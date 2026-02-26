import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack is now stable and default in Next.js 16
  // React Compiler opt-in (stable in Next.js 16)
  reactCompiler: false, // set to true when ready — auto-memoizes components
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Page extensions for MDX support
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default nextConfig;
