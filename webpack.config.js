const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  // devtool: 'source-map', // any "source-map"-like devtool is possible
  mode: 'production',
  optimization: {
    nodeEnv: 'production',
    minimize: true
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
