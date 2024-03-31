# brew Uses

### brew 私有仓库 `Formula` 创建使用
**brew 仓库搜索路径是先core在搜索私有仓库，所以创建后的配置文件一定要从core工程中删除，不然编译安装会报错**

```sh
# 1.创建Formula配置文件
$  brew create https://github.com/..../xxx/archive/v1.0.0.tar.gz
# 2.将配置文件拷贝到配置仓库工程中，并删除homebrew-core/Formula 下xxx.rb 配置文件
#  路径为：/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/xxx.rb
# 3.修改并上传仓库配置
```

### 向 homebrew 贡献 Formula
```sh
# 1. 创建Formula 
$ brew create http://luarocks.org/releases/luarocks-2.3.0.tar.gz
```
