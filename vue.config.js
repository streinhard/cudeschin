var path = require('path');

module.exports = {
  lintOnSave: false,

  outputDir: 'docs',

  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    },
  },

  pwa: {
    name: 'cudeschin',
    themeColor: '#00a0af',
    msTileColor: '#00a0af'
  }
};