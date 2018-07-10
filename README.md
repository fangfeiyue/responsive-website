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
| --- | --- | --- | --- | --- | --- |
| --- | --- | --- | --- | --- | --- |