/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow all hosts for Replit environment (user sees proxy in iframe)
  experimental: {
    allowedHosts: true,
  },
  // Disable host verification for development
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
