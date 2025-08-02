/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/delicious/' : '',
  basePath: isProd ? '/delicious' : '',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
