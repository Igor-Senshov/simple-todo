const path = require("path")
const webpack = require("webpack")

module.exports = {
  mode: "development",
  entry: "./components/app.js",
  output: {
    path: path.resolve(__dirname, "/"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: "./",
    hot: true,
    publicPath: "/",
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
        ],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
            }
          },
          {
            loader: "postcss-loader",
          },
        ]
      }
    ]
  }
}