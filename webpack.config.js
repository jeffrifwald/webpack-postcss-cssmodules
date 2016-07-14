"use strict";

var autoprefixer = require("autoprefixer");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
      loader: ExtractTextPlugin.extract("style-loader", ["css-loader?modules", "postcss-loader"]),
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
  plugins: [
    new ExtractTextPlugin("index.css")
  ],
  postcss: function postcss() {
    return [simpleVars({
      variables: function variables() {
        return require("./src/styles/variables");
      }
    }), autoprefixer];
  }
};
