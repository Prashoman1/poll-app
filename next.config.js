/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
         
          {
            protocol: "http",
            hostname: "**",
           port: "", // Change this to the port your backend is running on
          },
          {
            protocol: "https",
            hostname: "**",
           port: "", // Change this to the port your backend is running on
          },
          
        ],
      },
};

module.exports = nextConfig;
