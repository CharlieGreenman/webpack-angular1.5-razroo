var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    browserSync = require('browser-sync').create(),
    livereload = require('gulp-livereload');

//build for browsersync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// Uglifies

gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('minjs'))
});

gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(livereload())
});

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('./jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(livereload({ start: true }))
});

//create watch task
gulp.task('watch', function(){
  gulp.watch(['js/*.js', 'sass/*.scss', 'jade/*.jade'], ['scripts', 'sass', 'templates']);
});



gulp.task('default', ['scripts', 'sass', 'templates', 'watch']);






