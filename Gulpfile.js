var gulp = require('gulp');
var rubysass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var jshint = require('gulp-jshint');
var browsersync = require('browser-sync').create();

gulp.task('serve', ['styles'], function() {
    browsersync.init({
      server: "./",
      open: false
    });

    gulp.watch(['sass/**/*.scss', 'sass/**/*.sass'], ['styles']);
    gulp.watch(['./templates/*.jade'], ['templates']);
    gulp.watch("*.html, css/app.css").on('change', browsersync.reload);
});


gulp.task('templates', function(){
  gulp.src('./templates/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'))
});


// Using Ruby Sass / 'gulp-ruby-sass'
gulp.task('styles', function() {
  return rubysass('sass/app.scss', {sourcemap: true})
    .on('error', function(err) {
      console.error('Error', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./css/'))
    .pipe(browsersync.stream());
});

// gulp.task('lint', function() {
//   gulp.src('js/')
// });


gulp.task('default', ['serve']);