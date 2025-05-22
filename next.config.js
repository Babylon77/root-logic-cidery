/** @type {import('next').NextConfig} */

// Set a constant basePath for GitHub Pages that will be used in both development and production
const basePath = process.env.NODE_ENV === 'production' ? '/root-logic-cidery' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  // This is critical for GitHub Pages - ensures trailing slashes on all URLs
  trailingSlash: true,
}

module.exports = nextConfig 