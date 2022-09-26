/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://static.adbrix.io/front/coding-test/:path*`,
      },
    ];
  },
};
module.exports = nextConfig;
