var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css'),
  runSequence = require('run-sequence');

gulp.task('compress:js', function() {
  return gulp.src('build/javascripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/javascripts'))
});

gulp.task('compress:css', function() {
  return gulp.src('build/stylesheets/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/stylesheets'))
});
