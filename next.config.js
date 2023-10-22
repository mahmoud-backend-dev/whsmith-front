const withNextIntl = require("next-intl/plugin")();

const nextConfig = withNextIntl({
  images: {
    domains: ["images.unsplash.com", "cdn.discordapp.com"],
  },
});

module.exports = nextConfig;
