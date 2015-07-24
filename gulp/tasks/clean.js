var gulp = require('gulp'),
  del = require('del');

gulp.task('teardown', function(done) {
  del('build', done);
});
