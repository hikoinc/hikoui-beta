import { withContentlayer } from "next-contentlayer2";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs/getting-started/introduction",
        permanent: true,
      },
      {
        source: "/docs",
        destination: "/docs/getting-started/introduction",
        permanent: true,
      },
      {
        source: "/docs/getting-started",
        destination: "/docs/getting-started/introduction",
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
