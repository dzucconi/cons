var gulp = require('gulp'),
 stylus = require('gulp-stylus'),
 nib = require('nib'),
 browserSync = require('browser-sync');

gulp.task('build:css', function() {
  return gulp.src('./src/assets/stylesheets/application.styl')
    .pipe(stylus({ use: [nib()] }))
    .pipe(gulp.dest('./build/stylesheets'))
    .pipe(browserSync.stream());
});
