const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/app.js', './scss/mobile_main.scss'],
  output: {
    filename: 'build/bundle.js'
  },
  module: {

    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000
            }
          }
        ]
      },
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
        // ?url=false to not load images in css and scss files
        // minimize=true to minify css
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract([
          'css-loader?url=false&minimize=true',
          'resolve-url-loader',
          'sass-loader'
          ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: 'build/[name].bundle.css',
      allChunks: true,
    }),
  ],
};
