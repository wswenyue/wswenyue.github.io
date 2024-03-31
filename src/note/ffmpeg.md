# FFMpeg 使用

## 格式转换
```sh
# webm(视频) 转换成MP3(品质为320K)
# -ab : audio bit rate
# -ar : audio sample rate
# -i : 输入
# -y : 输出
# -vn : 过滤video
$ ffmpeg -i in.webm -vn -ab 320K -y out.mp3
# 过滤调视频轨。输出的音频编码使用源视频的音频编码
$ ffmpeg -i in.webm -vn -acodec copy -y out.webm
```

## 帧抽取
```sh
# 提取图片
# -i:后面跟视频文件路径
# -r:后面跟帧率，如1表示每秒一帧的速度
# -ss:提取图片的起始时间
# -t:结束时间
# %03d.png：提取图片的命名格式，用 3 位数字自动生成从小到大的文件名
$ ffmpeg -i test.mp4 -r 1 -ss 00:00:00 -t 00:30:00 img-%03d.png

# 提取关键帧
# -i :输入文件，这里的话其实就是视频,
# -vf:是一个命令行，表示过滤图形的描述, 选择过滤器select会选择帧进行输出：包括过滤器常量
# pict_type和对应的类型:PICT_TYPE_I 表示是I帧，即关键帧。
# -vsync 2:阻止每个关键帧产生多余的拷贝
# -f image2 name_%02d.jpeg:将视频帧写入到图片中，样式的格式一般是:“%d” 或者 “%0Nd”
# -s:分辨率，1920*1080
$ ffmpeg -i test.mp4 -vf select='eq(pict_type\,I)' -vsync 2 -s 1920*1080 -f image2 key-%02d.jpg
```

## 帧
```sh
# 打印I帧
# grep -n 输出行号，显示是哪一帧
$ ffprobe -select_streams v -show_frames -show_entries frame=pict_type -of csv test.mp4 | grep -n I
# 输出关键帧的详细信息 xml格式
$ ffprobe -show_frames -select_streams v -of xml test.mp4 |grep "pict_type=\"I\""

# eg :
# <frame media_type="video" stream_index="1" key_frame="1" pkt_pts="3176970" pkt_pts_time="35.299667" pkt_dts="3176971" pkt_dts_time="35.299678" best_effort_timestamp="3176970" best_effort_timestamp_time="35.299667" pkt_duration="3483" pkt_duration_time="0.038700" pkt_pos="4958317" pkt_size="18037" width="544" height="960" pix_fmt="yuv420p" pict_type="I" coded_picture_number="910" display_picture_number="0" interlaced_frame="0" top_field_first="0" repeat_pict="0" chroma_location="left"/>

# key_frame：是否是关键帧
# pkt_pts：帧的pts数值
# pkt_pts_time：通过time_base计算出来的显示时间
# pkt_dts：帧的dts数值
# pkt_dts_time：通过time_base计算出来的dts时间
# pict_type：帧类型（I、B、P）
```


## useful links

[https://gist.github.com/protrolium/e0dbd4bb0f1a396fcb55](https://gist.github.com/protrolium/e0dbd4bb0f1a396fcb55)

[FFmpeg 视频处理入门教程-阮一峰](https://mp.weixin.qq.com/s/1yCmRlaIbXUA_m60kP5gzQ)