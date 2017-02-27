var path = require("path");
var open = require("open");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require("webpack");


//a little bit of glitch before page opens,
//works well otherwise
open("http://localhost:8081/");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8081',
        path.resolve(__dirname, 'src/app/main.ts')
    ],
    output: {
        path: path.resolve(__dirname, './dist/js'),
        publicPath: 'js',
        filename: 'bundle.js'
    },
    resolve: {
      extensions: [".js", ".json", ".ts"]
    },
    performance: { hints: false },
    devtool: "#eval-source-map",
    plugins: [
      new webpack.LoaderOptionsPlugin({
        test: /\.tsx?$/,
        options: {
          eslint: {
            configFile: path.join(__dirname, '.eslintrc')
          },
          debug: true,
          resolve: {
              extensions: ['', '.ts', '.tsx']
          },
          resolveLoader: {
            modules: ['node_modules', __dirname + '/client/node_modules'],
          }
        }
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack Starter Angular',
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
            test: /\.tsx?$/,
            use: ['eslint-loader', 'ts-loader'],
            exclude: /(node_modules)/
          },
          {
            test: /\.pug/,
            use: 'pug-html-loader'
          },
          {
            test: /\.html$/,
            use: "html-loader"
          },
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]", "autoprefixer-loader", "sass-loader"]
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]"]
          }
        ]
    }
};
