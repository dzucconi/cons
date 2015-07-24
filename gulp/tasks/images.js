var gulp = require('gulp');

gulp.task('build:images', function() {
  return gulp.src('src/assets/images/*')
    .pipe(gulp.dest('build/images'));
});
