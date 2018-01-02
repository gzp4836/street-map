var folder = ".";
var gulp = require('gulp');
// var minifycss = require('gulp-minify-css');
// var rename = require('gulp-rename');
// var notify = require('gulp-notify');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// uglify = require('gulp-uglify');
// 样式处理任务
// gulp.task('css', function () {
//   return gulp.src(folder + '/css/*.css')    //引入所有CSS
//     .pipe(rename({ suffix: '.min' }))   //重命名
//     .pipe(minifycss())                  //CSS压缩
//     .pipe(gulp.dest(folder + '/dist/css'))      //压缩版输出
// })
// sass
gulp.task('sass', function () {
  return gulp.src(folder + '/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(folder + '/css'));
});

// JS处理任务
// gulp.task('js', function () {
//   return gulp.src(folder + '/js/*.js')      //引入所有需处理的JS
//     .pipe(rename({ suffix: '.min' }))         //重命名
//     .pipe(uglify())                           //压缩JS
//     .pipe(gulp.dest(folder + '/dist/js'))        //压缩版输出
// });


// 静态服务器
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: folder + "/",
    //   directory: true
    }
  });
  gulp.watch(folder + "/*.html").on('change', browserSync.reload);
  gulp.watch(folder + "/js/*.js").on('change', browserSync.reload);
  gulp.watch(folder + "/css/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['sass','browser-sync']);
