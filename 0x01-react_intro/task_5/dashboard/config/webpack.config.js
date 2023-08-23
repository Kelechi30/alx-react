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
