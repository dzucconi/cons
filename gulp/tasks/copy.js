var gulp = require('gulp');

gulp.task('copy', function() {
  return gulp.src('src/html/**')
    .pipe(gulp.dest('build'));
});
