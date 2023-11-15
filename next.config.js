const SUB_DIRECTORY = "/block-key-inputs";
const isProd = process.env.NODE_ENV == "production";
const withPWA = require("next-pwa")({
  dest: "public",
});
module.exports = WithPWA({
  output: "export",
  basePath: isProd ? SUB_DIRECTORY : "",
  assetPrefix: isProd ? SUB_DIRECTORY : "",
  publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : "",
});
