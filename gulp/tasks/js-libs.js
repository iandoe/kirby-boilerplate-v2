/**
 * Compiles libs/*.js
 * to minified js as libs.min.js
 */

 var  gulp         = require('gulp'),
      concat       = require('gulp-concat'),
      plumber      = require('gulp-plumber'),
      reload       = require('browser-sync').reload,
      config       = require('../config').jslibs,
      errorHandler = require('../util/errorHandler');

gulp.task('js:libs', function() {

  return gulp.src(config.src)
    .pipe(plumber(errorHandler))
    .pipe(concat('libs.min.js'))
    .pipe(
        plugins.streamify(
          plugins.uglify()
        )
    )
    .pipe(gulp.dest(config.dest))

    // Browser Sync Reload
    .pipe(reload({stream:true, once: true}))
});
