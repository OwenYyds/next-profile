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
          maxSize: 20 * 1024 * 1024, // 20MB chunks
          cacheGroups: {
            default: false,
            vendors: false,
            commons: {
              name: "commons",
              chunks: "all",
              minChunks: 2,
            },
            lib: {
              test: /[\\/]node_modules[\\/]/,
              chunks: "all",
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              name(module: any) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `npm.${packageName.replace("@", "")}`;
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
};

export default nextConfig;
