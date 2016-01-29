---
layout: post
title: java-IO详解（二）
category: Java
tags: 
keywords: java,io
description: 
---


#IO流(二)

###处理流(过滤流)

####缓冲流

> 说明：缓冲流是处理流的一种,建立在相应的节点流之上，对读写的数据提供了缓冲的功能，提高了读写的效率，还增加了一些新的方法

**注意**：
- 1、对于缓冲输出流，写出的数据会先缓存在内存缓冲区中，关闭此流前要用flush()方法将缓存区的数据立刻写出
- 2、关闭过滤流时，会自动关闭过滤流所包装的所有底层流

**BufferedInputStream** 可以对任何的InputStream流进行包装

**BufferedOutputStream** 可以对任何的OutputStream流进行包装

**BufferedReader** 可以对任何的Reader流进行包装

> 新增了readLine()方法用于一次读取一行字符串(以‘\r’或‘\n’认为一行结束)返回一行 如果没有返回null


**BufferedWriter** 可以对任何的Writer流进行包装
> 新增了newLine()方法，用于跨平台的写入换行符


#### Object流
>说明：JDK提供的ObjectOutputStream和ObjectInputStream类是用于存储和读取基本数据类型或对象的过滤流

**序列化**：用ObjectOutputStream类保存基本数据类型或对象的机制叫序列化

**反序列化**：用ObjectInputStream类读取基本数据类型或对象的机制叫反序列化

**Serializable接口**

作用：能被序列化的对象所对应的类必须实现java.io.Serializable这个标识性接口
注意：实现此接口的类，需要提供一个静态long类型的常量serialVersionUID，保证序列化与反序列化的一致性


**构造方法**:

```java
public ObjectOutputStream(OutputStream out)
public ObjectInputStream(InputStream in)
```

**transient关键字**:
    
transient关键字修饰成员变量时，表示这个成员变量是不需要序列化的
static修饰的成员变量也不会被序列化


#### 转换流
> 作用：转换流用于在字节流和字符流之间转换。

分类：

- **InputStreamReader**类
```
1）是Reader的子类，将输入的字节流变为字符流，即将一个字节流的输入对象变为字符流的输入对象
2）InputStreamReader需要和InputStream“套接”，它可以将字节流中读入的字节解码成字符
```

- **OutputStreamWriter**类
```
1）是Writer的子类，将输出的字符流变为字节流，即将一个字符流的输出对象变为字节流的输出对象
2）OutputStreamWriter需要和OutputStream“套接”，它可以将要写入字节流的字符编码成字节
```

转换过程：
- 写入数据
```	
程序--->>字符数据--->>字符流--->>OutputStreamWriter--->>字节流--->>文件
```

- 读出数据
```
程序<<---字符数据<<---字符流<<----InputStreamReader<<---字节流<<---文件
```

#### 数据流


**DataInputStream**类
> 作用：读取简单数据类型和字符串

核心方法:

```java
readInt() 读取一个基本数据类型数据
readInt() 读取一个基本数据类型数据
```

**DataOutputStream**类
> 作用：写出简单数据类型和字符串

核心方法:

```java
writeInt(int i)
writeUTF(String s) 写入UTF-8编码的字符串
```

#### 打 印流

> 说明：向控制台输出数据

PrintStream类：字节输出流

PrintWriter类：字符输出流

打印流示例（**注意：write写入的是字节**）：
```java
PrintStream ps = new PrintStream("src/print.txt");
ps.write(355);// 字节 00000000 00000000 00000001 01100011
			// 舍弃前三位---》01100011--》c
ps.println(355);
ps.flush();
ps.close();
```

**注意**
```java
System.out就是PrintStream的一个实例
PrintStream和PrintWriter的输出操作不会抛出异常
```

构造方法:
```java
PrintStream(OutputStream out)
PrintStream(OutputStream out, boolean autoFlush)
PrintWriter(Writer out)
PrintWriter(Writer out, boolean autoFlush)
PrintWriter(OutputStream out)
PrintWriter(OutputStream out, boolean autoFlush)
```


### RandomAccessFile类(随机访问文件)
> 作用：完成随机读取功能，可以读取指定位置的内容

构造方法：

```java
public RandomAccessFile(File file,  String mode) 
public RandomAccessFile(File file,  String mode) 
```

文件的打开模式

```
“r” 以只读方式打开。调用结果对象的任何 write 方法都将导致抛出 IOException。  
“rw” 打开以便读取和写入。如果该文件尚不存在，则尝试创建该文件。  
```

常用方法:

```java
getFilePointer():返回子文件中当前的偏移量	
seek(long l):设置到此文件开头测量到的文件的偏移量 在该位置的下一个发生读、写操作
```

注意：

```java
RandomAccessFile raf = new RandomAccessFile("src/per.txt", "rw");
//这里遍历的时候需注意要用getFilePointer()读取光标的位置
for (int i = 0; i < raf.length(); i = (int) raf.getFilePointer()) {
	//do ...			
}
```