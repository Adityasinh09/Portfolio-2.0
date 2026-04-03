import { withContentlayer } from 'next-contentlayer2';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    unoptimized: true,
  },
};

export default withContentlayer(nextConfig);
