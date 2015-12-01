var path = require("path");

config = {
    devtool: 'eval',
    // Makes sure errors in console map to the correct file
    // and line number
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'

    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" }
        ]
    },
    output: {
        filename: "./dist/js/app.js"
    }
};

module.exports = config;