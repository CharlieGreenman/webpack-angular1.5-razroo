var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var jade        = require('gulp-jade');
var jshint      = require('gulp-jshint');
var wiredep = require('wiredep').stream;
var reload      = browserSync.reload;


//compile jade to html and use browser reload, once compiled
gulp.task('templates', function() {

    var YOUR_LOCALS = {};

    gulp.src('./app/jade/*.jade')
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


//Sass task for live injecting into all browsers

gulp.task('sass', function () {
    gulp.src('./app/scss/*.scss')
        .pipe(sass({
          includePaths: ['./dist/bower_components/foundation/scss']
        }))
        .pipe(gulp.dest('./dist/css'))

        .pipe(reload({stream: true}));
});

//Separate task for the reaction to js files make change even without compilation and what not
gulp.task('compress', function() {
  return gulp.src('./app/js/*.js')
    .pipe(uglify({
      beautify: true
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('js-watch', ['compress'], reload);

//Serve and watch the scss/jade files for changes

gulp.task('default', ['sass', 'templates' ], function () {

    browserSync({server: 'dist'});

    gulp.watch('./app/**/*.jade', ['jade-watch']);
    gulp.watch('./app/**/*.scss', ['sass']);
    gulp.watch('./app/js/*.js', ['js-watch']);

});