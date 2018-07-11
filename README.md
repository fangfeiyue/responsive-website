# responsive-website
### 单位像素
- 定义：图像显示的基本单位，也被称为改图像的最小取样
- 解读：每个这样的图像元素不是一个点或者一个方块，而是一个抽象的取样
- 特点：
    - 并不是绝对单位
    - 跟他的所使用的上下文情景有关
### 媒体查询
#### 视口
| 视口 | 哪几种 | 为我所用 |
| -------- | -----: | :----: |
| 可视区域 | 理想视口；布局视口；视觉视口 | 通过meta标签viewport属性控制视口 |
- 理想视口
    - 设备厂商说了算
    - 怎么来查看
        - window.screen.width
        - [查看视口的网站](http://viewportsizes.com/)
- 布局视口
    - 怎么来查看
        - document.documentElement.clientWidth

viewport标签属性

| width | height | user-scalable | initail-scale | minimun-scale | maximum-scale |
| :--------: | :--------: | :--------: | :--------: | :--------: | :--------: |
| 页面布局视口的宽 | 页面布局视口的高 | 是否允许用户缩放 | 页面的缩放级别 | 允许用户缩小到什么程度 | 允许用户放大到什么程度 |
| device-width或者确定的值400px | device-height或者确定的值400px | yes or no | 0.0-10.0 | 0.0-10. | 0.0-10.0 |
- 媒体查询一般形式
![媒体查询一般形式](https://github.com/fangfeiyue/responsive-website/blob/master/imgs/media.png)

