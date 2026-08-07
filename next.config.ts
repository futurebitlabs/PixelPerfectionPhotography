import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.20.1"],
  images: {
    loader: "custom",
    loaderFile: "./lib/cloudinaryLoader.ts",
  },
};

export default nextConfig;
