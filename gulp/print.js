'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('print', ['build'], function() {
    return gulp.src(options.dist + '/app/index.html')
      .pipe($.htmlPdf())
      .pipe(gulp.dest());

  });
};
