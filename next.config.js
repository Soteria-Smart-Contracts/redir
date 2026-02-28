/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    isrMemoryCacheSize: 0,
  },
};

module.exports = nextConfig;
