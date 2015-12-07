var path = require("path");
var open = require("open");

//a little bit of glitch before page opens,
//works well otherwise
open("http://localhost:8080/");

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/dist',
        path.resolve(__dirname, 'app/js/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: 'js',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            { test: /\.json$/, loader: 'json'}
        ],
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" },
            {test: /\.scss$/,loaders: ["style", "css", "sass"]}
        ]
    }
};

