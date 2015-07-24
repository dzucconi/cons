var gulp = require('gulp'),
  rename = require('gulp-rename'),
  awspublish = require('gulp-awspublish'),
  project = process.env.PROJECT_NAME;

gulp.task('deploy', ['production:build'], function() {
  var publisher = awspublish.create({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
    params: {
      Bucket: process.env.S3_BUCKET
    }
  });

  return gulp.src('./build/**/*')
    // Optionally publish to a non-root path
    .pipe(rename(function(path) {
      path.dirname = project + '/' + path.dirname;
    }))

    .pipe(publisher.publish())

    // Optionally delete files in your bucket that are not in your local folder
    .pipe(publisher.sync(project ? (project + '/') : null))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter());
});
