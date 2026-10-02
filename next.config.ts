import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local verification can build separately from an already running preview.
  distDir: process.env.PORTFOLIO_DIST_DIR || ".next",
  turbopack: { root: process.cwd() },
};

export default nextConfig;
