var gulp = require('gulp'),
  runSequence = require('run-sequence');

gulp.task('development:build', function(done) {
  runSequence(
    'teardown',
    [
      'jade:development',
      'build:js',
      'build:css',
      'build:images'
    ],
    done
  );
});

gulp.task('production:build', function(done) {
  runSequence(
    'teardown',
    [
      'build:js',
      'build:css',
      'build:images'
    ],
    [
      'compress:js',
      'compress:css'
    ],
    'rev:clean',
    'jade:production',
    done
  );
});
