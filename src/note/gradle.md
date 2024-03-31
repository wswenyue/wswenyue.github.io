# gradle 相关


## gradle 常用命令行
> using doc see:
> https://docs.gradle.org/current/userguide/command_line_interface.html#example_excluding_tasks

```sh
# 查看项目依赖
$ gradle -q bangjob:dependencies |tee ~/Desktop/dep.txt

# 列出task
$ gradle -q tasks
# 列出所有task
$ gradle -q tasks --all
# 假执行build Task，他的所有Task执行都会被跳过。即可以使用该命令列出build执行的所有task。 
$ gradle build --dry-run

# 执行 dist task 排除test task
$ gradle dist --exclude-task test

# 不管 up-to-date checks，强制执行所有task
$ gradle test --rerun-tasks

# 执行build和强制刷新下载依赖
$ gradle build --refresh-dependencies

# 列出所有的项目，子项目
$ gradle projects

# 查看build Task的帮助，可以输出该Task的详细信息
$ gradle -q help --task build

# 打印对应项目所有的属性值
$ gradle -q bangjob:properties

# 执行clean assembleDebug Task 并设置代理
$ gradle clean assembleDebug -Dhttp.proxyHost=127.0.0.1 -Dhttp.proxyPort=1087 -Dhttps.proxyHost=127.0.0.1 -Dhttps.proxyPort=1087 --info

```

## 执行脚本
```java
//函数如不需要返回值，把return相关去掉就行。另外如不设置standardOutput，默认就是控制台，屏幕输出，这样可以实时输出。
def sayHello = { ->
    def ret1 = new ByteArrayOutputStream()
    exec {
        commandLine "echo", "Hello"
        standardOutput = ret1

    }

    def ret2 = new ByteArrayOutputStream()
    exec {
        commandLine 'echo', "ABC"
        standardOutput = ret2
    }
    return ret2.toString().trim() + '-' + ret1.toString().trim()
}

def sayHi() {
    return "echo Hi,body".execute().text.trim()
}

task printSay {
    group 'demo'
    doLast {
        println "------>" + sayHello()
        println "------>" + sayHi()
    }
}

```