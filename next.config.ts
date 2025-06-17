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
  webpack: (config, { dev, isServer }) => {
    // Deshabilitar la caché de webpack para producción
    if (!dev) {
      config.cache = {
        type: 'memory'
      };
    }
    return config;
  },
};

export default nextConfig;


