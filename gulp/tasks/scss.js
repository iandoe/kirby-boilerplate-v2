/**
 * Compiles scss files in assets/sass/
 * to minified css in assets/css/
 * - Autoprefixer
 * - Banner
 */

 var  gulp         = require('gulp'),
      plumber      = require('gulp-plumber'),
      reload       = require('browser-sync').reload,
      argv         = require('yargs').argv,
      moment       = require('moment'),
      fs           = require('fs'),
      banner       = fs.readFileSync('gulp/banner.js'),
      bulkSass     = require('gulp-sass-bulk-import');
      assets       = require('../config').assets,
      config       = require('../config').scss,
      errorHandler = require('../util/errorHandler');

gulp.task('scss', function() {

    return gulp.src(config.src)
        .pipe(plumber(errorHandler))
        .pipe(plugins.sourcemaps.init())
        .pipe(bulkSass())
        .pipe(plugins.sass({
            // if task is launched with parameter --subdir,
            // change the image-url helper to reflect this
            imagePath: (argv.subdir) ? '/' + argv.subdir + '/' + assets.img : '/' + assets.img
        }))
        .pipe(plugins.autoprefixer(
            "last 2 versions", "> 1%", "ie 9", "ie 8"
        ))

        .pipe(plugins.if(ENV !== 'prod',
          plugins.sourcemaps.write()
        ))

        .pipe(plugins.if(ENV === 'prod',
          plugins.cleanCss({
            keepSpecialComments: 0
          }))
        )
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.header(banner))

        .pipe(gulp.dest(config.dest))

        .pipe(reload({stream:true}))
});
