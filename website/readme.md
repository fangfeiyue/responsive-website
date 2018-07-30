## 项目总结

- 众所周知为兼容所有浏览器，有的CSS属性需要对不同的浏览器加上前缀，然而有时添加一条属性，需要添加3~4条类似的属性只是为了满足浏览器的兼容，这不仅会增加许多的工作量，还会使得你的思路被打断。我们可以使用[AutoPrefixer](https://github.com/postcss/autoprefixer)来解决这个问题。
```
npm install autoPrefixer --save-dev
```

gulp中的使用方法
```
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('default', function () {
    const processor = [
        autoprefixer()
    ];
    
    return gulp.src('./src/css/mobile.css')
           .pipe(postcss(processor))
           .pipe(gulp.dest('./dist/css/'));
});
```

- css压缩-cssnano
```
npm install cssnano --save-dev
```

gulp中的使用方法
```
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const px2rem = require('postcss-px2rem');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('default', function () {
    const processor = [
        px2rem({remUnit:75}),
        autoprefixer(),
        cssnano()
    ];
    
    return gulp.src('./src/css/mobile.css')
           .pipe(postcss(processor))
           .pipe(gulp.dest('./dist/css/'));
});
```
