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
      {
        source: "/api/eatery",
        destination: "/api/eateryHandler",
      },
    ];
  },

  env: {
    CUSTOM_ENV_VARIABLE: process.env.CUSTOM_ENV_VARIABLE,
  },
};

export default nextConfig;
