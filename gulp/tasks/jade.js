var fs = require('fs'),
  gulp = require('gulp'),
  jade = require('gulp-jade');

gulp.task('jade:development', function() {
  return gulp.src('src/html/index.jade')
    .pipe(jade({ locals: {} }))
    .pipe(gulp.dest('build'));
});

gulp.task('jade:production', function() {
  var manifest = JSON.parse(fs.readFileSync('build/rev-manifest.json', 'utf8'));

  return gulp.src('src/html/index.jade')
    .pipe(jade({ locals: { assets: manifest } }))
    .pipe(gulp.dest('build'));
});
