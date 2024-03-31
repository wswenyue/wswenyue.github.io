# 性能分析
### 查看进程

命令：

```sh
adb shell ps
```

输出示例：

```sh
USER     PID   PPID  VSIZE  RSS     WCHAN    PC        NAME
root      1     0     8904   788   ffffffff 00000000 S /init
root      2     0     0      0     ffffffff 00000000 S kthreadd
...
u0_a71    7779  5926  1538748 48896 ffffffff 00000000 S com.sohu.inputmethod.sogou:classic
u0_a58    7963  5926  1561916 59568 ffffffff 00000000 S org.mazhuang.boottimemeasure
...
shell     8750  217   10640  740   00000000 b6f28340 R ps
```

各列含义：

| 列名   | 含义     |
| ---- | ------ |
| USER | 所属用户   |
| PID  | 进程 ID  |
| PPID | 父进程 ID |
| NAME | 进程名    |

### 查看实时资源占用情况

命令：

```sh
adb shell top
```

输出示例：

```sh
User 0%, System 6%, IOW 0%, IRQ 0%
User 3 + Nice 0 + Sys 21 + Idle 280 + IOW 0 + IRQ 0 + SIRQ 3 = 307

  PID PR CPU% S  #THR     VSS     RSS PCY UID      Name
 8763  0   3% R     1  10640K   1064K  fg shell    top
  131  0   3% S     1      0K      0K  fg root     dhd_dpc
 6144  0   0% S   115 1682004K 115916K  fg system   system_server
  132  0   0% S     1      0K      0K  fg root     dhd_rxf
 1731  0   0% S     6  20288K    788K  fg root     /system/bin/mpdecision
  217  0   0% S     6  18008K    356K  fg shell    /sbin/adbd
 ...
 7779  2   0% S    19 1538748K  48896K  bg u0_a71   com.sohu.inputmethod.sogou:classic
 7963  0   0% S    18 1561916K  59568K  fg u0_a58   org.mazhuang.boottimemeasure
 ...
```

各列含义：

| 列名   | 含义                                     |
| ---- | -------------------------------------- |
| PID  | 进程 ID                                  |
| PR   | 优先级                                    |
| CPU% | 当前瞬间占用 CPU 百分比                         |
| S    | 进程状态（R=运行，S=睡眠，T=跟踪/停止，Z=僵尸进程）         |
| #THR | 线程数                                    |
| VSS  | Virtual Set Size 虚拟耗用内存（包含共享库占用的内存）    |
| RSS  | Resident Set Size 实际使用物理内存（包含共享库占用的内存） |
| PCY  | 调度策略优先级，SP_BACKGROUND/SPFOREGROUND     |
| UID  | 进程所有者的用户 ID                            |
| NAME | 进程名                                    |

`top` 命令还支持一些命令行参数，详细用法如下：

```sh
Usage: top [ -m max_procs ] [ -n iterations ] [ -d delay ] [ -s sort_column ] [ -t ] [ -h ]
    -m num  最多显示多少个进程
    -n num  刷新多少次后退出
    -d num  刷新时间间隔（单位秒，默认值 5）
    -s col  按某列排序（可用 col 值：cpu, vss, rss, thr）
    -t      显示线程信息
    -h      显示帮助文档
```

```sh
eg:查看com.tencent相关的进程线程的实时cpu占用
$ top -n 3 -s cpu -t |grep "com.tencent"
```

### 查看某个进程mmap情况
```sh
# pid 需要替换成当前进程号
$ adb shell cat /proc/pid/maps
# 如果有权限问题，可以以run-as用户执行
$ adb shell run-as packageName
$ cat /proc/pid/maps
```

### 查看某进程的status文件
```sh
# 如果有权限问题。可以使用run-as用户执行
# pid 替换成对应进程的id
$ cat /proc/pid/status
# 例如下面是微信进程的status信息
Name:	com.tencent.mm
State:	S (sleeping)
Tgid:	25713
Pid:	25713
PPid:	502
TracerPid:	0
Uid:	10083	10083	10083	10083
Gid:	10083	10083	10083	10083
FDSize:	512
Groups:	1015 1028 3001 3002 3003 9997 50083
VmPeak:	 2340232 kB
VmSize:	 2319324 kB
VmLck:	       0 kB
VmPin:	       0 kB
VmHWM:	  250884 kB
VmRSS:	  244704 kB
VmData:	  521528 kB
VmStk:	    8192 kB
VmExe:	      12 kB
VmLib:	  259588 kB
VmPTE:	    1608 kB
VmSwap:	       0 kB
Threads:	179
SigQ:	0/13835
SigPnd:	0000000000000000
ShdPnd:	0000000000000000
SigBlk:	0000000000001204
SigIgn:	0000000000001000
SigCgt:	00000002000084f8
CapInh:	0000000000000000
CapPrm:	0000000000000000
CapEff:	0000000000000000
CapBnd:	0000000000000000
Cpus_allowed:	ff
Cpus_allowed_list:	0-7
voluntary_ctxt_switches:	5277
nonvoluntary_ctxt_switches:	882

```
