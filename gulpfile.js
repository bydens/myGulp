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
    usemin = require('gulp-usemin'),
    templateCache = require('gulp-angular-templatecache');

var pathSass = ['!app/**/ignore.scss', 'app/components/**/*.+(scss|sass)'];
var pathHtml = 'app/**/*.html';
var pathTemplates = 'app/components/**/*.template.html';
var pathJs = ['!app/components/**/*.spec.js', 'app/components/**/*.js', 'app/components/**/*.*.js'];
var buildFolder = 'Deployment';
var moduleName = 'myApp';

gulp.task('sass', function() {
  return gulp.src(pathSass)
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(concat('main.css'))
      .pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/styles'))
    .pipe(browserSync.reload({stream: true})); //reload scss
});

gulp.task('templateCache', function() {
   return gulp.src('app/components/**/*.html')
    .pipe(templateCache({module: moduleName}))
    .pipe(gulp.dest('app/scripts'));
});

gulp.task('scripts', ['templateCache'], function() {
  return gulp.src(pathJs)
    .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/scripts'))
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
  gulp.watch(pathTemplates, ['scripts']);
  gulp.watch(pathHtml, browserSync.reload);
});

gulp.task('build', ['clean'], function() {
  
  var buildVendorJs = gulp.src('app/index.html')
    .pipe(usemin({
      cssVendor: [ cssnano() ],
      cssApp: [ cssnano() ],
      jsVendor: [ uglify() ],
      jsApp: [ uglify() ]
    }))
    .pipe(gulp.dest(buildFolder));
});