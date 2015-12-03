/**
 * Creates an SVG Store
 * and store it in Kirby's snippet dir
 * for easy insertion where needed
 */

 var  gulp         = require('gulp'),
      config       = require('../config').browserSync,
      browserSync  = require('browser-sync');

gulp.task('browserSync', function() {

    // Use current dirname + .dev to determine the domainName
    var pathArray = __dirname.split('/'),
    // Go up two dirs (-3)
    dirname = pathArray[pathArray.length-3],
    domainName = dirname + config.domain;
    console.log(domainName);

    browserSync({
      proxy: domainName,
      // Do not open Browser (annoying on multiple projects)
      open: false
    });
  });
