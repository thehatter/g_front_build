const gulp      = require('gulp');
const sass      = require('gulp-sass');
const cssimport = require("gulp-cssimport");

const gp_concat = require('gulp-concat');
const gp_rename = require('gulp-rename');
const gp_uglify = require('gulp-uglify');

gulp.task('adaptive_css', function() {
  return gulp.src('./scss/adaptive_main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssimport())
    .pipe(gp_rename('adaptive_styles.bundle.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('mobile_css', function() {
  return gulp.src('./scss/adaptive_main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssimport())
    .pipe(gp_rename('mobile_styles.bundle.css'))
    .pipe(gulp.dest('./build'));
});


gulp.task('mobile_js', function() {
    return gulp.src(['./src/vendor/jquery-3.2.1.min.js',
                     './src/vendor/bootstrap.min.js',
                     './src/vendor/bootstrap.offcanvas.min.js',
                     './src/vendor/ajax.js',
                     './src/vendor/lytebox.js',
                     './src/vendor/lightbox.min.js',
                     './src/vendor/featherlight.min.js',
                     './src/custom/main.js',
                     './src/vendor/jquery.countdown.js',
                     './src/vendor/scroll.js',
                     './src/vendor/owl.carousel.min.js',
                     './src/vendor/carousel-config-main.js',
                     './src/vendor/jquery-ui.min.js',
                     './src/custom/wather.js',
                     './src/custom/rates.js',
                   ])
        .pipe(gp_concat('m_concat.js'))
        .pipe(gulp.dest('build'))
        .pipe(gp_rename('mobile_bundle.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('adaptive_js', function() {
    return gulp.src(['./src/vendor/jquery-1.10.2.min.js',
                     './src/vendor/bootstrap.min.js',
                     './src/vendor/jquery.jcarousel.min.js',
                     './src/vendor/ajax.js',
                     './src/vendor/lytebox.js',
                     './src/vendor/lightbox.min.js',
                     './src/vendor/jasny-bootstrap.min.js',
                     './src/custom/tob_bar_2015.js',
                     './src/vendor/featherlight.min.js',
                     './src/custom/main.js',
                     './src/vendor/jquery.countdown.js',
                     './src/vendor/scroll.js',
                     './src/vendor/owl.carousel.min.js',
                     './src/vendor/jquery-ui.min.js',
                     './src/custom/wather.js',
                     './src/custom/rates.js',
                   ])
        .pipe(gp_concat('a_concat.js'))
        .pipe(gulp.dest('build'))
        .pipe(gp_rename('adaptive_bundle.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['mobile_js', 'adaptive_js'], function(){});

gulp.task('watch_adaptive_css', function () {
  gulp.watch('./scss/**/*.scss', ['adaptive_css']);
});

gulp.task('watch_mobile_css', function () {
  gulp.watch('./scss/**/*.scss', ['mobile_css']);
});
