const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
});

const pages = {
  index: "src/main.js",
};

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  outputDir: "./dist",
  indexPath: "../../templates/vue_index.html",

  pages: pages,

};