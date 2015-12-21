var gulp = require('gulp'),
    fontSpider = require('gulp-font-spider');

/*
*  声明转换字体
*/
gulp.task('fontSpider', function() {
  return gulp.src('index.html')
          .pipe(fontSpider())
});

gulp.task('default', ['fontSpider'])
