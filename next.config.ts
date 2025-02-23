import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: "all",
          maxInitialRequests: 25,
          minSize: 20000,
          maxSize: 15 * 1024 * 1024, // 15MB chunks
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              name: "commons",
              chunks: "all",
              minChunks: 2,
              reuseExistingChunk: true,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              chunks: "all",
              priority: 1,
              reuseExistingChunk: true,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              name(module: any) {
                if (!module.context) return "vendors";
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                );
                return packageName
                  ? `npm.${packageName[1].replace("@", "")}`
                  : "vendors";
              },
            },
          },
        },
      };
    }
    return config;
  },
  output: "standalone",
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Disable image optimization if not needed
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
