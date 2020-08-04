var path = require('path');

module.exports = {
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    },
  },

  pwa: {
    name: 'cudeschin',
    themeColor: '#00A0AF',
    msTileColor: '#00A0AF'
  }
};