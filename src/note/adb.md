# adb 相关

### 发送广播

```sh
adb shell am broadcast args
args:
[-a <ACTION>]
[-d <DATA_URI>]
[-t <MIME_TYPE>] 
[-c <CATEGORY> [-c <CATEGORY>] ...] 
[-e|--es <EXTRA_KEY> <EXTRA_STRING_VALUE> ...] 
[--ez <EXTRA_KEY> <EXTRA_BOOLEAN_VALUE> ...] 
[-e|--ei <EXTRA_KEY> <EXTRA_INT_VALUE> ...] 
[-n <COMPONENT>]
[-f <FLAGS>] [<URI>]

eg:
adb shell am broadcast -a actionStr --es test_key "this is test string" --ei test_int 100 --ez test_boolean true
```

### 进入调试模式

```sh
$ adb shell am start -D -n "package/package.LaunchActivity"
```

### 远程连接adb

```sh
# 设置手机监听5555端口
$ adb tcpip 5555
# 查看手机ip地址
$ adb shell ifconfig
# 连接手机ip:port
$ adb connect phoneIp:5555
```