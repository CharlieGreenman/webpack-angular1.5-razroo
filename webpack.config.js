var path = require("path");
var open = require("open");
var node_modules_dir = path.join(__dirname, 'node_modules');

//a little bit of glitch before page opens,
//works well otherwise
open("http://localhost:8080/");

module.exports = {
    entry: [
        //'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/dist',
        path.resolve(__dirname, 'app/js/app.js')
    ],
    include: [
        path.resolve(__dirname, "app/jade"),
        path.resolve(__dirname, "app/js"),
        path.resolve(__dirname, "app/scss")

    ],
    output: {
        path: path.resolve(__dirname, './dist/js'),
        publicPath: '/js',
        filename: 'bundle.js'

    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", include: path.resolve(__dirname, 'app')}
        ],
        loaders: [
            {test: /\.scss$/,loaders: ["style", "css", "autoprefixer-loader", "sass"], exclude:  node_modules_dir},
            {test: /\.jade/,  loader: "jade", exclude:  node_modules_dir },
            {test: /\.js$/,  loader: 'babel', query:
                {
                    presets:['react']
                }
            }
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    }
};

