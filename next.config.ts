import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        maxSize: 25 * 1024 * 1024, // 25MB
      };
    }
    return config;
  },
};

export default nextConfig;
