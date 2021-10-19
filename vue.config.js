const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        Filename: '[path][name].gz[query]',
        Test: /\.(js|css)$/i,
        Algorithm: 'gzip',
        MinRatio: 1,
        DeleteOriginalAssets: true
      })
    ]
  }
}
