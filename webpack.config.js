const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
     entry: './app/public/app.js',

     output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
     devtool: 'source-map',

     module: {
        loaders: [
          {
          test: /(\.jsx|\.js)$/,
          loaders: ["babel-loader"],
          exclude: /(node_modules|bower_components)/,
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: "file-loader"
        },
        {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            //fallbackLoader: 'css-loader',
            loader: "css-loader!sass-loader",
          })
        }
      ]
    },
    plugins: [
      new StyleLintPlugin(),
      new ExtractTextPlugin("main.css"),
    ],
 };
