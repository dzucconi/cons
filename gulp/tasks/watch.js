var gulp = require('gulp'),
  browserSync = require('browser-sync');

gulp.task('set:watch', function() {
  global.isWatching = true;
});

gulp.task('sync', ['development:build'], function() {
  browserSync.init({
    open: false,
    server: {
      baseDir: 'build'
    }
  });
});

gulp.task('jade:watch', ['jade:development'], browserSync.reload);

gulp.task('watch', ['set:watch', 'sync'], function() {
  gulp.watch('src/assets/stylesheets/**/*.styl', ['build:css']);
  gulp.watch(['src/html/**/*.jade', 'src/data/**/*.json'], ['jade:watch']);
});
