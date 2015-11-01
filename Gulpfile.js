var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('server', function() {
  gulp.src(['app', 'bower_components'])
    .pipe(server({
      livereload: true,
      open: true
    }));
});