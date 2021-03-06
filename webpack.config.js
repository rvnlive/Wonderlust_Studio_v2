const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  devtool: false, // any "source-map"-like devtool is possible
  mode: 'production',
  output: {
    publicPath: './'
  },
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ],
    loaders: [
      {
        test: /\.(jpe?g|png|gif)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
}
