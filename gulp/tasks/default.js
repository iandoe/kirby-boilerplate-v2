/**
 * Default 'build' task
 */

 var gulp = require('gulp');

gulp.task('default', ['scss', 'jsplugins', 'js', 'svgo', 'imagemin'])
