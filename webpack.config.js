const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[base]",
        },
      },
    ],
  },

  resolve: {
    alias: {
      "samagra-ui": path.resolve(__dirname, "./src/index.ts"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};
