import type { NextConfig } from "next";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${HTTP_SERVER}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;