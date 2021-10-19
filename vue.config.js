const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        test: /\.(js|css)$/,
        algorithm: 'gzip',
        minRatio: 1
      })
    ]
  }
}
