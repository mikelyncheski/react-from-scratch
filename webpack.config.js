var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
            // This worked as well but not in .babelrc or in package.json.
            // options: {  /
            //   presets: ["@babel/preset-env", "@babel/preset-react"]
            // }
          }
        ]
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  mode: "development", // or production - watch later video
  plugins: [
    // 	html-webpack-plugin - automatically insert index.html into index.js
    new HtmlWebpackPlugin({ template: "app/index.html" })
  ]
};
