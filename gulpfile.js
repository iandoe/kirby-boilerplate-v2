var gulp = require('gulp'),
    fs = require('fs'),
    moment = require('moment'),
    pkg = require('./package.json'),
    plugins = require('gulp-load-plugins')({camelize: true}),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var env = process.env.NODE_ENV;

var banner = fs.readFileSync('build/banner.js');

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('assets/sass/**/*.scss', ['css']);
    gulp.watch(['assets/js/main.js', 'assets/js/modules/*.js'], ['js']);
    gulp.watch('assets/js/libs/*.js', ['jsplugins']);
    gulp.watch('assets/svg/sprites/*.svg', ['svgstore']);
});

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {

    // Use current dirname + .loc to determine the domainName
    var pathArray = __dirname.split('/'),
        dirname = pathArray[pathArray.length-1],
        domainName = dirname + ".loc";

    browserSync({
        proxy: domainName
    });
});

gulp.task('css', function() {
    return gulp.src('assets/sass/style.scss')
        .pipe(plugins.plumber())
        .pipe(plugins.sass({
            imagePath: '/assets/img/'
        }))
        .on("error", plugins.notify.onError({
            title: "Error with SASS"
        }))
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
        .pipe(gulp.dest('assets/css'))
        // .pipe(plugins.livereload(server))
        .pipe(reload({stream:true}))
        .pipe(plugins.notify({
            title: pkg.name,
            message: "CSS Succesfully Compiled",
            activate: "com.google.Chrome"
    }))
});

gulp.task('js', function() {
    return gulp.src('assets/js/main.js')
        .pipe(plugins.plumber())
        .pipe(plugins.imports())
        .pipe(plugins.uglify())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.header(banner, {
            date: moment().format('Do MMMM YYYY, HH:mm')
        }))
        .pipe(gulp.dest('assets/js'))
        .pipe(reload({stream:true, once: true}))

});

gulp.task('jsplugins', function() {
    return gulp.src('assets/js/libs/*.js')
        .pipe(plugins.plumber())
        .pipe(plugins.concat("plugins.js"))
        .pipe(plugins.uglify())
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/js'))
        .pipe(plugins.notify("JS Plugins Compiled"))
});

gulp.task('svgstore', function() {
    return gulp.src('assets/svg/src/*.svg')
        .pipe(plugins.svgmin())
        .pipe(plugins.svgstore({
            fileName: 'sprites.svg',
            prefix: 'icon-',
            inlineSvg: true,
            transformSvg: function (svg, cb) {
                svg.find('//*[@fill]').forEach(function (child) {
                  child.attr('fill').remove()
                })
                cb(null)
            }
        }))
        .pipe(gulp.dest('assets/svg'))
        .pipe(plugins.notify({
            message: "SVG Optim + Sprite done",
            onLast: true
        }))
});

gulp.task('imagemin', function() {
    return gulp.src('assets/img/src/*')
    .pipe(
        plugins.cache(
        plugins.imagemin({
            optimizationLevel: 5,
            progressive: false,
            interlaced: true
        })
        )
    )
    .pipe(gulp.dest('assets/img'))
    .pipe(plugins.notify({
        message: "Images Compressed",
        onLast: true
    }))
});