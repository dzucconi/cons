var R = require('ramda'),
  gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  watchify = require('watchify'),
  babelify = require('babelify'),
  gutil = require('gulp-util'),
  browserSync = require('browser-sync'),
  handleErrors = require('../util/handleErrors'),

  bundle,
  bundler,
  options,
  config = {
    entries: ['./src/assets/javascripts/application.js'],
    extensions: ['.js'],
    outputFile: 'application.js',
    outputDir: './build/javascripts'
  };

options = R.merge(R.pick(['entries', 'extensions'], config), watchify.args);
bundler = browserify(options);
bundler.transform(babelify)

bundle = function() {
  return bundler
    .bundle()
    .on('error', handleErrors)
    .pipe(source(config.outputFile))
    .pipe(gulp.dest(config.outputDir))
    .pipe(browserSync.stream({ once: true }));
};

gulp.task('build:js', function() {
  if (global.isWatching) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
    bundler.on('log', gutil.log)
  }

  return bundle();
});
