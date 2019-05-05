const path = require("path");

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/js/app.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
