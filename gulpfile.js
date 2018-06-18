'use strict';
const gulp = require('gulp');
const gbrowserify = require('gulp-browserify');
const react = require('gulp-react');
const argv = require('yargs').argv;
const bumpup = require('gulp-bump');

gulp.task('browserify', function () {
    gulp.src('./env/src/index.js', {entry: true})
        .pipe(gbrowserify({
            transform: ['babelify']
        }))
        .pipe(gulp.dest('./env/dist'))
});

gulp.task('reactify', function () {
	return gulp.src('./src/index.jsx')
		.pipe(react())
		.pipe(gulp.dest('src'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.*', ['reactify', 'browserify']);
});

gulp.task('bump', function(){
    
    var files = ['./package.json']

    if(argv.patch){

    gulp.src(files)
        .pipe(bumpup({type:'patch'}))
        .pipe(gulp.dest('./'));
    }


    if(argv.minor){

    gulp.src(files)
        .pipe(bumpup({type:'minor'}))
        .pipe(gulp.dest('./'));
    }

    if(argv.major){

    gulp.src(files)
        .pipe(bumpup({type:'major'}))
        .pipe(gulp.dest('./'));
    }

    if(argv.prerelease){

    gulp.src(files)
        .pipe(bumpup({type:'prerelease'}))
        .pipe(gulp.dest('./'));
    }

});

gulp.task('default',  ['browserify']);
