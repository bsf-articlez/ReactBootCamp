const webpack = require("webpack");
const part = require("path");

module.exports = (env, args) => {
  return {
    mode: "development",
    entry: "../index.js",
    output: {
      filename: "app.js",
      path: part.resolve(__dirname, "../build"),
      publicPath: "../public/"
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
          options: {
            preset: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: ["last 2 versions"]
                  },
                  modules: false
                }
              ],
              "@babel/preset-raect"
            ]
          }
        }
      ]
    }
  };
};
