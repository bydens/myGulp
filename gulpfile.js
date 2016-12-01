var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    rename = require("gulp-rename"),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    usemin = require('gulp-usemin');

var pathSass = ['!app/**/ignore.scss', 'app/components/**/*.+(scss|sass)'];
var pathHtml = 'app/*.html';
var pathJs = ['!app/components/**/*.spec.js', 'app/components/**/*.js', 'app/components/**/*.*.js'];
var buildFolder = 'Deployment';

gulp.task('sass', function() {
  return gulp.src(pathSass)
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(concat('main.css'))
      .pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({stream: true})); //reload scss
});

gulp.task('scripts', function() {
  return gulp.src(pathJs)
    .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() { // web server
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('clean', function() {
    return del.sync(buildFolder);
});

gulp.task('serve', ['browser-sync', 'sass', 'scripts'], function() {
  gulp.watch(pathSass, ['sass']);
  gulp.watch(pathJs, ['scripts']);
  gulp.watch(pathHtml, browserSync.reload);
});

gulp.task('build', ['clean'], function() {
  
  var buildVendorJs = gulp.src('app/index.html')
    .pipe(usemin({
      css: [ cssnano() ],
      jsvendor: [ uglify() ],
      jsApp: [ uglify() ]
    }))
    .pipe(gulp.dest(buildFolder));
});