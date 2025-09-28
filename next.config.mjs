/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow cross-origin requests for Replit proxy
  allowedDevOrigins: ['*'],
  // Allow access from all domains for Replit environment
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  // Disable strict mode to prevent hydration issues
  reactStrictMode: false,
};

export default nextConfig;
