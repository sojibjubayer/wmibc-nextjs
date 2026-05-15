import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "wmibc-nextjs.vercel.app", 
          },
        ],
        destination: "https://wmibc.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
