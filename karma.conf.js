var path = require('path');
var hasCoverage = global.process.argv.reduce(function (result, arg) {
  return arg.indexOf('coverage') !== -1 || result;
});

var include = [
  path.resolve('./src')
];

var preLoaders = hasCoverage ? [

  // Process test code with Babel
  {test: /_spec\.js$/, loader: 'babel', include: include},

  // Process all non-test code with Isparta
  {test: /\.js$/, loader: 'isparta', include: include, exclude: /_spec\.js$/}
] : [
  {test: /\.js$/, loader: 'babel', include: include}
];
var loaders = [
  {test: /\.scss$/,loaders: ["style", "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]", "autoprefixer-loader", "sass"]},
  {test: /\.css$/,loaders: ["style", "css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]"]},
  {test: /\.png$/, loader: 'null'},
  {test: /\.jpg$/, loader: 'null'},

  // Loader for JSON, may be used in some tests
  {test: /\.json$/, loader: 'json'},

  // Need some real loaders for HTML, because angular directives are coupled with templates
  {test: /\.pug/, loader: "pug-html-loader" },
  { test: /\.html$/, loader: "html" },
];


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'spec.js'
    ],
    webpack: {
      devtool: 'eval',
      module: {
        loaders: loaders,
        preLoaders: preLoaders
      },
      cache: true
    },
    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true
      }
    },
    preprocessors: {
      'spec.js': ['webpack']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      subdir: '.',
      reporters: [
        {type: 'cobertura', file: 'cobertura.xml'},
        {type: 'text', file: 'text.txt'},
        {type: 'text-summary', file: 'text-summary.txt'},
        {type: 'html'}
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
