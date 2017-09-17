const gulp = require('gulp');
const rimraf = require('rimraf');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const livereload = require('gulp-livereload');

// Compile sass to css for dev.
gulp.task('sass:dev', () => {
  return gulp.src('./styles/sass/*.scss')
  // Initializes sourcemaps.
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    // Writes sourcemaps into the CSS file.
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./styles/css'))
    .pipe(livereload());
});

// Compile sass to css for production.
gulp.task('sass:prod', function () {
  return gulp.src('./styles/sass/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({
      suffix: ".min",
    }))
    .pipe(gulp.dest('./styles/css'));
});

// Reload HTML
gulp.task('html', function() {
  return gulp.src('./index.html')
    .pipe(livereload());
});

// Reload JS
gulp.task('js', function() {
  return gulp.src('./js/main.js')
    .pipe(livereload());
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch('./styles/sass/*.scss', ['sass:dev']);
  gulp.watch('./index.html', ['html']);
  gulp.watch('./js/main.js', ['js']);
});

gulp.task('default', ['watch']);
