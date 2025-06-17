/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para static export (compatible con Cloudflare Pages)
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },

  // Configuración de webpack para optimizar el tamaño
  webpack: (config, { isServer }) => {
    // Configuración para evitar archivos de caché grandes
    config.cache = false;

    return config;
  }
};

module.exports = nextConfig;
