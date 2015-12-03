/**
 * Optimizes SVG files in assets/svg
 */

 var  gulp         = require('gulp'),
      config       = require('../config').svgo,
      errorHandler = require('../util/errorHandler');

// Optimize SVGs
gulp.task('svgo', function() {

    return gulp.src(config.src)
    .pipe(plumber(errorHandler))

    .pipe(plugins.svgmin())


    .pipe(gulp.dest(config.dest))
});
