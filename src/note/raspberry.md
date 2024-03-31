# 树莓派

```sh
$ omxplayer -o alsa text.mp4
```

```sh
$ nmap -sP  192.168.199.1/24
$ nmap -PS -p22 --open 192.168.199.1/24
```

```sh
$ sudo tcpdump -v arp
```

```sh 
# volume set 
$ amixer -D pulse sset Master 10%-
$ amixer -D pulse sset Master 10%+
$ amixer -D pulse sset Master 40%
```

```sh
# wifi 关
$ nmcli radio wifi off
# wifi 开
$ nmcli radio wifi on
```

```sh
$ export LANG=en_US.UTF-8
$ export LANGUAGE=en
```

```sh
# 查看etc服务实时日志
# 参数 -f 表示日志跟中
$ journalctl -f -u etc.service
# 列出所有服务
$ systemctl list-units --type=service
```