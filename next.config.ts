import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  async redirects() {
    return [
      { source: "/websites", destination: "/web-design", permanent: true },
      { source: "/solutions", destination: "/web-design", permanent: true },
      { source: "/apps", destination: "/work", permanent: true },
      { source: "/it-support", destination: "/hosting", permanent: true },
      { source: "/learning", destination: "/about", permanent: true },
      { source: "/business", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
