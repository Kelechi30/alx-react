const path = require("path");

module.exports = {
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

entry: {
  main: path.resolve(__dirname, "../src/index.js");
}
output: {
  filename: "bundle.js";
  path: path.resolve(__dirname, "../dist");
}
