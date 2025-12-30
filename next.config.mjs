/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker deployments
  output: 'standalone',

  // Strict mode for React
  reactStrictMode: true,

  // Enable experimental features (uncomment as needed)
  // experimental: {
  //   serverActions: true,
  // },

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects (uncomment and modify as needed)
  // async redirects() {
  //   return [
  //     {
  //       source: '/old-page',
  //       destination: '/new-page',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
