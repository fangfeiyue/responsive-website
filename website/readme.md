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
- Q:使用npm运行react程序报错The 'mode' option has not been set, webpack will fallback to 'production' for th

A: 只需要在项目中的package.json中script中配置上"dev": "webpack --mode development",    "build": "webpack --mode production" 两句即可使用方法在cmd中输入 npm run dev (开发环境输出的index.js没有压缩) 
- Q:在项目里运行webpack命令后报`WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'developmen
t' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/`

A：webpackconfig.js文件中应该写上mode，如下
```
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development'
};
``` 

- Q: 配置文件写的输出文件名为bundle.js，可打包完成后输出的main.js
```
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
},
```
A：最后发现误将webpack.config.js写成了webpackconfig.js


