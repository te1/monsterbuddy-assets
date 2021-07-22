const { extendDefaultPlugins } = require('svgo');

module.exports = {
  plugins: extendDefaultPlugins([
    {
      name: 'removeDimensions',
      active: true,
    },
    {
      name: 'convertStyleToAttrs',
      active: true,
    },
  ]),
};
