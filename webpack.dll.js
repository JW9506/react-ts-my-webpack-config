const path = require("path");
const webpack = require("webpack");
module.exports = (_, { mode = "production" }) => {
  const config = {
    mode,
    entry: {
      react: ["react", "react-dom"]
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dll"),
      library: "[name]_[hash:10]"
    },
    plugins: [
      new webpack.DllPlugin({
        name: "[name]_[hash:10]",
        path: path.resolve(__dirname, "dll/manifest.json")
      })
    ]
  };
  return config;
};
