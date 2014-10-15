/**
 * Compiles main.js
 * to minified js as main.min.js
 * - Banner
 */

 var  gulp         = require('gulp'),
      reload       = require('browser-sync').reload,
      moment       = require('moment'),
      fs           = require('fs'),
      banner       = fs.readFileSync('gulp/banner.js'),
      config       = require('../config').js,
      errorHandler = require('../util/errorHandler');

gulp.task('js', function() {

  return gulp.src(config.src)

  .pipe(plugins.imports())
  .pipe(plugins.uglify())
  .pipe(plugins.rename({suffix: '.min'}))
  .pipe(plugins.header(banner, {
    date: moment().format('Do MMMM YYYY, HH:mm')
  }))

  // Error Handling
  .on('error', errorHandler)

  .pipe(gulp.dest(config.dest))

  // Browser Sync Reload
  .pipe(reload({stream:true, once: true}))
});
