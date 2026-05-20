import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rslog.com",
      },
    ],
  },
};

export default nextConfig;
