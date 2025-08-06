/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
