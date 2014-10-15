/**
 * Compiles scss files in assets/sass/
 * to minified css in assets/css/
 * - Autoprefixer
 * - Banner
 */

 var  gulp         = require('gulp'),
      reload       = require('browser-sync').reload,
      moment       = require('moment'),
      fs           = require('fs'),
      banner       = fs.readFileSync('gulp/banner.js'),
      config       = require('../config').scss,
      errorHandler = require('../util/errorHandler');

gulp.task('scss', function() {

    return gulp.src(config.src)

        .pipe(plugins.sass({
            imagePath: '/assets/img/'
        }))
        .on('error', errorHandler)
        .pipe(plugins.autoprefixer(
            "last 2 versions", "> 1%", "ie 9", "ie 8"
        ))
        .pipe(plugins.minifyCss({
            keepSpecialComments: 0,
            removeEmpty: true
        }))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.header(banner, {
            date: moment().format('Do MMMM YYYY, HH:mm')
        }))

        .pipe(gulp.dest(config.dest))

        .pipe(reload({stream:true}))
});
