const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "dist/bundle.js",
  },
  mode: "none",
  // plugins: [
  //   new UglifyJsPlugin({
  //     sourceMap: true,
  //   }),
  // ],
};
