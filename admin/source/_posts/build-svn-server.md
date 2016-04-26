title: SVN服务器搭建
date: 2016-04-26
tags:
  - SVN
  - 前端工具
categories: 前端构建
---

![](http://7xnnvs.com1.z0.glb.clouddn.com/6630439944559060666.jpg)

# SVN服务器搭建


## 安装

### 安装svn TortoiseSVN - 64

下载地址 https://tortoisesvn.net/downloads.html

默认安装，下一步。

<!-- more -->

### 安装svn服务器版  setup-SubVersion

下载地址  https://subversion.apache.org/

默认安装，下一步。


### 安装 svn 中文语言包 languagePack_1.9.3

下载地址 https://tortoisesvn.net/downloads.html

默认安装，下一步。

### 安装 VisualSVN-Server

下载地址 https://www.visualsvn.com/

默认安装，下一步。安装完成后自动打开VisualSVN

在`VisualSVN Server(local)`中我们可以看到层级

```

— Repositories (版本仓库)
— Users (用户)
— Groups (用户组)

```

## 开启 visualSVN Server

### 创建 Repositories

在Repositories右键`create New Repository`就可以创建一个仓库。

仓库创建完成后，我们可以在`E:\Respositories`下可以看到仓库的文件夹

### 创建 Users

在根目录下的`User`右键`Create User` 创建用户并设置密码

### 创建 Groups

在根目录下的`User`右键`Create Groups` 创建用户组

在对话框中的`Members`下`Add`添加上一步的用户，点击 Ok

## repo 设置权限

为 repo设置权限，在 Repositories的某个仓库上右键`Properties`，在对话框中设置`Security`安全，点击`Add`添加用户组或者用户

在下面的`Permissions` 选择当前用户或用户组的读写权限

* Inherit from parent 继承父级
* No Access 没有权限
* Read Only 只读
* Read / Write 读写

## 在服务器上创建一个同步目录

例如我们在`E:\front-end\project`下创建目录`pd-prototype`

```
$ cd E:\front-end\project
$ mkdir pd-prototype && cd pd-prototype
```

然后我们可以创建一个 IIS 服务或者 node 服务，将根目录指向我们刚创建的`pd-prototype`文件夹,好了我们需要同步服务器上的文件就要使用 svn 的 hooks。

## repo 创建hooks

任何组员更新文件我们需要同步到服务器上，这时候我们要借用 svn 的 hooks 工具，非常方便的设置自动更新功能

1. 在当前仓库的文件目录下的`hooks`目录，我们可以看到很多`*.tmpl`模板，这些暂时不理，里面的 demo 都是 linux 环境，我们需要新建一个`post-commit.bat`文件，对应的是 svn 有 commit 后触发的动作。

```
# post-commt.bat
@echo off
“c:\Program Files\VisualSVN Server\bin\svn.exe” update "E:\front-end\project\pd-prototype" —username “frontui” —password "456123"
```

当我们在客户端提交后，`E:\front-end\project\pd-prototype` 目录则自动更新到服务器本地文件夹。

2. 我们在上一步设置权限的时候，在选项卡中`Hooks`提供了快捷的创建 hooks

我们通过选择`Post-commit hook`，点击`Edit` 在弹出框中贴入

```
@echo off
“c:\Program Files\VisualSVN Server\bin\svn.exe” update "E:\front-end\project\pd-prototype" —username “frontui” —password "456123"
```

点击 Ok 保存即可

利用内部 SVN 我们可以更新同步前端代码，并同步到 TFS 上
