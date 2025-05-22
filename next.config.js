/** @type {import('next').NextConfig} */

// Check if the deployment is for GitHub Pages specifically
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.DEPLOY_TARGET === 'github';

// Only set basePath for GitHub Pages, leave it empty for Netlify
const basePath = isGitHubPages ? '/root-logic-cidery' : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  // This is helpful for both GitHub Pages and Netlify
  trailingSlash: true,
}

module.exports = nextConfig 