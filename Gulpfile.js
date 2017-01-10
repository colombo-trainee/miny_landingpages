var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('main', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['main']);
});