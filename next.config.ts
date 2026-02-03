/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true, // Active GZIP et Brotli

  images: {
    formats: ["image/avif", "image/webp"], // Formats plus légers
    remotePatterns: [
      {protocol: "https", hostname: "bobapp.fr"}, // Domaine principal
      {protocol: "https", hostname: "res.cloudinary.com"}, // Exemple si tu utilises Cloudinary
    ],
  },

  turbopack: {
    // Si un jour tu veux ajouter des règles spécifiques, c'est ici
  },

  experimental: {
    optimizeCss: true, // Minifie et optimise le CSS
    optimizePackageImports: ["framer-motion", "swiper"], // Réduit le JS inutile

  },

  reactStrictMode: true, // Bonnes pratiques React
  poweredByHeader: false, // Retire "X-Powered-By: Next.js"
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)",
        headers: [
          {key: "Cache-Control", value: "public, max-age=31536000, immutable"},
        ],
      },
    ];
  },
};

module.exports = nextConfig;
