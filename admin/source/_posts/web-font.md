title: 自定义字体使用
date: 2015-12-21
tags:
  - webfont
  - 字体图标
categories: css
---

![](http://7xnnvs.com1.z0.glb.clouddn.com/6630439944559060666.jpg)

# 自定义字体使用

1. 下载用到的字体，非`eot`,`woff`,`ttf`,`svg`格式需要下载相应工具转换。

2. 在css中使用自定字体

<!-- more -->

```
        /*声明 WebFont*/
        @font-face {
          font-family: 'pinghei';
          src: url('../font/pinghei.eot');
          src:
          url('../font/pinghei.eot?#font-spider') format('embedded-opentype'),
          url('../font/pinghei.woff') format('woff'),
          url('../font/pinghei.ttf') format('truetype'),
          url('../font/pinghei.svg') format('svg');
          font-weight: normal;
          font-style: normal;
        }

        /*使用选择器指定字体*/
        .home h1, .demo > .test {
        font-family: 'pinghei';
        }
```        

3. 安装字蛛

```
   npm install font-spider -g
```

4. 编译执行

```
        font-spider index.html

```

> 注意：gulp-font-spider 暂时还有bug不能使用

请参考demo目录，执行第3,4步


### 相关资料

* [http://font-spider.org/](http://font-spider.org/)
* [http://ecomfe.github.io/fontmin/](http://ecomfe.github.io/fontmin/)
