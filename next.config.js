const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    // disable PWA when running in local dev mode
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/",
    dest: "public",
    runtimeCaching,
  },
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "avatars1.githubusercontent.com",
      "avatars2.githubusercontent.com",
      "avatars3.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
});