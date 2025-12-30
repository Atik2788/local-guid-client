/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, 
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
