const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const compose = require('next-compose');

module.exports = compose([
  withImages(),
  withCSS(),
  {
    webpack: config => config
  }
]);
