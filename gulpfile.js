const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      pug = require('gulp-pug');

gulp.task('default', () =>{
  browserSync.init({
    server: './'
  });
  gulp.watch('./index.html').on('change',browserSync.reload);
  gulp.watch('./vistas/*.html').on('change',browserSync.reload);
  gulp.watch('./css/*.css').on('change',browserSync.reload);
  gulp.watch('./js/*.js').on('change',browserSync.reload);
  gulp.watch('./js/**/*.js').on('change',browserSync.reload);
  gulp.watch('./sass/*.sass', ['sass']);//.on('change', )
  gulp.watch('./jade/*.pug', ['pug']);//.on('change', )
  gulp.watch('./jade/index.pug', ['index']);//.on('change', )
  gulp.watch('./img/*.jpg').on('change',browserSync.reload);
  gulp.watch('./img/*.png').on('change',browserSync.reload);
})
gulp.task('sass', () =>{
  gulp.src('./sass/*.sass')
    .pipe(sass())
    .pipe(autoprefixer({
      versions: ['last 2 browers']
    }))
    .pipe(gulp.dest('./css'))
})
gulp.task('pug', ()=>{
  gulp.src('./jade/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./vistas'))
})
gulp.task('index', ()=>{
  gulp.src('./jade/index.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./'))
})
