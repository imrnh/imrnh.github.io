// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export static HTML for GitHub Pages or any static host
  output: "export",

  // Disable Next.js image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },

  // Recommended for cleaner URLs and proper static routing
  trailingSlash: true,
};

export default nextConfig;
