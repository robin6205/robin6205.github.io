/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  staticPageGenerationTimeout: 120, // Increase the timeout to 2 minutes
};

module.exports = nextConfig;