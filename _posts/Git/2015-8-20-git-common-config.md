---
layout: post
title: Git 常用配置
category: Git
tags: 
keywords: git,config
description: 
---

# 常用配置 

    --system #系统级别
    --global #用户全局
    --local #单独一个项目

```bash
$ git config --global user.name "xxxx" #用户名
$ git config --global user.email "xxxx@xxx.com" #邮箱
$ git config --global core.editor vim #编辑器

$ git config --global alias.st status #按这种方法，配置别名
$ git config -l #列举所有配置
```