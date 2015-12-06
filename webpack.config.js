var path = require("path");

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/dist',
        path.resolve(__dirname, 'app/js/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: 'js',
        filename: 'bundle.js'
    }
//    //module: {
//    //    preLoaders: [
//    //        { test: /\.json$/, loader: 'json'}
//    //    ],
//    //    loaders: [
//    //        { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
//    //        {test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" }
//    //    ]
//    //}
};