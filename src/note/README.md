# Note

### [懒加载Fragment 让应用更优化](http://immortalz.me/262.html)
> 懒加载，可以处理相机权限初始化等相关的问题，还可以优化网络请求，优化内存

### Android 秘钥生成

```bash
$ keytool -genkey -alias ifdebugkey -keyalg RSA -validity 20000 -keystore ifdebug.keystore
```
> ifdebugkey : alias name   
> ifdebug.keystore : key file name

### 查看秘钥内容

- 查看秘钥文件详细信息

```bash
$ keytool -list -v -keystore ./ifdebug.keystore -storepass xxx
```

- 获取秘钥的MD5信息（小写并且去掉":"）

```bash
$ keytool -list -v -keystore ./ifdebug.keystore -storepass xxx | grep "MD5" | tr '[:upper:]' '[:lower:]' |tr -d :
```

### logcat 使用

```bash
# 添加tag [tag1:priority] [-v :显示格式(格式：time,long,tag,process)]
$ adb logcat -s "tag1:D" "tag2:D" -v time
# tee 指令既能屏幕输出又能写入到文件中
$ adb logcat -s "tag1:D" "tag2:D" -v time |tee ~/Desktop/log.txt
# 使用grep 多tag过滤
$ adb logcat -v time |grep -E 'tag1|tag2'
```
