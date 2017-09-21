/**
 * Created by Eden on 2017/9/18.
 */
'use strict';
var gulp = require('gulp'),
    clean = require('gulp-clean'),
    webpack = require('webpack-stream'),
    webpackConfig = require('./build/webpack.production.config.js');

gulp.task('clean', function (done) {
    gulp.src(['dist'])
        .pipe(clean())
        .on('end', done);
});

gulp.task('webpack', function () {
    return gulp.src('../src/index.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/public/'));
});

gulp.task('default', ['clean', 'webpack']);