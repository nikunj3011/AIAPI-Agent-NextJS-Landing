/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    assetPrefix: process.env.BASE_URL,
    images: { unoptimized: true }
};

export default nextConfig;
