# Linux 篇

### 查看系统版本等信息
```sh
$ uname -a
> Linux kali 4.15.0-kali2-amd64 #1 SMP Debian 4.15.11-1kali1 (2018-03-21) x86_64 GNU/Linux
```

### 关机
```sh
# 立即关机
$ shutdown now
```

### 重启
```sh
$ reboot
```

### 设置开机仅启动命令行窗口，不启动GUI界面
```sh
# 设置开启多用户，这样GUI界面就不会打开了
$ systemctl set-default multi-user.target
# 回复到GUI界面可以使用如下指令
$ systemctl set-default graphical.target
```
### SSH-Keygen
```sh
# 生成秘钥 -t:指定秘钥算法 -f:指定生成的秘钥文件名称（路径） -C:公钥添加备注信息,一般会添加邮箱地址
# 算法: ed25519/rsa
# 推荐选择ed25519，安全性更高。在如今大计算的使用下rsa安全性已经不够了
$ ssh-keygen -t ed25519 -f test -C "test"
eg
$ ssh-keygen -t rsa -C "xxx@gmail.com"
```

### SSH 登录访问测试
```
$ ssh -T git@gitlab.example.com
# 如没有反馈文案可使用
$ ssh -Tvvv git@gitlab.example.com
```

### SSH Login
```sh
# -p: 指定2200端口而非22端口
# 宿主机连接虚拟机就要使用127.0.0.1的ip,还要给虚拟机设置端口转发，例如：2200转22 
# -i: 指定要用的私钥文件，我们这里使用的是秘钥登录
# -v: 详细输出，一般用于找出ssh连接出错的原因
$ ssh -p 2200 root@127.0.0.1 -i .ssh/id_rsa
```

### SCP 使用ssh通道拷贝文件
```sh
# -P： 指定特别的端口是2200 而非默认端口22
$ scp -P 2200  .ssh/id_rsa.pub root@127.0.0.1:/root/.ssh/host.pub
# 拷贝远程windows桌面文件到当前目录
$ scp administrator@169.254.15.40:/Users/Administrator/Desktop/Res.rar ./
```


### 字符串tr处理使用

|  规则   |                    示例                    |
| :---: | :--------------------------------------: |
| 大写转小写 | `tr '[:upper:]' '[:lower:]'` OR `tr '[A-Z]' '[a-z]'` |
| 删除字符  |           `tr -d x`  x:要删除的字符            |
| 字符替换  |             `tr A B`  把A替换成B             |

### xargs 使用
> xargs能够处理管道或者stdin并将其转换成特定命令的命令参数

```bash
#复制所有图片文件到 /data/images 目录下
$ ls *.jpg | xargs -n1 -I cp {} /data/images
# 删除当前目录下所有的log文件
# xargs 默认是以空白字符，如果文件名中包含空白符号会出错，find打印文件后面加入'\0',xargs 以 '\0'分割就可以解决这个问题
$ find . -type f -name "*.log" -print0 | xargs -0 rm -f
# 统计一个源代码目录中所有php文件的行数
$ find . -type f -name "*.php" -print0 | xargs -0 wc -l
# 查找所有的jpg 文件，并且压缩它们
$ find . -type f -name "*.jpg" -print | xargs tar -czvf images.tar.gz
# -dX :以'X'分割; -n2 :一行（一批）输出两个
$ echo "nameXnameXnameXname" | xargs -dX -n2
-> name name
-> name name
```

### 去重 `uniq` `sort -u`
> `uniq`  只能识别临近的相同行
> `sort -u` 是全文本去重

### `cut` 字符串切割
```bash
# 以‘X’切割并取第二组字符串
$ echo "abXbcXdeX" |cut -d "X" -f 2
--> bc
```
### `tee` 指令会从标准输入设备读取数据，将其内容输出到标准输出设备，同时保存成文件
```bash
$ echo "hello" |tee backup.txt
```

### js 文件压缩、混淆
```sh
$ npm install uglify-js -g 
# 全局安装uglify-js
$ uglifyjs input.js -c -m -o out-min.js
# input.js :要压缩的js文件
# out-min.js :压缩后的文件路径
# -c :压缩 ; -m :单字母混淆; -o :输出

$ uglifyjs out-min.js -b -o abc.js
# -b :格式化js
```

### 在流输出情况下，grep,tee等指令的串联使用
```sh
# --line-buffered:流输出的情况下，必须指定buffer大小为行大小
# -E :是正则支持
# 后面追加 |grep -E "Networks|Disks"是想要输出在终端的内容，有高亮显示
$ top |grep --line-buffered -E "Networks|Disks" |tee Desktop/log.txt |grep --line-buffered -E "Networks|Disks"
```

### grep
```sh
# 遍历搜索当前文件夹下面所有文件中包含text的行 -r：遍历所有子文件夹
$ grep -r text ./
```
### 日志过滤
```sh
# 过滤日志并输入到指定文件
$ cat xxx.log | grep -E "tag1|tag2|tag3" > aaa.log
# 反向排除
$ grep -vE "tag1|tag2|tag3"
# 显示匹配结果的前后3行【B：前三行；A：后三行】
$ grep -E "tag1" -C 3

# tee 同时输出到文件
$ aklog -p "your_package_name" -f "tag" | tee ~/Desktop/tag.log 
```

### diff 指令使用
```sh
# 以并列的方式显示文件的异同之处
$ diff -y dir1 dir2
# 以并列的方式显示两个内容的异同之处；右边部分只显示不一样的
$ diff -y --left-column  <(ls dir1) <(ls dir2)
# 以并列的方式显示两个内容的异同之处；只显示不一样的部分
$ diff -y --suppress-common-lines <(ls dir1) <(ls dir2)
# 对比两个文件内容
$ icdiff projects/{app1,app2}/settings.gradle
```
### 格式转换
```sh
# 将pdf转成png格式
$ sips -s format png a.pdf --out img.png
```
### 图片文件信息查看
```sh
$ identify -verbose img.jpg
```
### nmap扫描
```sh
# 扫描192.168.199.1/24网段 22端口（ssh）开放的情况
$ nmap -PS -p22 --open 192.168.199.1/24
```