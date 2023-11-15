/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export"
};
const WithPWA = require("next-pwa");
module.exports = WithPWA(nextConfig);
