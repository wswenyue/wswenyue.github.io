# Docker Uses

```sh
# 新建并启动一个ubuntu:18.04的bash
# -t :让Docker分配一个伪终端（pseudo-tty）并绑定到容器的标准输入上
# -i :让容器的标准输入保持打开
$ docker run -t -i ubuntu:18.04 /bin/bash

# 启动bash，并把本地目录/uer/dir 挂载到容器/opt/temp目录
# --mount type=bind,source=/uer/dir,target=/opt/temp,readonly  :挂载可以指定读写权限，默认是可读可写
$ docker run -t -i --mount type=bind,source=/uer/dir,target=/opt/temp  ubuntu:16.04 /bin/bash

# 可指定多个挂载
$ docker run -ti -v /Users/temp:/opt/temp \
								 -v /Users/uname/.zsh_history:/root/.zsh_history \       		wswenyue/my_ubuntu_16_04 /bin/zsh
```
进入一个已经运行中的容器

```sh
# containerId: 容器id
$ docker exec -it containerId /bin/bash
```