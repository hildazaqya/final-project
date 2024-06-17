/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**',  // This allows any path under /t/p
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
      },
    ],
  },
}

export default nextConfig;
