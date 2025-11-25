// next.config.mjs
const nextConfig = {
  experimental: {
    turbopack: false,  // Disable Turbopack for builds
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
