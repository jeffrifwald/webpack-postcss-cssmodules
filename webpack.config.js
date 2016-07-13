"use strict";

var autoprefixer = require("autoprefixer");
var modules = require("postcss-modules");
var simpleVars = require("postcss-simple-vars");
var path = require("path");


module.exports = {
  entry: {
    "index": "./src/index.js"
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  module: {
    loaders: [{
      include: /(src)/,
      loader: "babel-loader",
      test: /\.js$/
    }, {
      loader: "style-loader!css-loader?modules!postcss-loader",
      test: /\.css$/
    }, {
      loader: "json",
      test: /\.json$/
    }]
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "build")
  },
  postcss: function postcss() {
    return [simpleVars, autoprefixer];
  }
};
