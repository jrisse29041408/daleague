// const withCSS = require('@zeit/next-css');
// module.exports = withCSS({
//   // Set this to true if you use CSS modules.
//   // See: https://github.com/css-modules/css-modules
//   cssModules: false,
// });
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
};
