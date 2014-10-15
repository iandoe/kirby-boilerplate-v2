/**
 * Compiles main.js (using Browserify)
 * to minified js as main.min.js
 * - Banner
 */

 var  gulp         = require('gulp'),
      browserify   = require('browserify'),
      source       = require('vinyl-source-stream'),
      reload       = require('browser-sync').reload,
      moment       = require('moment'),
      fs           = require('fs'),
      banner       = fs.readFileSync('gulp/banner.js'),
      config       = require('../config').js,
      errorHandler = require('../util/errorHandler');

gulp.task('js', function() {

  return browserify({
    entries: './assets/js/main.js',
    debug: ENV !== 'prod'
  }).bundle()

    .on('error', errorHandler)

    .pipe(source('main.min.js'))
    .pipe(
      plugins.if(ENV === 'prod',
        plugins.streamify(
          plugins.uglify()
        )
      )
    )

    .pipe(plugins.header(banner, {
        date: moment().format('Do MMMM YYYY, HH:mm')
    }))

    .pipe(gulp.dest(config.dest))

    // Browser Sync Reload
    .pipe(reload({stream:true, once: true}))
});
