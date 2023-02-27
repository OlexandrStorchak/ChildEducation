/** @type {import('next').NextConfig} */

const { parsed: dotenv } = require('dotenv').config({
  path:'process.env'
})

const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
},
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
