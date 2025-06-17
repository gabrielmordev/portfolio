import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Asegúrate de que esto sea false o elimínalo
  // devIndicators: false
};

export default nextConfig;

