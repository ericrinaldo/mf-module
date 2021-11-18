const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/preset-scss',
  ],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src/'),
    ];

    return config;
  },
};
