# Macos 相关

## screencapture 截图命令使用
```sh
# 交互方式截图。执行该命令后需要手动框选截图区域
$ screencapture -i test.png
# 截取主显示器
$ screencapture -m test.png

Using:

-c         强制截图保存到剪贴板而不是文件中
-C         截图时保留光标（只在非交互模式下有效）
-d         display errors to the user graphically（不知道啥意思）
-i         交互模式截取屏幕。可以是选区或者是窗口。
             control key - 截图保存到剪贴板
             space key   - 在鼠标选区模式和窗口模式间切换
             escape key  - 退出截图
-m         只截取主显示器（-i模式下无效）
-M         截图完毕后，会打开邮件客户端，图片就躺在邮件正文中
-o         在窗口模式下，不截取窗口的阴影
-P         截图完毕后，在图片预览中打开
-s         只允许鼠标选择模式
-S         窗口模式下，截取屏幕而不是窗口
-t<format> 指定图片格式，模式是png。可选的有pdf, jpg, tiff等
-T<seconds> 延时截取，默认为5秒。
-w         只允许窗口截取模式
-W         开始交互截取模式，默认为窗口模式（只是默认模式与-i不同）
-x         不播放声效
-a         do not include windows attached to selected windows（不懂）
-r         不向图片中加入dpi信息
-l<windowid> 抓取指定windowid的窗口截图
-R<x,y,w,h> 抓取指定区域的截图
-B<bundleid> 截图输出会被bundleid指出的程序打开
```

## 设置软件安装"允许任何来源" 既关闭`Gatekeeper`
```sh
# 显示"允许任何来源"
$ sudo spctl --master-disable

# 不显示"允许任何来源"
$ sudo spctl --master-enable
```

## osascript 使用
```sh
# 查看Finder的id(macOS中应用id唯一)
$ osascript -e 'id of app "Finder"'
# 关闭Finder
$ osascript -e 'tell app "Finder" to quit'
# 重启 Finder
$ osascript -e 'tell app "Finder" to restart'
# 让iTunes发送语音
$ osascript -e 'tell app "iTunes" to next track' -e 'say "你好"'
# 弹出系统选择dialog
$ osascript -e 'tell app "System Events" to display dialog "Hello World"'
# 使用通知中心发送弹出通知
$ gem install terminal-notifier
$ terminal-notifier -message "Hello, this is my message" -title "Message Title"
# 发送通知中心弹出
$ osascript -e 'display notification "Lorem ipsum dolor sit amet" with title "Title"'
$ osascript -e 'display notification "通知内容" with title "标题" sound name "Sosumi"'

# 删除指定文件到垃圾箱
$ osascript -e "tell application \"Finder\" to delete POSIX file \"${PWD}/${dst}\""
# 清空垃圾箱
$ osascript -e "tell application \"Finder\" to empty the trash"
```
打开Terminal 登录ssh服务并执行一些指令
```sh
tell application "Terminal"
   set currentTab to do script ("ssh user@server;")
   delay 6
   do script ("do something remote") in currentTab
end tell
```
清除Mac系统给文件添加的扩展属性，一些文件或者软件一旦被加上某些属性后就无法使用和打开，需要使用该方式清空扩展属性后才能正常使用和打开。
```sh
# 遍历清除文件的扩展属性
$ sudo xattr -cr /Applications/Sublime\ Text.app
# 添加验证
$ xattr -d com.apple.quarantine chromedriver
```
