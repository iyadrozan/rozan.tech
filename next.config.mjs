/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  // Allow cross-origin requests from local network IPs
  allowedDevOrigins: [
    "192.168.100.5",
    "192.168.1.*", // Allow any IP in 192.168.1.x range
    "192.168.100.*", // Allow any IP in 192.168.100.x range
    "10.0.0.*", // Allow any IP in 10.0.0.x range
    "172.16.*.*", // Allow any IP in 172.16.x.x range
  ],
};

export default nextConfig;
