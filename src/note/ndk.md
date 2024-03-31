# NDK 开发相关

### javah使用---native接口头文件生成
```sh
# 编译之后，进入到对应class顶层包中,执行javah，会在当前目录下生成对应的头文件。
$ javah com.xx.thelight.TheLight
# 如需依赖Android相关环境
$ javah -classpath $ANDROID_PLATFORMS/android-22/android.jar:. com.xx.thelight.TheLight
```

### javap使用---方法签名获取
```sh
# 编译之后，进入对应的class目录，执行。
$ javap -s TheLight
# eg:
```

> ```java
>public class com.xx.thelight.TheLight {
>  	public com.xx.thelight.TheLight();
>    	descriptor: ()V
>
>  	public static native int handle(int, int);
>    	descriptor: (II)I
>
>  	public static native java.lang.String call(java.lang.String);
>    	descriptor: (Ljava/lang/String;)Ljava/lang/String;
>}
>```


### 使用addr2line定位出错位置

工具位置ndk下`/toolchains/arm-linux-androideabi-4.9/prebuilt/darwin-x86_64/bin/`中的`arm-linux-androideabi-addr2line`

使用方式：
```sh
$ addr2line -e so_path 汇编地址...

```

eg: 例如分析下面一个错误信息日志

```java
01-01 17:59:38.246: D/dalvikvm(20794): Late-enabling CheckJNI
01-01 17:59:38.246: I/ActivityManager(1185): 
Start proc com.example.hellojni for activity com.example.hellojni/.HelloJni: pid=20794 uid=10351 gids={50351, 1028, 1015}
01-01 17:59:38.296: I/dalvikvm(20794): Enabling JNI app bug workarounds for target SDK version 3...
01-01 17:59:38.366: D/dalvikvm(20794): Trying to load lib /data/app-lib/com.example.hellojni-1/libhello-jni.so 0x422a4f58
01-01 17:59:38.366: D/dalvikvm(20794): Added shared lib /data/app-lib/com.example.hellojni-1/libhello-jni.so 0x422a4f58
01-01 17:59:38.366: A/libc(20794): Fatal signal 8 (SIGFPE) at 0x0000513a (code=-6), thread 20794 (xample.hellojni)
01-01 17:59:38.476: I/DEBUG(253): pid: 20794, tid: 20794, name: xample.hellojni  >>> com.example.hellojni <<<
01-01 17:59:38.476: I/DEBUG(253): signal 8 (SIGFPE), code -6 (SI_TKILL), fault addr 0000513a
01-01 17:59:38.586: I/DEBUG(253):     r0 00000000  r1 0000513a  r2 00000008  r3 00000000
01-01 17:59:38.586: I/DEBUG(253):     r4 00000008  r5 0000000d  r6 0000513a  r7 0000010c
01-01 17:59:38.586: I/DEBUG(253):     r8 75226d08  r9 00000000  sl 417c5c38  fp bedbf134
01-01 17:59:38.586: I/DEBUG(253):     ip 41705910  sp bedbf0f0  lr 4012e169  pc 4013d10c  cpsr 000f0010
											// 省略部份日志 。。。。。。
01-01 17:59:38.596: I/DEBUG(253): backtrace:
01-01 17:59:38.596: I/DEBUG(253):     #00  pc 0002210c  /system/lib/libc.so (tgkill+12)
01-01 17:59:38.596: I/DEBUG(253):     #01  pc 00013165  /system/lib/libc.so (pthread_kill+48)
01-01 17:59:38.596: I/DEBUG(253):     #02  pc 00013379  /system/lib/libc.so (raise+10)
01-01 17:59:38.596: I/DEBUG(253):     #03  pc 00000e80  /data/app-lib/com.example.hellojni-1/libhello-jni.so (__aeabi_idiv0+8)
01-01 17:59:38.596: I/DEBUG(253):     #04  pc 00000cf4  /data/app-lib/com.example.hellojni-1/libhello-jni.so (willCrash+32)
01-01 17:59:38.596: I/DEBUG(253):     #05  pc 00000d1c  /data/app-lib/com.example.hellojni-1/libhello-jni.so (JNI_OnLoad+20)
01-01 17:59:38.596: I/DEBUG(253):     #06  pc 00052eb1  /system/lib/libdvm.so (dvmLoadNativeCode(char const*, Object*, char**)+468)
01-01 17:59:38.596: I/DEBUG(253):     #07  pc 0006a62d  /system/lib/libdvm.so
01-01 17:59:38.596: I/DEBUG(253):     	   // 省略部份日志 。。。。。。
01-01 17:59:38.596: I/DEBUG(253): stack:
01-01 17:59:38.596: I/DEBUG(253):          bedbf0b0  71b17034  /system/lib/libsechook.so
01-01 17:59:38.596: I/DEBUG(253):          bedbf0b4  7521ce28  
01-01 17:59:38.596: I/DEBUG(253):          bedbf0b8  71b17030  /system/lib/libsechook.so
01-01 17:59:38.596: I/DEBUG(253):          bedbf0bc  4012c3cf  /system/lib/libc.so (dlfree+50)
01-01 17:59:38.596: I/DEBUG(253):          bedbf0c0  40165000  /system/lib/libc.so
01-01 17:59:38.596: I/DEBUG(253):          // 省略部份日志 。。。。。。
01-01 17:59:38.736: W/ActivityManager(1185):   Force finishing activity com.example.hellojni/.HelloJni
```

backtrace日志可以看作是JNI调用的堆栈信息，以“#两位数字 pc”开头的都是backtrace日志。注意看第20行和21行，是我们自己编译的so文件和定义的两个函数，在这里引发了异常，导致程序崩溃。

```java
01-01 17:59:38.596: I/DEBUG(253):     #04  pc 00000cf4  /data/app-lib/com.example.hellojni-1/libhello-jni.so (willCrash+32)
01-01 17:59:38.596: I/DEBUG(253):     #05  pc 00000d1c  /data/app-lib/com.example.hellojni-1/libhello-jni.so (JNI_OnLoad+20)
```

使用：
```sh
$ arm-linux-androideabi-addr2line -e libhello-jni.so 00000cf4 00000d1c
```

### 使用objdump 显示汇编指令内容。也可通过汇编地址定位相关函数

工具位置ndk下`/toolchains/arm-linux-androideabi-4.9/prebuilt/darwin-x86_64/bin/`中的`arm-linux-androideabi-objdump`

使用方法：
```sh
#打印so的汇编内容
#搜索相关汇编指令位置即可搜索到对应的函数，例如上面的cf4或d1c等
$ objdump -S -D so_path
```

### 使用ndk-stack 打印具体信息
使用方式
```sh
# 通过logcat直接输出
# so_path :是包含so的文件夹,例如$PROJECT_PATH/obj/local/armeabi 
$ adb logcat | ndk-stack -sym so_path
# 如果有log可以直接这样使用
$ ndk-stack -sym so_path -dump crash.log
```

# 参考文章

[Android ndk-stack 使用](https://developer.android.com/ndk/guides/ndk-stack)
[Android NDK开发Crash错误定位](https://www.kancloud.cn/xyang0917/blogjnindk/117018)
