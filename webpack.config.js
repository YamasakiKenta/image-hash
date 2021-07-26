const path = require("path");
module.exports = {
  mode: "development",
  //  mode: 'production',
  entry: [path.resolve(__dirname, "src/index.ts")],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        // test: /\.(js|ts)$/,
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: "source-map"
};