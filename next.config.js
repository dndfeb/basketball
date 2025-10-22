/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable i18n routing to prevent /en URLs
  i18n: undefined,
  // Optimize images
  images: {
    unoptimized: true,
  },
  // Disable static export for now to fix build issues
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig

