title: package.json配置
date: 2016-04-05 09:30
tags:
  - github
  - npm
categories: 前端工具
author: tommyshao
---

# package.json

## 简介

本文档的所有`package.json`中必要的配置。它必须是真正的 json 格式，而不是 js 对象。

本文档中描述的很多行为都受[npm-config(7)](https://npmjs.org/doc/misc/npm-config.html)的影响

## name

在`package.json`中最重要的就是`name`和`version`字段是必不可少的，如果没有就无法通过`npm install`进行安装。`name` 和 `version` 一起组成的标识都是唯一的，更新包时应该同时更新`version`字段。

`name` 是包的名称。

<!-- more -->

** 注意： **

* 不要把 node 或者 js 放在名称中，因为你写了 package.json 它就已经认为 js 文件，不过你可以用“engine” 字段来声明使用何种引擎。
* 名称会作为 url 的一部分、命令行的参数或者文件夹的名字。任何 non-url-safe 的字段都是不允许使用的。
* 名称可能作为参数被传入 require()，所以它应该尽可能简短并且语义清晰。
* 在使用名称前，尽量去 [npm registry](http://registry.npmjs.org/) 查看此名称是否已被使用，影响到我们包的发布。

## version

在 package.json 中最重的是 name 和 version 字段，因为他们都是必填项，如果缺少之一都是无法 install。

version 必须能被 npm-semver解析，他被包在 npm 的依赖中。

## description

此字段输入一段描述，来阐明包的简介，提交的描述方便使用 npm search 来搜索。

## keywords

包的关键字描述，方便使用 npm search 搜索

## homepage

项目官网的 url

** 注意： **

这里的 url 和 “url” 字段的不一样，如果你放一个“url”字段，registry 会以为是一个跳转到你发布在其他地方的地址，然后退出。

## bugs

你的项目反馈文件的 url 或者邮件地址，这对遇到问题的使用者很有帮助。

大概格式

```
...
  "bugs" : {
  	"url": "http://github.com/frontui/frontui/issues",
  	"email": "frontui@frontpay.cn"
  }
...
```

你可以指定一个值，只需要输入字符串就行不用 js 对象。

如果你提供了 url，它会被 npm bugs 命令使用。

## license

每个包我们应当指定一个许可证，声明此包的使用权利和限制。

最简单的方法是，假如你用一个像 BSD 或者 MIT 这样通用的许可证，就只需指定许可证的名称，像这样

```
{"license": "BSD"}
```

如果你有更复杂的许可条件，或者想要提供给更多地细节

```
"license" : {
	"type": "MyLicense",
	"url": "http://github.com/frontui/frontui/license.md"
}
```
在根目录提供一个许可证也是好的选择

## author 和 contributors

author 是一个人，contributors 是一组人，person 也有 name 字段，可选的有 url，email 字段对象

```
{
	"name": "tommyshao",
	"email": "tomieric@gmail.com",
	"url": "http://getf2e.com"
}
```

或者可以把所有的东西放在一个字符串里面，npm 会给你解析

```
"tommyshao <tomieric@gmail.com> (http://getf2e.com)"
```

email和 url 在两种形式中都是可选的。

也可以在你的 npm 用户信息中设置一个顶级的 maintainers 字段。

## files

files 是一个包含项目中的文件的数组，如果命名了一个文件夹，那也会包含文件夹的文件。（除非被其他条件忽略了）

你也可以提供一个.npmignore文件，让即使被包含在 files 字段中的文件被留下，类似于.gitignore一样。

## main

main字段配置一个文件名指向模块的入口程序，如果你的包名字叫做 foo，然后用户可以通过 `require('foo')`来引用，main 配置的模块的 exports 对象会被返回。

这应该是一个相对于根目录的文件路径。

对于大多数模块，它是必不可少的。

## bin

很多包都有一个或多个可执行的文件希望被放到 PATH 中。可直接使用 npm 命令执行。

要用这个功能，首先给 package.json中的 bin 字段一个命令行到文件位置的 map 映射。初始化的时候 npm 会将它链接到 `prefix/bin`（全局初始化） 或者 `./node_modules/.bin/` （本地初始化）

比如，npm 有

```
{ "bin" : { "npm": "./cli.js" } }

所有，当你初始化 npm，它会创建一个符号链接到 cli.js 脚本到 `/usr/local/bin/npm`中。

如果你有一个可执行文件，并且名字和包名一样。那么你可以只用一个字符串，比如：


```
{
	"name": "my-program",
	"version": "1.2.5",
	"bin": "./path/to/program"
}
```

结果和这个一样

```
{
	"name": "my-program",
	"version": "1.2.5",
	"bin": {
		"my-program": "./path/to/program"
	}
}
```
## man

指定一个单一的文件或者一个文件数据提供 man 程序使用。

如果只提供一个单一的文件，那么它初始化后就是 `man <pkgname>` 的结果，而不管实际的文件名是什么，比如

```
{
	"name": "foo",
	"version": "1.2.3",
	"description": "a packaged foo footer for ashome",
	"main" : "foo.js",
	"man": "./man/doc.1"
}
```

这样 ``