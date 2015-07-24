var fs = require('fs'),
  gulp = require('gulp'),
  RevAll = require('gulp-rev-all'),
  del = require('del'),
  path = require('path');

gulp.task('rev', function() {
  var revAll = new RevAll();

  return gulp.src([
      'build/stylesheets/application.css',
      'build/javascripts/application.js',
      'build/images/**/*'
    ], { base: path.join(process.cwd(), 'build') })
    .pipe(revAll.revision())
    .pipe(gulp.dest('build'))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest('build'));
});

gulp.task('rev:clean', ['rev'], function(done) {
  var manifest, toClean;

  manifest = JSON.parse(fs.readFileSync('build/rev-manifest.json', 'utf8'));
  toClean = Object.keys(manifest).map(function(path) { return 'build/' + path; });

  del(toClean, done);
});
