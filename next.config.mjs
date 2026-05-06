/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: '/webdevelopment',
        destination: '/web-design',
        permanent: true,
      },
      {
        source: '/web-development',
        destination: '/web-design',
        permanent: true,
      },
      {
        source: '/graphicdesigning',
        destination: '/graphic-designing',
        permanent: true,
      },
      {
        source: '/graphich-designing',
        destination: '/graphic-designing',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
