var path = require("path");
var open = require("open");
var HtmlWebpackPlugin = require('html-webpack-plugin');
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
    debug: true,
    devtool: "#eval-source-map",
    plugins: [
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
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader",  exclude: /node_modules/ }
        ],
        loaders: [
            { test: /\.html$/, loader: "html" },
            {test: /\.scss$/,loaders: ["style", "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]", "autoprefixer-loader", "sass"]},
            {test: /\.css$/,loaders: ["style", "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]"]},
            {test: /\.pug/, loader: "pug-loader" },
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    },
    eslint: {
        configFile: '.eslintrc'
    }
};
