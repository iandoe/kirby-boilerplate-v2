/**
 * Optimizes images in assets/img/src
 * and outputs in assets/img
 */

 var  gulp         = require('gulp'),
      config       = require('../config').imagemin,
      errorHandler = require('../util/errorHandler');

gulp.task('imagemin', function() {

  return gulp.src(config.src)
  .pipe(
      plugins.cache(
      plugins.imagemin({
          optimizationLevel: config.level,
          progressive:  config.progressive,
          interlaced: config.interlaced
      })
      )
  )

  .on('error', errorHandler)

  .pipe(gulp.dest(config.dest))
});
