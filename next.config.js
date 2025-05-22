/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const basePath = isGithubActions ? '/root-logic-cidery' : ''

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    path: `${basePath}/_next/image`,
    loader: 'default',
    domains: ['localhost']
  },
  trailingSlash: true,
}

module.exports = nextConfig 