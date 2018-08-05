const path = require('path');

const config = {
  entry: [
    'index.jsx',
  ],
  output: {
    filename: "dist/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ],
  },
  mode: 'none',
};

module.exports = config;
