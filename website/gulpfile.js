const gulp = require('gulp');
const postcss = require('gulp-postcss');
const px2rem = require('postcss-px2rem');
const autoprefixer = require('autoprefixer');

gulp.task('default', function () {
    const processor = [
        px2rem({remUnit:75}),
        autoprefixer()
    ];
    
    return gulp.src('./src/css/mobile.css')
           .pipe(postcss(processor))
           .pipe(gulp.dest('./dist/css/'));
});