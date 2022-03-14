/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  // ... rest of the configuration.
  experimental: {
    outputStandalone: true,
  },
}
