/**
 * Default 'build' task
 */

 var gulp = require('gulp');

gulp.task('default', ['scss', 'js:libs', 'js', 'svgo', 'imagemin']);
