/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimización para Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Configuración para reducir el tamaño del bundle
  experimental: {
    optimizeCss: true,
  },
  
  // Configuración de webpack para optimizar el tamaño
  webpack: (config, { isServer }) => {
    // Optimizaciones para reducir el tamaño del bundle
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Configuración para evitar archivos de caché grandes
    config.cache = false;
    
    return config;
  },
  
  // Configuración para mejorar el rendimiento
  swcMinify: true,
  
  // Configuración de compresión
  compress: true,
  
  // Configuración para evitar archivos innecesarios en el build
  generateBuildId: async () => {
    return 'build-' + Date.now();
  }
};

module.exports = nextConfig;
