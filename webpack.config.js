const productionConfig = merge([parts.eliminateUnusedCSS()]);


module.exports = {
  devtool: 'source-map', // any "source-map"-like devtool is possible
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader'
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
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
