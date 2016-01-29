---
layout: post
title: java-IO详解（一）
category: Java
tags: 
keywords: java,io
description: 
---

#IO流（一）
---
##总览

流的分类：


类别|分类1|分类2
---|---|---
单位|字节流|字符流
流向|输入流|输出流
功能|节点流|处理流


流与流之间的转换关系：

![转换](http://7xj2yt.com1.z0.glb.clouddn.com/java_IO流.png)

###IO流图

流名称|字节输入|字节输出|字符输入|字符输出
---|---|----|----|----
4大基类 |InputStream |OutputStream|Reader|Writer
**文件流**| FileInputStream| FileOutputStream|FileReader| FileWriter
**转换流**|-|-|InputStreamReader| OutputStreamWriter
System| System.in|System.out|-|-
打印流|-|PrintStream|-| PrintWriter
**缓存流**|BufferedInputStream|BufferedOutputStream|BufferedReader|BufferedWriter
数据流 | DataInputStream  |DataOutputStream|-|-
**内存流**|ByteArrayInputStream|ByteArrayOutputStream|-|-
对象流|ObjectInputStream| ObjectOutputStream|-|-
随机访问流 |-|RandomAccessFile|-|-

----
###IO流类思维导图
![IO流类思维导图](http://7xj2yt.com1.z0.glb.clouddn.com/java_IO.bmp)

-----

##四大抽象类

### InputStream

> 说明：继承自InputStream的流都是用于向程序中输入数据的，且数据的单位为字节(8位)

核心方法：

```java
public abstract int read()	//从输入流中读取数据的下一个字节, 返回读到的字节值.若遇到流的末尾,返回-1
public int read(byte[] b)	//从输入流中读取 b.length 个字节的数据并存储到缓冲区数组b中.返回的是实际读到的字节总数
public int read(byte[] b, int off, int len)	//读取 len 个字节的数据,并从数组b的off位置开始写入到这个数组中
public void close()	//关闭此输入流并释放与此流关联的所有系统资源
public int available()	//返回此输入流下一个方法调用可以不受阻塞地从此输入流读取（或跳过）的估计字节数
public long skip(long n)	//跳过和丢弃此输入流中数据的 n 个字节，返回实现路过的字节数。
```

### OutputStream

> 说明：继承自OutputStream的流是程序用于向外输出数据的，且数据的单位为字节(8位)

核心方法：

```java
public abstract void write(int b)	//将指定的字节写入此输出流
public void write(byte[] b)	//将 b.length 个字节从指定的 byte 数组写入此输出流
public void write(byte[] b, int off, int len)	//将指定 byte 数组中从偏移量 off 开始的 len 个字节写入此输出流
public void flush()	//刷新此输出流并强制写出所有缓冲的输出字节
pulbic void close()	//关闭此输出流并释放与此流有关的所有系统资源
```
### Reader

> 说明：继承自Reader的流都是用于向程序中输入数据的，且数据的单位为字符(16位)

核心方法：

```java    
public int read()	//读取单个字符的编码，返回作为整数读取的字符，如果已到达流的末尾返回-1
public int read(char[] cbuf)		//将字符读入数组，返回读取的字符数
public abstract int read(char[] cbuf, int off, int len)	//读取 len 个字符的数据，并从数组cbuf的off位置开始写入到这个数组中
public abstract void close()	//关闭该流并释放与之关联的所有资源
public long skip(long n) 	//跳过n个字符
int available() 	//还可以有多少能读到的字节数
```

### Writer

> 说明：继承自Writer的流是程序用于向外输出数据的，且数据的单位为字符(16位)

核心方法：

```java
public void write(int c)		//写入单个字符
public void write(char[] cbuf)	//写入字符数组
public abstract void write(char[] cbuf, int off, int len)	//写入字符数组的某一部分
public void write(String str)	//写入字符串
public void write(String str, int off, int len)	//写字符串的某一部分
public abstract void close()	//关闭此流，但要先刷新它
public abstract void flush()	//刷新该流的缓冲，将缓冲的数据全写到目的地
```
-------

##节点流
###文件流
> 说明：文件流主要用来操作文件

- **FileInputStream**:继承自InputStream

- **FileOutputStream**继承自OutputStream
FileOutputStream(String name, boolean append)  指定文件名和是否以追回方式写入

- **FileReader**继承自Reader
	核心方法:
```java
	    1、构造方法
		    FileReader(File file)
		    FileReader(String fileName)
		2、成员方法
			int read()	//每次读取一个字符，末尾-1返回值就是读入的内容
			int read(char[] cbuf)	//每次读取一组字符，最多读数组长度个，末尾-1返回值实际读取的个数
			int read(char[] cbuf,int off, int len)	//每次读取一组字符，最多len个，数据存入数组从off开始，末尾-1返回值实际读取的个数
			void close()
```

- **FileWriter**继承自Writer
	核心方法:
```java
    1、构造方法
	    FileWriter(File file)
	    FileWriter(File file,  boolean append)
		FileWriter(String fileName)
		FileWriter(String fileName, boolean append)	//构造方法来指定是否使用追加模式
	2、成员方法
		void write(int c) 
		void write(char[] cbuf,int off, int len)
		void write(String str, int off,  int len)
		void flush()
		void close()
```

###内存流

> 说明：内存流主要用来操作内存，输入和输出可以从文件中来，也可以将设置在内存之上（内存：相当于长度可变的字节数组）

分类：
**ByteArrayInputStream**类：主要完成将内容从内存读入程序之中

```
    数据<<<---------ByteArrayInputStream<<<---------内存
```

构造方法：

```java
    ByteArrayInputStream（byte[] b）
    ByteArrayInputStream(byte[] b,int off,int len)
```

常用方法：

```java
    read()
    skip()
    available()
```

**ByteArrayOutputStream**类：主要是将数据写入到内存中

```java
    数据--------->>>ByteArrayOutputStream--------->>>内存
```

构造方法：

```java
    ByteArrayOutputStream（）
    ByteArrayOutputStream（int size） ：指定缓冲区大小（byte）
```

常用方法：

```java
    byte[] toByteArray():将内存流转换为字节数组
    toString（）
    write（int）
    write（byte[] bytes）
    write（byte[] bytes ，int off，int len） 
    writeTo（OutputStream）
```

**注意：内存流不需要关闭**
