# Imagemagick-图片处理
https://www.zouyesheng.com/imagemagick.html

## 指令
```bash
# pdf 转图片
$ convert -density 150 target.pdf -quality 90 out.png

# 拼接图片生成长图-vertical
$ convert -append out-*.png hello.png
# 拼接图片生成长图-horizontal
$ convert -append out-*.png hello.png

# 当前文件夹下 out-*.png匹配的图片，拼接成41x2的
# geometry 指定大小
$ montage out-*.png -tile 41x2 -geometry 64x256+0+0 hello.jpg
$ montage out-*.png -tile 21x4  image.png
```
