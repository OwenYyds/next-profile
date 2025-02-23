import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // 设置最大文件大小限制为 25MB
    config.optimization.splitChunks = {
      chunks: "all",
      maxSize: 25 * 1024 * 1024, // 25MB
    };
    return config;
  },
};

export default nextConfig;
