const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "dist/bundle.js",
  },
  // plugins: [
  //   new UglifyJsPlugin({
  //     sourceMap: true,
  //   }),
  // ],
};
