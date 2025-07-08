/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // SEO optimizations
  generateEtags: true,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Allow cross-origin requests from local network IPs (development only)
  ...(process.env.NODE_ENV === 'development' && {
    allowedDevOrigins: [
      "192.168.100.5",
      "192.168.1.*",
      "192.168.100.*",
      "10.0.0.*",
      "172.16.*.*",
    ],
  }),
};

export default nextConfig;