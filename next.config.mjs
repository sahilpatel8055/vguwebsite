/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration for Replit environment (user sees proxy in iframe)
  experimental: {
    // Enable features for development
  },
  // Allow cross-origin requests for Replit proxy
  allowedDevOrigins: ['*'],
  // Disable strict mode to prevent hydration issues
  reactStrictMode: false,
};

export default nextConfig;
