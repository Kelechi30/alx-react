entry: {
  main: path.resolve(__dirname, "./js/dashboard_main.js");
}
output: {
  filename: "[name].bundle.js";
  path: path.resolve(__dirname, "dist");
}
module.exports = {
  mode: "production",
};
