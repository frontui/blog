title: JavaScript代码注释
date: 2015-12-23
author: tommyshao
tags:
  - 杂谈
categories: 杂谈
---

## 1. `docco`

`docco` 是 `Backbone` 作者开源的一个 `js` 文档生成器。

** 安装 **

```
  npm install -g docco
```

<!-- more -->

** 生成文档 **

```
  docco demo.js
```

或者自定义生成路径

```
  docco demo.js -o ../docs
```

在同级目录下生成了 `docs` 文件夹，访问文件里面的 `index.html` 进行浏览。

### 文档规范

`docco` 的文档规范是使用 `markdown风格` ,在我们 `JS` 文件中使用 `// ` 加 `空格`来使用。

具体可参考 `Backbone` [源码](https://github.com/jashkenas/backbone/blob/master/backbone.js)

** 文档规范 **

1. 头部版权说明

`//` 加5个 `空格`

```
//     Backbone.js 1.2.3

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
```
2. 高亮强调

```
// Establish the root object, `window` (`self`) in the browser, or `global` on the server.
// We use `self` instead of `window` for `WebWorker` support.
```

3. 标题

```
// Initial Setup
// -------------
```

大致与 `markdown` 语法相同。

**相关插件工具**

* [gulp-docco](https://github.com/jsBoot/gulp-docco)
* [grunt-docco](https://github.com/DavidSouther/grunt-docco)


## 2. `jsDoc`

`jsDoc` 是一种标准的 `js` 注释规范，大部分IDE都支持或者其插件。

1. 规范

  以`/** `开头以及 ` **/`结尾

  ```
    /** 这是会生成文档行内注释 **/
  ```

  或者多行注释

  ```
  /**
  * 对话框
  * @param {string} el 对话框dom对象
  * @author tommyshao
  * @description 这里是描述
  * @example 示例内容
  *  var dialog = new Dialog();
  * @constructor
  * @return
  **/
  var Dialog = function() {
    //...
  }

  Dialog.prototype = {
    show: function() {
      /**
      * @type {Boolean}
      **/
      var isShown = false;
    }
  }

  ```

  官方文档：[http://usejsdoc.org/](http://usejsdoc.org/)

  [gulp实现jsdoc实时预览](http://segmentfault.com/a/1190000002583569)



## 其他文档工具

* [YUIdoc](http://yui.github.io/yuidoc/args/index.html)
* [Javascript自动化文档工具：YUI Doc, JSDoc 3, JSDuck等比较](https://segmentfault.com/a/1190000002579067)
* [http://apidocjs.com/](http://apidocjs.com/)
