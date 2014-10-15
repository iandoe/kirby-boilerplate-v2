/**
 * The watch task
 */

 var  gulp         = require('gulp'),
      config       = require('../config').watch;

gulp.task('watch', ['browserSync'], function() {

  gulp.watch(config.scss, ['scss']);

  gulp.watch(config.js, ['js']);

  gulp.watch(config.jsplugins, ['jsplugins']);

  gulp.watch(config.svgo, ['svgo']);

});