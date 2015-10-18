var gulp        = require('gulp');
var browserSync = require('browser-sync');
var webpack = require('webpack-stream');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var wiredep     = require('wiredep').stream;
var eslint      = require('gulp-eslint');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var spritesmith = require('gulp.spritesmith');
var reload      = browserSync.reload;

//compile jade to html, use wiredep, and browser reload once compiled
gulp.task('templates', function() {

    var YOUR_LOCALS = {};

   return gulp.src('./app/jade/*.jade')
        .pipe(plumber())
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(wiredep({
        directory: './dist/bower_components',
        bowerJson: require('./dist/bower.json'),
        ignorePath: '/dist'
         }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('templates-publish', function() {

    var YOUR_LOCALS = {};

   return  gulp.src('./app/jade/*.jade')
        .pipe(plumber())
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: false
        }))
        .pipe(wiredep({
        directory: './dist/bower_components',
        bowerJson: require('./dist/bower.json'),
        ignorePath: '/dist'
         }))
        .pipe(gulp.dest('./publish'))
});


gulp.task('jade-watch', ['templates'], reload);


//Sass task and browser reload

gulp.task('sass', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(plumber())
        .pipe(autoprefixer())
        .pipe(sass({
          includePaths: ['./dist/bower_components/foundation/scss']
        }))
        .pipe(gulp.dest('./dist/css'))

        .pipe(reload({stream: true}));
});


gulp.task('sass-publish', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(plumber())

        .pipe(sass({
          includePaths: ['./dist/bower_components/foundation/scss'],
          outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./publish/css'))
        .pipe(autoprefixer())

        .pipe(reload({stream: true}));
});

//compress task that has reload attached to it
gulp.task('imagemin', function() {
  return gulp.src('./app/img/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }))
    .pipe(gulp.dest('./dist/img'));
});


//eslint task
gulp.task('lint', function () {
    return gulp.src(['./app/js/*.js'])
        .pipe(webpack({
          module: {
            loaders: [
              { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader!jsx-loader"}
            ]
          },
          output: {
              filename: "app.js"
          }
        }))
        .pipe(plumber())
        .pipe(eslint({
          envs: {
                browser: true
            }
          }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError())
        .pipe(gulp.dest('./dist/js'));
});

//eslint task
gulp.task('lint-publish', function () {
    return gulp.src(['./app/js/*.js'])
        .pipe(plumber())
        .pipe(eslint({
          envs: {
                browser: true
            }
          }))
        .pipe(eslint.format())
        .pipe(eslint.failOnError())
        .pipe(babel())
        .pipe(gulp.dest('./publish/js'));
});


gulp.task('js-watch', ['lint'], reload);


gulp.task('default', ['sass', 'templates', 'lint', 'imagemin' ], function () {

    browserSync({server: 'dist'});

    gulp.watch('./app/**/*.jade', ['jade-watch']);
    gulp.watch('./app/**/*.scss', ['sass']);
    gulp.watch('./app/js/*.js', ['js-watch']);

});

gulp.task('publish', ['sass-publish', 'templates-publish', 'imagemin', 'lint-publish' ], function () {

});