# blog

## blog系统介绍

`blog` 采用的是静态博客系统 `hexo` [hexo](https://hexo.io)

全局安装 `hexo`

```
  npm install -g hexo
```

先 `git clone` 到本地

```
  git clone https://github.com/frontui/blog.git
```

`clone` 下来的 `master` 分支只有极少的文件，我们需要切换到`gh-pages`分支上

> gh-pages是github给用户生成静态网页的途径

在命令提示符中

```
  git checkout gh-pages
```

我们可以看到许多文件，包括已生成的博文文件夹

进入`admin` 文件夹，执行 `npm install`， 你懂得

```

cd admin
npm install

```

**实时预览**

在`admin`目录上执行

```
hexo server
```

在浏览器打开

```
http://localhost:4000
```

**blog配置文件**

`admin/_config.yml`

```
...
# Site
title: Frontpay FED | 钱沿支付前端团队
subtitle: 钱沿支付前端团队博客
description: 钱沿支付前端团队技术博客，技术提升体验，体验促进技术
author: Frontpay FED
author_title: 'Web Developer & Designer'
avatar: css/images/avatar.png
location: 'GuangZhou, China'
follow: https://github.com/frontui/
...

```

**主题配置**

`admin/themes/icarus/_config.yml`

语言包

`admin/themes/icarus/language/zh-CN.yml`

样式

`admin/themes/icarus/source/css`

图片

`admin/themes/icarus/source/css/images`

页面排版布局

`admin/themes/icarus/layout`

## 写blog

`blog`文章放在`admin/source`下

* `_posts` 文章文件
* `about`  关于我们单页
* `categories` 分类页
* `tags` 标签页

例如在`admin/source/_posts` 新建一篇文章 `JavaScript代码注释.md`。内容如下:

```
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


  npm install -g docco


<!-- more -->

** 生成文档 **

...
```

**文章配置参数:**

```
title: JavaScript代码注释
date: 2015-12-23
author: tommyshao
tags:
  - 杂谈
categories: 杂谈
---
```

* `title` 文章标题
* `date`  发布日期
* `tags`  标签
* `categories` 分类

**查看更多**

在内容需要隐藏的地方上方插入`<!-- more -->`即可，在blog首页文章列表只能看到文章简介内容

```
<!-- more -->

** 生成文档 **

...
```

## 发布文章

在`admin`目录下执行

```
hexo deploy
```

生成的静态文件在`admin/public`目录，我们需要使用`gulp`将它剪切到根目录

再执行

```
gulp
```

## 同步到线上

我们从`admin` 返回到根目录

```
cd ..
```

执行`git`操作

```
git pull origin gh-pages
git add *
git commit -m "update"
git push origin gh-pages
```

打开浏览器

```
http://frontui.github.io/blog
```
