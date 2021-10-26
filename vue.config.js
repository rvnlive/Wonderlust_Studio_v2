const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path][base].gz",
        algorithm: "gzip",
        test: /\.js$|\.css$/,
        threshold: 5120,
        minRatio: 0.8,
        // deleteOriginalAssets: true
      })
    ]
  }
}
