const CompressionWebpackPlugin = require('compression-webpack-plugin');
// const SitemapPlugin = require('sitemap-webpack-plugin').default;
// const paths = [
//   {
//     path: '/',
//     lastmod: new Date().toISOString().slice(0, 10),
//     priority: '0.8',
//     changefreq: 'hourly'
//   },
// ];

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
      }),
      // new SitemapPlugin('https://wonderlust-studio.herokuapp.com', paths, {
      //   filename: 'sitemap.xml',
      //   lastmod: true,
      //   changefreq: 'hourly',
      //   priority: '0.8'
      // })
    ]
  }
}
