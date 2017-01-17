/* jshint node: true */
'use strict';

var gulp = require('gulp'),
    g = require('gulp-load-plugins')({lazy: false}),
    noop = g.util.noop,
    swig = require('gulp-swig'),
    colors = require('../data/colors.js').getAll(),
    version = require('../package.json').version,
    prefix = require('../package.json').prefix,
    packageName = require('../package.json').name,
    template = {
      prefix: prefix,
      packageName: packageName,
      version: version,
      colors: colors
    };

gulp.task('styles-dist', ['render-css','render-scss','render-less', 'render-sass', 'render-stylus'], noop);

gulp.task('render-scss', function () {
  return gulp.src(['templates/colors.scss'])
    .on('error', g.notify.onError('<%= error.message%>'))
    .pipe(g.data(template))
    .pipe(swig())
    .pipe(g.rename(packageName + '.latest.scss'))
    .pipe(gulp.dest('dist/latest/scss/'))
    .pipe(g.rename(packageName + '.' + version + '.scss'))
    .pipe(gulp.dest('dist/'+ version + '/scss/'));
});

gulp.task('render-less', function () {
  return gulp.src(['templates/colors.less'])
    .on('error', g.notify.onError('<%= error.message%>'))
    .pipe(g.data(template))
    .pipe(swig())
    .pipe(g.rename(packageName + '.latest.less'))
    .pipe(gulp.dest('dist/latest/less/'))
    .pipe(g.rename(packageName + '.' + version + '.less'))
    .pipe(gulp.dest('dist/'+ version + '/less/'));
});

gulp.task('render-sass', function () {
  return gulp.src(['templates/colors.sass'])
    .on('error', g.notify.onError('<%= error.message%>'))
    .pipe(g.data(template))
    .pipe(swig())
    .pipe(g.rename(packageName + '.latest.sass'))
    .pipe(gulp.dest('dist/latest/sass/'))
    .pipe(g.rename(packageName + '.' + version + '.sass'))
    .pipe(gulp.dest('dist/'+ version + '/sass/'));
});

gulp.task('render-stylus', function () {
  return gulp.src(['templates/colors.styl'])
    .on('error', g.notify.onError('<%= error.message%>'))
    .pipe(g.data(template))
    .pipe(swig())
    .pipe(g.rename(packageName + '.latest.styl'))
    .pipe(gulp.dest('dist/latest/stylus/'))
    .pipe(g.rename(packageName + '.' + version + '.styl'))
    .pipe(gulp.dest('dist/'+ version + '/stylus/'));
});


gulp.task('render-css', function () {
  return gulp.src(['templates/colors.css'])
    .on('error', g.notify.onError('<%= error.message%>'))
    .pipe(g.data(template))
    .pipe(swig())
    .pipe(g.rename(packageName + '.latest.css'))
    .pipe(gulp.dest('dist/latest/css/'))
    .pipe(g.rename(packageName + '.' + version + '.css'))
    .pipe(gulp.dest('dist/'+ version + '/css/'))
    .pipe(g.minifyCss())
    .pipe(g.rename(packageName + '.' + version + '.min.css'))
    .pipe(gulp.dest('dist/'+ version + '/css/'))
    .pipe(g.rename(packageName + '.latest.min.css'))
    .pipe(gulp.dest('dist/latest/css/'));
});

