/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/", // Updated to valid path
  },
  basePath: "",
  assetPrefix: "/", // Updated to valid prefix
};

module.exports = nextConfig;
