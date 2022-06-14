/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    mongoServerUrl: 'http://localhost:3001'
  }
}

module.exports = nextConfig
