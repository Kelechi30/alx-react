const path = require("path");

entry: {
  main: path.resolve(__dirname, "./js/dashboard_main.js");
}
output: {
  filename: "bundle.js";
  path: path.resolve(__dirname, "public");
}
module.exports = {
  mode: "production",
};
