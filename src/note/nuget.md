# NuGet C# dotnet 包管理工具

```sh
#设置华为源
$ nuget sources Disable -Name "nuget.org"
$ nuget sources add -Name "huaweicloud" -Source "https://mirrors.huaweicloud.com/repository/nuget/v3/index.json"

#安装Newtonsoft.Json到当前文件夹项目中
$ nuget install Newtonsoft.Json -OutputDirectory packages
# 指定版本
$ nuget install Newtonsoft.Json -Version 12.0.1

#将现有 packages.config 文件的 NuGet 包安装到“包” 文件夹。 该操作不会将包添加到项目依赖项中，而是在本地安装它
$ nuget install packages.config -OutputDirectory packages

#列出给定包下依赖
$ nuget list -Source C:\Users\xxx\Desktop\shadowsocks-windows-master\packages\

#可下载并安装“包”文件夹中缺少的所有包
$ nuget restore .\shadowsocks-windows.sln
```