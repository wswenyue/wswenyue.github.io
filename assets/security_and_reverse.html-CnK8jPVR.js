import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,f as e,o as r}from"./app-myKONBUc.js";const a={};function i(s,t){return r(),n("div",null,t[0]||(t[0]=[e(`<h1 id="安全与逆向" tabindex="-1"><a class="header-anchor" href="#安全与逆向"><span>安全与逆向</span></a></h1><h3 id="binutils-工具介绍" tabindex="-1"><a class="header-anchor" href="#binutils-工具介绍"><span>Binutils 工具介绍</span></a></h3><p>binutils是一套安全与逆向使用的工具包</p><table><thead><tr><th>工具</th><th>介绍</th></tr></thead><tbody><tr><td>as</td><td>汇编器</td></tr><tr><td>ld</td><td>连接器</td></tr><tr><td>gprof</td><td>性能分析工具程序</td></tr><tr><td>addr2line</td><td>从目标文件的虚拟地址获取文件的行号或符号</td></tr><tr><td>ar</td><td>可以对静态库做创建、修改和取出的操作。</td></tr><tr><td>c++filt</td><td>解码 C++ 的符号</td></tr><tr><td>dlltool</td><td>创建Windows 动态库</td></tr><tr><td>gold</td><td>另一种连接器</td></tr><tr><td>nlmconv</td><td>可以转换成NetWare Loadable Module目标文件格式</td></tr><tr><td>nm</td><td>显示目标文件内的符号</td></tr><tr><td>objcopy</td><td>复制目标文件，过程中可以修改</td></tr><tr><td>objdump</td><td>显示目标文件的相关信息，亦可反汇编</td></tr><tr><td>ranlib</td><td>产生静态库的索引</td></tr><tr><td>greadelf</td><td>显示ELF文件的内容</td></tr><tr><td>size</td><td>列出总体和section的大小</td></tr><tr><td>strings</td><td>列出任何二进制档内的可显示字符串</td></tr><tr><td>strip</td><td>从目标文件中移除符号</td></tr><tr><td>windmc</td><td>产生Windows消息资源</td></tr><tr><td>windres</td><td>Windows 资源档编译器</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># install binutils</span>
$ brew <span class="token function">install</span> binutils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看依赖。NEEDED标志的就是依赖项</span>
$ readelf <span class="token parameter variable">-d</span> xxx.so 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const c=d(a,[["render",i],["__file","security_and_reverse.html.vue"]]),p=JSON.parse('{"path":"/note/security_and_reverse.html","title":"安全与逆向","lang":"zh-CN","frontmatter":{"description":"安全与逆向 Binutils 工具介绍 binutils是一套安全与逆向使用的工具包 使用:","head":[["meta",{"property":"og:url","content":"https://wswenyue.vip/note/security_and_reverse.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"安全与逆向"}],["meta",{"property":"og:description","content":"安全与逆向 Binutils 工具介绍 binutils是一套安全与逆向使用的工具包 使用:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-31T13:08:40.000Z"}],["meta",{"property":"article:author","content":"Mr.WenYue"}],["meta",{"property":"article:modified_time","content":"2024-03-31T13:08:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安全与逆向\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-31T13:08:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.WenYue\\",\\"url\\":\\"https://github.com/wswenyue/\\"}]}"]]},"headers":[{"level":3,"title":"Binutils 工具介绍","slug":"binutils-工具介绍","link":"#binutils-工具介绍","children":[]}],"git":{"createdTime":1711890520000,"updatedTime":1711890520000,"contributors":[{"name":"wswenyue","email":"wswenyue@163.com","commits":1}]},"readingTime":{"minutes":0.87,"words":261},"filePathRelative":"note/security_and_reverse.md","localizedDate":"2024年3月31日","excerpt":"\\n<h3>Binutils 工具介绍</h3>\\n<p>binutils是一套安全与逆向使用的工具包</p>\\n<table>\\n<thead>\\n<tr>\\n<th>工具</th>\\n<th>介绍</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>as</td>\\n<td>汇编器</td>\\n</tr>\\n<tr>\\n<td>ld</td>\\n<td>连接器</td>\\n</tr>\\n<tr>\\n<td>gprof</td>\\n<td>性能分析工具程序</td>\\n</tr>\\n<tr>\\n<td>addr2line</td>\\n<td>从目标文件的虚拟地址获取文件的行号或符号</td>\\n</tr>\\n<tr>\\n<td>ar</td>\\n<td>可以对静态库做创建、修改和取出的操作。</td>\\n</tr>\\n<tr>\\n<td>c++filt</td>\\n<td>解码 C++ 的符号</td>\\n</tr>\\n<tr>\\n<td>dlltool</td>\\n<td>创建Windows 动态库</td>\\n</tr>\\n<tr>\\n<td>gold</td>\\n<td>另一种连接器</td>\\n</tr>\\n<tr>\\n<td>nlmconv</td>\\n<td>可以转换成NetWare Loadable Module目标文件格式</td>\\n</tr>\\n<tr>\\n<td>nm</td>\\n<td>显示目标文件内的符号</td>\\n</tr>\\n<tr>\\n<td>objcopy</td>\\n<td>复制目标文件，过程中可以修改</td>\\n</tr>\\n<tr>\\n<td>objdump</td>\\n<td>显示目标文件的相关信息，亦可反汇编</td>\\n</tr>\\n<tr>\\n<td>ranlib</td>\\n<td>产生静态库的索引</td>\\n</tr>\\n<tr>\\n<td>greadelf</td>\\n<td>显示ELF文件的内容</td>\\n</tr>\\n<tr>\\n<td>size</td>\\n<td>列出总体和section的大小</td>\\n</tr>\\n<tr>\\n<td>strings</td>\\n<td>列出任何二进制档内的可显示字符串</td>\\n</tr>\\n<tr>\\n<td>strip</td>\\n<td>从目标文件中移除符号</td>\\n</tr>\\n<tr>\\n<td>windmc</td>\\n<td>产生Windows消息资源</td>\\n</tr>\\n<tr>\\n<td>windres</td>\\n<td>Windows 资源档编译器</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{c as comp,p as data};
