const path = require('path');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}
