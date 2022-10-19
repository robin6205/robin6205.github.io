/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "https://https://robin6205.github.io/",
  },
};

module.exports = nextConfig;
