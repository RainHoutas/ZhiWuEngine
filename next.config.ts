import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com', // 允许 Unsplash 的图片
                port: '',
                pathname: '/**',
            },
        ]
    }
    
};

export default nextConfig;
