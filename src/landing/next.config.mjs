/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/AIAPI-Agent-NextJS-Landing/",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: { unoptimized: true }
};

export default nextConfig;
