/**
 * Compiles scss files in assets/sass/
 * to minified css in assets/css/
 * - Autoprefixer
 * - Banner
 */

 var  gulp         = require('gulp'),
      reload       = require('browser-sync').reload,
      argv         = require('yargs').argv,
      moment       = require('moment'),
      fs           = require('fs'),
      banner       = fs.readFileSync('gulp/banner.js'),
      assets       = require('../config').assets,
      config       = require('../config').scss,
      errorHandler = require('../util/errorHandler');

gulp.task('scss', function() {

    return gulp.src(config.src)

        .pipe(plugins.sass({
            // if task is launched with parameter --subdir,
            // change the image-url helper to reflect this
            imagePath: (argv.subdir) ? '/' + argv.subdir + '/' + assets.img : '/' + assets.img
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
