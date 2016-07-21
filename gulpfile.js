'use strict';

var gulp    = require('gulp'),
sass        = require('gulp-sass'),
browserSync = require('browser-sync');


//sass
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('./css'));
});


//browser-sync
gulp.task('browser-sync', function() {
  browserSync.init(['./css/**', './**'], {

    port: 5000,

    server: {
      baseDir: './',
      index: './index.html'
    }

  });
});


//view
gulp.task('teste', ['sass', 'browser-sync' ], function() {
  gulp.watch('./sass/**/*.scss', ['sass']);

});



