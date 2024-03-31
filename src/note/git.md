---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2022-01-12
category:
    - 蔬菜
tag:
  - 红
  - 圆
star: true
sticky: true
---

# git 相关

### 查询master分支 push、fetch时间
```sh
$  git reflog origin/master --date=iso 
```

### git rev-parse 使用
```sh
# 获取HEAD指向的commit的SHA值（短）
$ git rev-parse --short HEAD
# 获取HEAD指向的分支名称,当前分支。
$ git rev-parse --abbrev-ref HEAD
```

### tag 相关
```sh
# 显示当前离当前提交最近的tag。注意这个tag有可能不是远端最新的tag
# 如果tag指向最新提交则只显示tag，如果不是则会显示在这个tag上有多少次提交，最新的commit id;
# eg:tag1-2-g026498b 2:表示自打tag tag1 以来有2次提交(commit)g026498b：g 为git的缩写，在多种管理工具并存的环境中很有用处
$ git describe --tags

# 输出远端tag list信息
$ git ls-remote --tags -q
# 输出远端tag list信息,仅仅输出tag name
$ git ls-remote --tags -q |cut -d "/" -f 3
# 获取远端的tag name列表，去掉了tag所有字母，并按照首位倒叙排序。remote_tags是个array
$ remote_tags=($(git ls-remote --tags -q |cut -d "/" -f 3 |tr -d "[:alpha:]"|sort -r))

# 判断远端仓库是否包含某个tag
$ git branch --contains tags/${tag};
# eg：
git branch --contains tags/${tag} > /dev/null 2>&1;
if [ $? -ne 0 ]; then
		echo "the ${tag} in remote is not exist !!! Please check your input."
		exit 200
fi

```

### BFG 使用 - git历史修改者

[bfg-repo-cleaner](https://github.com/rtyley/bfg-repo-cleaner)

删除git历史中误提交的某个文件夹
```sh
# 1.删除git历史中误提交的某个文件夹 eg：.gradle/*
# --no-blob-protection :表示不需要保护。bfg默认会保护HEAD版本，设置该字段后就不会在保护，如果不需要修改头指针那是比较好的。
# .git 是当前项目的git
$ java -jar ~/Downloads/bfg-1.13.0.jar --delete-folders .gradle .git --no-blob-protection

# 2. 整理relog 和通知gc处理
$ git reflog expire --expire=now --all && git gc --prune=now --aggressive

# 3. 推送到远程仓库，如果涉及修改了HEAD那么就需要强制覆盖push
$ git push
# 4. 本地如果有问题，那么直接删除本地项目文件，重新拉取即可。
```