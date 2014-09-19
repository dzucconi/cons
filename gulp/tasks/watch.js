var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('src/html/**', ['copy']);
  // Note: The browserify task handles js recompiling with watchify
});
