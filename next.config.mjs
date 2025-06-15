import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  distDir: process.env.TEMP_BUILD_DIR || '.next',
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
      },
      /*
      {
        protocol: 'http',
        hostname: "beta.finfactory.one",
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '37.18.89.18',
        port: '3000',
        pathname: '/uploads/**',
      },
      */
    ],
  },
}

export default withPayload(nextConfig)
