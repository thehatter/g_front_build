const gulp      = require('gulp');
const gp_concat = require('gulp-concat');
const gp_rename = require('gulp-rename');
const gp_uglify = require('gulp-uglify');

gulp.task('mobile', function(){
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

gulp.task('adaptive', function(){
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

gulp.task('default', ['mobile', 'adaptive'], function(){});
