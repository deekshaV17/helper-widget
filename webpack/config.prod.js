const OfflinePlugin = require('offline-plugin');

const base = require('./config.base');
const config = require('../config/index');

module.exports = {
  ...base,
  mode: 'production',
  entry: ['@babel/polyfill', `${config.src}/main.jsx`],
  output: {
    ...base.output,
    path: config.build,
    filename: '[chunkhash].js',
    chunkFilename: '[chunkhash].js',
  },
  plugins: [
    ...base.plugins,
    new OfflinePlugin({
      appShell: '/',
      autoUpdate: true,
    }),
  ],
  optimization: {
    ...base.optimization,
    splitChunks: {
      ...base.optimization.splitChunks,
      chunks: 'all',
    },
  },
};
