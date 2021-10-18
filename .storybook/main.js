const customConfig = require('../webpack/config');

module.exports = {
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  stories: ["../src/**/(*.)?stories.@(ts|tsx)"],
  webpackFinal: config => ({ ...config,
    module: { ...config.module,
      rules: [...config.module.rules, ...customConfig.module.rules]
    },
    plugins: [...config.plugins, ...customConfig.plugins],
    resolve: { ...config.resolve,
      ...customConfig.resolve
    }
  }),
  core: {
    builder: "webpack5"
  }
};