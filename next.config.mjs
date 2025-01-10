/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-path",
        destination: "/new-path",
        permanent: true,
      },
    ];
  },

  // Mengatur rewrites
  async rewrites() {
    return [
      {
        source: "/api/products",
        destination: "/api/productsHandler",
      },
      {
        source: "/api/users",
        destination: "/api/usersHandler",
      },
    ];
  },
};

export default nextConfig;
