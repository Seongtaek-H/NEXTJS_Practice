/** @type {import('next').NextConfig} */
const API_KEY = "6df683327f9037c362fcff75540a2656";
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;
