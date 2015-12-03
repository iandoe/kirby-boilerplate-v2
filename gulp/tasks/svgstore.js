/**
 * Creates an SVG Store
 * and store it in Kirby's snippet dir
 * for easy insertion where needed
 */

 var  gulp         = require('gulp'),
      config       = require('../config').svgstore,
      cheerio      = require('gulp-cheerio'),
      errorHandler = require('../util/errorHandler');

gulp.task('svgstore', ['svgo'], function() {

    return gulp.src(config.src)
        .pipe(plumber(errorHandler))
        .pipe(cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
          },
          parserOptions: { xmlMode: true }
        }))
        .pipe(plugins.svgstore({ inlineSvg: true }))
        .pipe(cheerio(function ($) {
          $('svg').attr('style', 'display:none');
        }))
        .pipe(gulp.dest(config.dest))
});
