/**
 * Compiles assets/js/libs
 * to minified js as plugins.min.js
 */

 var  gulp         = require('gulp'),
      config       = require('../config').jsplugins,
      errorHandler = require('../util/errorHandler');


gulp.task('jsplugins', function() {

    return gulp.src(config.src)

        .pipe(plugins.plumber())
        .pipe(plugins.concat("plugins.js"))
        .pipe(plugins.uglify())
        .pipe(plugins.rename({suffix: '.min'}))

        .pipe(gulp.dest(config.dest))
});
