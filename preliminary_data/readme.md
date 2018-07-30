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

#### 媒介查询各个参数
- type

| 类型 | 目标设备 |
|:-------:|:-------:|
| all | 所有设备(默认) |
| braille | 盲文触觉反馈设备 |
| embossed | 分页盲文打印机 |
| handheld | 手持设备(通常为小屏幕并且可能为黑白屏幕) |
| print | 打印或打印预览 |
| projection | 投影仪 |
| screen | 彩色计算机屏幕 |
| speech | 语音合成器 |
| tty | 使用固定字符间距的设备(终端或打印设备) |
| tv | 电视 |

-  媒介表达式中常用媒介特性

| width | height | orientation | resolution |
|:-------:|:-------:|:-------:|:-------:|
| 描述设备显示区域的宽度 | 描述设备显示区域的高度 | 设备方向(portrait or landscape) | 设备分辨率 |

- 常用媒介特性前缀
    - min-
    大于等于：如min-width:400px 大于等于400匹配
    - max-
    小于且等于：如max-width:400px 小于切等于400匹配
- 逻辑关系词

| and | not | or | only |
|:-------:|:-------:|:-------:|:-------:|
| 连接多个表达短语 | 对整个表达式say not | 其实是逗号可以表达or的意思 | 表达仅当...含义 有特别的用途哦 |

- only逻辑关系词
    - 对于支持媒介类型查询，但不支持媒介特性的user-agent，屏蔽
    - 对于都支持的user-agent,only media-type=media-type
```
@media screen and (min-width:400px){}
@media only screen and (min-width:400px){}
```

### 分而治之

当我们用移动端访问www.taobao.com网站会重定向到m.taobao.com，因为pc端和移动端的布局有很大的不同，如果各个页面都适配移动端太过复杂，不如重写。什么情况下适合给网站重写移动端呢？
- 结构复杂多变
- 承载业务型
- 一页多适配不合算

### 视窗相对单位(viewport units)
| vw | vh | vmin | vmax |
|:------:|:------:|:------:|:------:|
|相对视窗宽度|相对视窗高度|相对的标准是视窗宽和视窗高最小的那个|相对的标准是视窗宽和视窗高最大的那个|