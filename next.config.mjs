/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: { 
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'nikunj3011.github.io', // Replace with your base domain
                port: '',
                pathname: '/AIAPI-Agent-NextJS-Landing/**', // Adjust path as needed
            },
        ],
    }
};

export default nextConfig;
