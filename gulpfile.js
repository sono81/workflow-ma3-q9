const gulp = require('gulp');
const {src, dest} = require('gulp');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function css() {
    return src('less/**/*.less')
        .pipe(less())
        .pipe(dest('css'))
        .pipe(browserSync.stream())
}

function image() {
    return src('original-images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'))
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        }
    });
    gulp.watch('./less/**/*.less', css);
    gulp.watch('./original-images/*', image);
    gulp.watch('./*.html').on('change', browserSync.reload)
}

exports.watch = watch;