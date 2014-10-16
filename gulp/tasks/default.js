/**
 * Default 'build' task
 */

 var gulp = require('gulp');

gulp.task('default', ['scss', 'js', 'svgo', 'imagemin'])
