# PowerShell of Windows command  

PowerShell 软件仓库：https://www.powershellgallery.com/

```sh
# PowerShell Version
$ $PSVersionTable.PSVersion
# 获取帮助
$ get-help  PowerShellGet

# 获取所有环境变量
$ Get-ChildItem env:
# 指定获取变量
$ $env:USER

# 查找NuGet，并安装（强制安装）
$ Find-PackageProvider -Name NuGet | Install-PackageProvider -Force

# 强制安装PowerShellGet 模块
$ Install-Module -Name PowerShellGet -Force

# 获取已经安装的模块
$ Get-PackageProvider

# 获取进程，并杀掉进程
$ Get-Process -Name notepad | Stop-Process
eg: 可以模糊查询
$ get-process *note* |stop-process

# 设置默认登录shell
$ New-ItemProperty -Path "HKLM:\SOFTWARE\OpenSSH" -Name DefaultShell -Value "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -PropertyType String -Force

# 离线安装WSL
# 下载Ubuntu1804 appx包
# https://aka.ms/wsl-ubuntu-1804
# 添加安装，安装之后可在应用程序中找到，然后做初始化。
$ Add-AppxPackage .\app_name.appx

# wget
$ wget url -OutFile outfile

# unzip
$ Expand-Archive .\xxx.zip -DestinationPath .\xxx
```