var path = require("path");
var open = require("open");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");
//for legac systems
require('es6-promise').polyfill();

//a little bit of glitch before page opens,
//works well otherwise
open("http://localhost:8080/");

module.exports = {
    entry: [
        //'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'src/app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, './dist/js'),
        publicPath: 'js',
        filename: 'bundle.js'
    },
    devtool: "#eval-source-map",
    plugins: [
      new webpack.LoaderOptionsPlugin({
        test: /\.js$/,
        options: {
          eslint: {
            configFile: path.join(__dirname, '.eslintrc')
          },
          debug: true,
          resolve: {
              extensions: ['', '.js', '.jsx']
          }
        }
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack Starter Angular - kitconcept',
        template: 'dist/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      })
    ],
    module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          },
          {
            test: /\.pug/,
            loader: "pug-html-loader"
          },
          {
            test: /\.html$/,
            loader: "html"
          },
          {
            test: /\.scss$/,
            loaders: ["style", "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]", "autoprefixer-loader", "sass"]
          },
          {
            test: /\.css$/,
            loaders: ["style", "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]"]
          },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
    }
};
