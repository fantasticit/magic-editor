module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5"
  },
  babel: async options => {
    const babelConfig = require("../babel.config.js");
    return { ...options, ...babelConfig };
  }
};
