/** @type {import('next').NextConfig} */

const { parsed: dotenv } = require('dotenv').config({
  path:'.env'
})

const nextConfig = {
env: dotenv,
  reactStrictMode: true,
  webpack: (config) => {
    config.optimization.splitChunks.cacheGroups = {
      common: {
        name: "common",
        chunks: "all",
      }
    };

    return config;
  }
}

module.exports = nextConfig
