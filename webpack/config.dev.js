const webpack = require('webpack');

const base = require('./config.base');
const config = require('../config/index');

module.exports = {
  ...base,
  mode: 'development',
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    `${config.src}/main.jsx`,
  ],
  output: {
    ...base.output,
    path: config.public,
    filename: '[name].js',
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    ...base.plugins,
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    ...base.optimization,
    splitChunks: {
      ...base.optimization.splitChunks,
      chunks: 'async',
    },
  },
  devServer: {
    contentBase: config.assets,
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    host: '0.0.0.0',
    port: config.port,
    disableHostCheck: true,
  },
};
