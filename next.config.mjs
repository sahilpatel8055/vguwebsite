/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for Replit environment (user sees proxy in iframe)
  experimental: {
    // Explicitly set Turbopack root to this workspace to avoid mis-detection
    turbopack: {
      root: process.cwd(),
    },
  },
  // Allow cross-origin requests for Replit proxy
  allowedDevOrigins: ['*'],
  // Disable strict mode to prevent hydration issues
  reactStrictMode: false,
};

export default nextConfig;
