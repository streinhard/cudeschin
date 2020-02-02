var path = require('path');

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
        .rule('md')
        .test(/\.md$/)
        .use('raw-loader')
            .loader('raw-loader')
            .end()

  },
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    },
  }
};