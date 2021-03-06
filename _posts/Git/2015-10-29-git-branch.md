---
layout: post
title: Git 分支操作
category: Git
tags: 
keywords: git,branch
description: git常见的分支操作大全
---


#分支

##基本指令
> 查看分支：

```bash
# 查看本地分支：
$ git branch
# 查看远程分支
$ git branch -r
```

>创建分支：

```bash
# 创建本地分支（建立分支后，仍停留在当前分支）
$ git branch branchName
# 切换分支
$ git checkout branchName
# 创建分支后直接切换到新分支
$ git checkout -b branchName

```

> 提交分支：

```bash
# 提交到远程分支
$ git commit -a -m 'my new branch'
git push origin branchName:branchName
# 如果想把本地的某个分支mybranch提交到远程仓库，并作为远程仓库的master分支
$ git push origin mybranch:master
```
> 删除分支：

```bash
# 删除本地分支
$ git branch -d branch_name
# 强制删除本地分支
$ git branch -D branch_name 
# 删除远程分支（先在本地删除该分支），原理是把一个空分支push到server上，相当于删除该分支。
$ git push origin :branch-name 

# 在Git v1.7.0 之后，可以使用这种语法删除远程分支：
$ git push origin --delete <branchName>

# 删除tag这么用：
git push origin --delete tag <tagname>
```

> 合并分支

```bash
#将分支branchName和当前所在分支合并
$ git merge branchName
#查看已经被合并到当前分支的分支
$ git branch --merged
#查看未被合并到当前分支的分支
$ git branch --no-merged 

# 示例
# 如果要将开发中的分支（develop），合并到稳定分支（master），
# 首先切换的master分支：
$ git checkout master
# 然后执行合并操作：
$ git merge develop
# 如果有冲突，会提示你，调用git status查看冲突文件。
# 解决冲突，然后调用git add或git rm将解决后的文件暂存
# 所有冲突解决后，git commit 提交更改。
```

>拉取分支

```bash
# =git fetch + git merge
$ git pull 
# 拉取
$ git fetch 
# 合并
$ git merge 
```

> 分支衍合

分支衍合和分支合并的差别在于，分支衍合不会保留合并的日志，不留痕迹，而 分支合并则会保留合并的日志。
要将开发中的分支`（develop）`，衍合到稳定分支`（master）`。
首先切换的`master`分支：`git checkout master`。
然后执行衍和操作：`git rebase develop`。
如果有冲突，会提示你，调用`git status`查看冲突文件。
解决冲突，然后调用`git add`或`git rm`将解决后的文件暂存。
所有冲突解决后，`git rebase --continue` 提交更改。

-------------------

##项目管理之Git之分支创建策略

###分支策略：git上始终保持两个分支，master分支与develop分支。master分支主要用于发布时使用，而develop分支主要用于开发使用。

```bash
# 创建master的分支develop
git checkout -b develop master

# 切换到master分支
git checkout master

# 合并develop分支到master
git merge --no-ff develop
```

### 除了以上两个常驻分支外，我们还可以适当分支出三种分支：功能分支、预发布分支、修补分支，这三种分支使用完后也该删除，保持两个常驻分支。

>#### 功能分支：该分支从develop中分支出来，开发完成后再合并入develop，名字采用feature-* 的形式命名。

```bash
# 创建功能分支：
git checkout -b feature-x develop
# 开发完成后，合并到develop分支：
git checkout develop
git merge --no-ff feature-x
# 最后删除分支:
git branch -d feature-x
```

>#### 预发布分支：正是版本发布前，既合并到master分支前，因此预发布分支是从develop分支出来的，预发布后，必修合并进develop和master。命名采用release-*的形式。

```bash
# 创建一个预发布分支：
git checkout -b release-* develop
# 确认版本没有问题后，合并到master分支：
git checkout master
git merge --no-ff release-*
# 对合并生成的新节点，做一个标签：
git tag -a 1.2
# 再合并到develop分支:
git checkout decelop
git merge --no-ff release-* 
# 最后删除分支:
git branch -d release-*
```


>#### 修补分支：主要用于修改bug的分支，从master分支分出来，修补后，在合并进master和develop分支。命名采用fixbug-*形式。

```bash

# 创建一个修补分支：
git checkout -b fixbug-* master
# 修补结束后,合并到master分支:
git checkout master
git merge --no-ff fixbug-*
git tag -a 0.1.1
# 再合并到develop分支:
git checkout develop
git merge --no-f fixbug-*
# 最后删除分支:
git branch -d fixbug-*

```
-------------------


##常见问题

### 从远程clone一个项目，虽然远程上该项目是有分支的，但clone下来后发现只有master分支，解决：
 
```bash
# 本地创建一个分支，指向对应的远程分支
$ git checkout -b not_master_branch  origin/not_master_branch 
# 将远程的not_master_branch分支pull下来
$ git pull origin not_master_branch 
#将修改后的not_master_branch分支push到远程的not_master_branch
$ git push origin not_master_branch 
```

###创建孤立的空分支

有时候我们需要在Git下创建一个孤立的空分支.

怎样安全的进行这项操作

我们需要建一个“孤立”的空分支

这里以github的操作为例，下面试图创建一个名为`gh-pages`的空分支

```bash
$ git checkout --orphan gh-pages
# 创建一个orphan的分支，这个分支是独立的
# Switched to a new branch 'gh-pages'

$ git rm -rf .
# 删除原来代码树下的所有文件
$ rm '.gitignore'
# 注意这个时候你用git branch命令是看不见当前分支的名字的，除非你进行了第一次commit。

# 下面我们开始添加一些代码文件，例如这里新增了一个index.html

$ echo \"My GitHub Page\" > index.html
$ git add .
$ git commit -a -m \"First pages commit\"
$ git push origin gh-pages
# 在commit操作之后，你就可以用git branch命令看到新分支的名字了，然后push到远程仓库。
```

