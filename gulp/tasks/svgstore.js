/**
 * Creates an SVG Store
 * and store it in Kirby's snippet dir
 * for easy insertion where needed
 */

 var  gulp         = require('gulp'),
      path         = require('path'),
      fs           = require('fs'),
      merge        = require('merge-stream'),
      config       = require('../config').svgstore,
      cheerio      = require('gulp-cheerio'),
      errorHandler = require('../util/errorHandler');

function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

gulp.task('svgstore', ['svgo'], function() {
    var folders = getFolders(config.src);

    var spritesTasks = folders.map(function(folder) {
      return gulp.src(path.join(config.src, folder, '*.svg'))
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

    return merge(spritesTasks);
});
