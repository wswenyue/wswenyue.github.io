# 安全与逆向

### Binutils 工具介绍
binutils是一套安全与逆向使用的工具包

|工具|介绍|
| ---- | ---- |
| as | 汇编器    |
|ld | 连接器|
|gprof | 性能分析工具程序|
|addr2line | 从目标文件的虚拟地址获取文件的行号或符号|
|ar | 可以对静态库做创建、修改和取出的操作。|
|c++filt | 解码 C++ 的符号|
|dlltool | 创建Windows 动态库|
|gold | 另一种连接器|
|nlmconv | 可以转换成NetWare Loadable Module目标文件格式|
|nm | 显示目标文件内的符号|
|objcopy | 复制目标文件，过程中可以修改|
|objdump | 显示目标文件的相关信息，亦可反汇编|
|ranlib | 产生静态库的索引|
|greadelf | 显示ELF文件的内容|
|size | 列出总体和section的大小|
|strings | 列出任何二进制档内的可显示字符串|
|strip | 从目标文件中移除符号|
|windmc | 产生Windows消息资源|
|windres | Windows 资源档编译器|

```sh
# install binutils
$ brew install binutils
```

使用:
```sh
# 查看依赖。NEEDED标志的就是依赖项
$ readelf -d xxx.so 
```
