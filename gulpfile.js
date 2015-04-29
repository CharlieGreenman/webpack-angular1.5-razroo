var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    webserver = require('gulp-webserver');
    browserSync = require('browser-sync').create();

// Starts a test server, which you can view at http://localhost:8080
gulp.task('server', function() {
  gulp.src('./')
    .pipe(webserver({
      port: 8080,
      host: 'localhost',
      fallback: 'index.html',
      livereload: true,
      open: true
    }))
  ;
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



gulp.task('default', ['scripts', 'sass', 'templates', 'watch', 'server']);






