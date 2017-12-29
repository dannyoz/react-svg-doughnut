'use strict';

var gulp        = require('gulp');
var gbrowserify = require('gulp-browserify');

gulp.task('browserify', function () {
    gulp.src('./env/src/index.js', {entry: true})
        .pipe(gbrowserify({
            transform: ['babelify']
        }))
        .pipe(gulp.dest('./env/dist'))
});

gulp.task('watch', function () {
    gulp.watch('./env/src/**/*.js', ['browserify']);
    gulp.watch('./src/**/*.*', ['browserify']);
});

gulp.task('default',  ['browserify']);
