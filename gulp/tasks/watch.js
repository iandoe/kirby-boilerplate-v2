/**
 * The watch task
 */

 var  gulp         = require('gulp'),
      reload       = require('browser-sync').reload,
      config       = require('../config').watch;

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.scss, ['scss']);
  gulp.watch(config.js,   ['js']);
  gulp.watch(config.jslibs,   ['js:libs']);
  gulp.watch(config.img,  ['imagemin']);
  gulp.watch(config.svgo, ['svgo']);
  gulp.watch(config.php, function() {
    reload({ once: true });
  });
});
