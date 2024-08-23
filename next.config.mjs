/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: "build",
  images: {
    domains: ["ml.globenewswire.com"],
  },

  async redirects() {
    return [
      // Redirect from non-WWW to WWW
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "xeurix.com", // non-WWW domain
          },
        ],
        destination: "https://www.xeurix.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
