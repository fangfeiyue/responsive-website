const gulp = require('gulp');
const postcss = require('gulp-postcss');
const px2rem = require('postcss-px2rem');

gulp.task('default', function () {
    const processor = [
        px2rem({remUnit:75})
    ];
    
    return gulp.src('./src/css/mobile.css')
           .pipe(postcss(processor))
           .pipe(gulp.dest('./dist/css/'));
});