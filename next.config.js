/** @type {import('next').NextConfig} */

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
const isProduction = process.env.NODE_ENV === 'production'

let basePath = ''
let assetPrefix = ''

// Set the base path and asset prefix for GitHub Pages deployment
if (isGitHubActions || process.env.DEPLOY_TARGET === 'github') {
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'root-logic-cidery'
  basePath = `/${repo}`
  assetPrefix = `/${repo}/`
}

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
    path: `${basePath}/_next/image`,
    loader: 'default',
    domains: ['localhost']
  },
  trailingSlash: true,
  webpack: (config) => {
    return config
  },
}

module.exports = nextConfig 