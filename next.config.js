const SUB_DIRECTORY = "/block-key-inputs";
const isProd = process.env.NODE_ENV == "production";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? SUB_DIRECTORY : "",
  assetPrefix: isProd ? SUB_DIRECTORY : "",
  publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : "",
  },
};
const WithPWA = require("next-pwa");
module.exports = WithPWA(nextConfig);
