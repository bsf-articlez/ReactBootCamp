const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (storybookBaseConfig, configType) => {
  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"]
  });

  if (typeof storybookBaseConfig.resolve.modules !== "object") {
    storybookBaseConfig.resolve.modules = [];
  }

  storybookBaseConfig.resolve.modules.push(
    "node_modules",
    path.resolve(__dirname, "../src")
  );
  // Return the altered config
  return storybookBaseConfig;
};
