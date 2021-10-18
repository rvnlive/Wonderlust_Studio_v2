const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: config => {
    config.plugins.push(new CompressionWebpackPlugin({
      filename: '[path][name].gz',
      test: /\.(js|css)$/i,
      algorithm: 'gzip',
      minRatio: 1
    }));
  }
}
