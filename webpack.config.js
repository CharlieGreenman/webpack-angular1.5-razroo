config = {
    // Makes sure errors in console map to the correct file
    // and line number
    devtool: 'eval',
    entry: "./app/js/app.js",
    output: {
        path: __dirname + "/app",
        filename: 'bundle.js',

        // Everything related to Webpack should go through a build path,
        // localhost:3000/build. That makes proxying easier to handle
        publicPath: 'http://localhost:8090/dist'
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