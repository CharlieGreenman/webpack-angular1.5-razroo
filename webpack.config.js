var path = require("path");
var open = require("open");
require('es6-promise').polyfill();

//a little bit of glitch before page opens,
//works well otherwise
open("http://localhost:8080/");

module.exports = {
    entry: [
        //'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/dist',
        path.resolve(__dirname, 'app/scripts/app.js')
    ],
    output: {
        path: path.resolve(__dirname, './dist/js'),
        publicPath: 'js',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader",  exclude: /node_modules/ }
        ],
        loaders: [
            {test: /\.scss$/,loaders: ["style", "css", "autoprefixer-loader", "sass"]},
            {test: /\.jade/, loader: "jade" },
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
