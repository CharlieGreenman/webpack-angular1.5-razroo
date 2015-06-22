var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var jade        = require('gulp-jade');
var wiredep     = require('wiredep').stream;
var eslint      = require('gulp-eslint');
var babel       = require('gulp-babel');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
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

//compress task that has reload attached to it
gulp.task('compress', function() {
  return gulp.src('./app/js/*.js')
    .pipe(uglify({
      beautify: true
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('js-watch', ['compress'], reload);

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
        .pipe(babel());
});


gulp.task('default', ['sass', 'templates', 'lint' ], function () {

    browserSync({server: 'dist'});

    gulp.watch('./app/**/*.jade', ['jade-watch']);
    gulp.watch('./app/**/*.scss', ['sass']);
    gulp.watch('./app/js/*.js', ['js-watch']);

});