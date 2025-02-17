import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,f as t,o as s}from"./app-myKONBUc.js";const a={};function c(o,e){return s(),i("div",null,e[0]||(e[0]=[t(`<h1 id="cmake-使用" tabindex="-1"><a class="header-anchor" href="#cmake-使用"><span>cmake 使用</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GCC 使用的各种flags，可用于生成库文件的调优
https://gcc.gnu.org/onlinedocs/gcc-4.8.4/gcc/Invoking-GCC.html#Invoking-GCC

Android NDK编译选项设置
http://crash.163.com/#news/!newsId=24


LOCAL_CPPFLAGS += -fexceptions
由于NDK编译从R5开始才支持C++异常控制，为了通用性，异常处理默认是禁用的（-fno-exceptions），因此需要在指定module中添加LOCAL_CPPFLAGS += -fexceptions编译选项方可编译带异常处理的C++代码。也可以直接在Application.mk中配置APP_CPPFLAGS += -fexceptions。

LOCAL_CPPFLAGS += -frtti
从NDK R5开始，NDK也开始支持C++ RTTI了，但为了通用性，所有的C++源文件被构建的时候默认是不支持RTTI的（-fno-rtti），可以通过在Android.mk中添加：LOCAL_CPPFLAGS += -frtti或者在Application.mk添加APP_CPPFLAGS += -frtti来开启RTTI。

LOCAL_CFLAGS += -fvisibility=hidden
在NDK开发中，源文件的函数都有一个默认的visibility属性为public，编译生成的so文件中几乎所有的函数名、全局变量名均被导出，其实只需要导出java_com开头的jni函数即可，其他函数不需要暴露出来，在Android.mk中设置LOCAL_CFLAGS += -fvisibility=hidden，就可以隐藏不需要导出的函数，若某个函数需要导出，则添加JNIEXPORT或者__attribute__ ((visibility (&quot;default&quot;)))即可。
除了安全，不导出不必要的函数外，还能减小so体积。

LOCAL_CFLAGS += -ffunction-sections
不添加此参数时，编译文件.o中代码部分只有.text段，使用此参数，会使每个函数单独有一个段，举个栗子，函数func1()会编译成.text.func1段，虽然段多了，但对链接后代码大小并没有影响。

LOCAL_CFLAGS += -fdata-sections
同上，每个data都有一个单独的段。

LOCAL_LDFLAGS += -Wl --gc-sections
-Wl,&lt;option&gt;选项是告诉编译器，将后面选项&lt;option&gt;传递给连接器，-Wl,--gc-sections的意思是使用连接器ld链接时删除不用的段。若使用LOCAL_CFLAGS += -ffunction-sections -fdata-sections，则代码和数据均被分割成不同的段，若某个函数或数据未被任何函数调用，则ld不会链接未被调用的函数，从而减小so文件体积，达到优化so的目的。

LOCAL_LDFLAGS += -fPIC
PIC(position independent code)用于编译位置无关代码，生成可用于共享库的位置独立代码。若不添加-fPIC，则加载.so文件的代码段时，代码段引用的数据对象需要重定位，重定位会修改代码段内容，这样就导致没使用这个.so，代码段的进程在内核中就会生成这个文件的拷贝。

LOCAL_LDFLAGS += -Wall 
这个的意思是wring all 意思在编译和链接过程中显示所有警告信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const r=n(a,[["render",c],["__file","cmake.html.vue"]]),m=JSON.parse('{"path":"/note/cmake.html","title":"cmake 使用","lang":"zh-CN","frontmatter":{"description":"cmake 使用","head":[["meta",{"property":"og:url","content":"https://wswenyue.vip/note/cmake.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"cmake 使用"}],["meta",{"property":"og:description","content":"cmake 使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-31T13:08:40.000Z"}],["meta",{"property":"article:author","content":"Mr.WenYue"}],["meta",{"property":"article:modified_time","content":"2024-03-31T13:08:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cmake 使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-31T13:08:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.WenYue\\",\\"url\\":\\"https://github.com/wswenyue/\\"}]}"]]},"headers":[],"git":{"createdTime":1711890520000,"updatedTime":1711890520000,"contributors":[{"name":"wswenyue","email":"wswenyue@163.com","commits":1}]},"readingTime":{"minutes":2.22,"words":667},"filePathRelative":"note/cmake.md","localizedDate":"2024年3月31日","excerpt":"\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>GCC 使用的各种flags，可用于生成库文件的调优\\nhttps://gcc.gnu.org/onlinedocs/gcc-4.8.4/gcc/Invoking-GCC.html#Invoking-GCC\\n\\nAndroid NDK编译选项设置\\nhttp://crash.163.com/#news/!newsId=24\\n\\n\\nLOCAL_CPPFLAGS += -fexceptions\\n由于NDK编译从R5开始才支持C++异常控制，为了通用性，异常处理默认是禁用的（-fno-exceptions），因此需要在指定module中添加LOCAL_CPPFLAGS += -fexceptions编译选项方可编译带异常处理的C++代码。也可以直接在Application.mk中配置APP_CPPFLAGS += -fexceptions。\\n\\nLOCAL_CPPFLAGS += -frtti\\n从NDK R5开始，NDK也开始支持C++ RTTI了，但为了通用性，所有的C++源文件被构建的时候默认是不支持RTTI的（-fno-rtti），可以通过在Android.mk中添加：LOCAL_CPPFLAGS += -frtti或者在Application.mk添加APP_CPPFLAGS += -frtti来开启RTTI。\\n\\nLOCAL_CFLAGS += -fvisibility=hidden\\n在NDK开发中，源文件的函数都有一个默认的visibility属性为public，编译生成的so文件中几乎所有的函数名、全局变量名均被导出，其实只需要导出java_com开头的jni函数即可，其他函数不需要暴露出来，在Android.mk中设置LOCAL_CFLAGS += -fvisibility=hidden，就可以隐藏不需要导出的函数，若某个函数需要导出，则添加JNIEXPORT或者__attribute__ ((visibility (\\"default\\")))即可。\\n除了安全，不导出不必要的函数外，还能减小so体积。\\n\\nLOCAL_CFLAGS += -ffunction-sections\\n不添加此参数时，编译文件.o中代码部分只有.text段，使用此参数，会使每个函数单独有一个段，举个栗子，函数func1()会编译成.text.func1段，虽然段多了，但对链接后代码大小并没有影响。\\n\\nLOCAL_CFLAGS += -fdata-sections\\n同上，每个data都有一个单独的段。\\n\\nLOCAL_LDFLAGS += -Wl --gc-sections\\n-Wl,&lt;option&gt;选项是告诉编译器，将后面选项&lt;option&gt;传递给连接器，-Wl,--gc-sections的意思是使用连接器ld链接时删除不用的段。若使用LOCAL_CFLAGS += -ffunction-sections -fdata-sections，则代码和数据均被分割成不同的段，若某个函数或数据未被任何函数调用，则ld不会链接未被调用的函数，从而减小so文件体积，达到优化so的目的。\\n\\nLOCAL_LDFLAGS += -fPIC\\nPIC(position independent code)用于编译位置无关代码，生成可用于共享库的位置独立代码。若不添加-fPIC，则加载.so文件的代码段时，代码段引用的数据对象需要重定位，重定位会修改代码段内容，这样就导致没使用这个.so，代码段的进程在内核中就会生成这个文件的拷贝。\\n\\nLOCAL_LDFLAGS += -Wall \\n这个的意思是wring all 意思在编译和链接过程中显示所有警告信息\\n</code></pre></div>","autoDesc":true}');export{r as comp,m as data};
