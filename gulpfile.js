var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var wiredep     = require('wiredep').stream;
var eslint      = require('gulp-eslint');
var babel       = require('gulp-babel');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var concat = require('gulp-concat');
var reload      = browserSync.reload;

//compile jade to html, use wiredep, and browser reload once compiled
gulp.task('templates', function() {

    var YOUR_LOCALS = {};

    gulp.src('./app/jade/*.jade')
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

    gulp.src('./app/jade/*.jade')
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
    gulp.src('./app/scss/*.scss')
        .pipe(plumber())
        .pipe(autoprefixer())
        .pipe(sass({
          includePaths: ['./dist/bower_components/foundation/scss']
        }))
        .pipe(gulp.dest('./dist/css'))

        .pipe(reload({stream: true}));
});


gulp.task('sass-publish', function () {
    gulp.src('./app/scss/*.scss')
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
  return gulp.src('./src/images/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('./publish/images'));
});


//eslint task
gulp.task('lint', function () {
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
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./publish/js'));
});


gulp.task('js-watch', ['lint'], reload);


gulp.task('default', ['sass', 'templates', 'lint' ], function () {

    browserSync({server: 'dist'});

    gulp.watch('./app/**/*.jade', ['jade-watch']);
    gulp.watch('./app/**/*.scss', ['sass']);
    gulp.watch('./app/js/*.js', ['js-watch']);

});

gulp.task('publish', ['sass-publish', 'templates-publish', 'imagemin', 'lint-publish' ], function () {

});