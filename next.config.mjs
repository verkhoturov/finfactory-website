import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'finfactory-website.vercel.app',
      },
    ],
  },
}

export default withPayload(nextConfig)
