/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: { 
        unoptimized: true,
        domains: ['nikunj3011.github.io'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nikunj3011.github.io', // Replace with your base domain
                port: '',
                pathname: '/AIAPI-Agent-NextJS-Landing/**', // Adjust path as needed
            },
        ],
    },
    async headers() {
        return [
          {
            source: '/_next/image(.*)', // Cache optimized images served by Next.js
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, immutable', // Cache for 1 year
              },
            ],
          },
        ];
      },
};

export default nextConfig;
