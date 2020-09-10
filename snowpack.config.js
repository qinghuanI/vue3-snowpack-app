const path = require('path');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  extends: '@snowpack/app-scripts-vue',
  plugins: ['snowpack-plugin-sass', '@snowpack/plugin-postcss'],
  alias: {
    views: resolve('src/views'),
  },
};
