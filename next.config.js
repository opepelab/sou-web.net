const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "off",
  },

  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },

  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },

  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  {
    key: "Content-Security-Policy",
    value: "self",
  },
];

// const cacheHeaders = [
//   {
//     key: "Cache-Control",
//     value: "max-age=1000",
//   },
// ];
module.exports = {
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
