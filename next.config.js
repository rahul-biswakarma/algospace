/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/sorting",
        destination: "/sorting/bubble-sort",
        permanent: true,
      },
      {
        source: "/searching",
        destination: "/searching/linear-search",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
