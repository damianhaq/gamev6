const path = require("path");

module.exports = {
  devtool: "eval-source-map",
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  output: {
    // publicPath: "auto",
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
  },
  devServer: {
    port: 8080,
    static: path.join(__dirname, "docs"),
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
};
