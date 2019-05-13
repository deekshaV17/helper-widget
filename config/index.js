const path = require('path');

const root = path.resolve(__dirname, '..');
require('dotenv').config({ path: path.resolve(root, '.env') });

if (!process.env.NODE_ENV) {
  throw new Error('The process.env.NODE_ENV environment variable is required but was not specified.');
}

const config = {
  port: process.env.PORT || 3000,
  root,
  src: path.resolve(root, 'src'),
  public: path.resolve(root, 'public'),
  build: path.resolve(root, 'build'),
  envs: {
    APP_NAME: process.env.APP_NAME || 'heper-widget',
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_BASE: process.env.API_BASE || '',
  },
};

module.exports = Object.freeze(config);
