# Python 相关

### `pip3`的安装
pip 是Python的包管理工具。安装Python后，理论上应该安装好了pip
如果没有安装则需要brew 重新卸载在安装
pip3是Python3对应的版本
```sh
# pip3 可以写成这样
$ alias pip3='python3 -mpip'
```

### `virtualenv`   python 版本模块环境管理
用命令source venv/bin/activate进入一个virtualenv环境时，virtualenv会修改相关环境变量，让命令python和pip均指向当前的virtualenv环境。

```sh
# 安装virtualenv
$ pip3 install virtualenv
# 在当前文件下面创建Python2.7的运行环境venv2.7
$ virtualenv --python=/usr/bin/python2.7 venv2.7
# 以virtualenv默认的Python环境创建运行环境venv 
# --no-site-packages :不复制已经安装到系统Python环境中的所有第三方包
$ virtualenv --no-site-packages venv
# 使venv 环境激活
# 在激活的环境下使用pip 安装的包都会放到激活的环境下
$ source venv/bin/activate
# 退出 激活的环境
$ deactivate
```
### python 安装模块
Python的包管理器是pip所以安装包就通过pip安装

```sh
# eg 安装包abc
$ pip install abc
# 指定版本号，安装特定版本的包
$ pip install abc==1.2.0
```