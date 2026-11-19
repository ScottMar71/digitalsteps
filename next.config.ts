import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
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
      { source: "/branding", destination: "/", permanent: true },
      { source: "/work/learning-opportunities", destination: "/work", permanent: true },
      { source: "/work/client-stories", destination: "/work", permanent: true },
      { source: "/work/own-your-time", destination: "/work", permanent: true },
      { source: "/work/the-lantern", destination: "/work", permanent: true },
      { source: "/work/harbour-and-co", destination: "/work", permanent: true },
      { source: "/work/field-and-timber", destination: "/work", permanent: true },
      { source: "/work/open-door", destination: "/work", permanent: true },
      { source: "/work/north-room", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
