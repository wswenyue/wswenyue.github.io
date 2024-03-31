import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as n,f as e}from"./app-BWFs2kdN.js";const t={},l=e(`<h1 id="linux-篇" tabindex="-1"><a class="header-anchor" href="#linux-篇"><span>Linux 篇</span></a></h1><h3 id="查看系统版本等信息" tabindex="-1"><a class="header-anchor" href="#查看系统版本等信息"><span>查看系统版本等信息</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">uname</span> <span class="token parameter variable">-a</span>
<span class="token operator">&gt;</span> Linux kali <span class="token number">4.15</span>.0-kali2-amd64 <span class="token comment">#1 SMP Debian 4.15.11-1kali1 (2018-03-21) x86_64 GNU/Linux</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关机" tabindex="-1"><a class="header-anchor" href="#关机"><span>关机</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 立即关机</span>
$ <span class="token function">shutdown</span> now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重启" tabindex="-1"><a class="header-anchor" href="#重启"><span>重启</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置开机仅启动命令行窗口-不启动gui界面" tabindex="-1"><a class="header-anchor" href="#设置开机仅启动命令行窗口-不启动gui界面"><span>设置开机仅启动命令行窗口，不启动GUI界面</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 设置开启多用户，这样GUI界面就不会打开了</span>
$ systemctl set-default multi-user.target
<span class="token comment"># 回复到GUI界面可以使用如下指令</span>
$ systemctl set-default graphical.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh-keygen" tabindex="-1"><a class="header-anchor" href="#ssh-keygen"><span>SSH-Keygen</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 生成秘钥 -t:指定秘钥算法 -f:指定生成的秘钥文件名称（路径） -C:公钥添加备注信息,一般会添加邮箱地址</span>
<span class="token comment"># 算法: ed25519/rsa</span>
<span class="token comment"># 推荐选择ed25519，安全性更高。在如今大计算的使用下rsa安全性已经不够了</span>
$ ssh-keygen <span class="token parameter variable">-t</span> ed25519 <span class="token parameter variable">-f</span> <span class="token builtin class-name">test</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;test&quot;</span>
eg
$ ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;xxx@gmail.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh-登录访问测试" tabindex="-1"><a class="header-anchor" href="#ssh-登录访问测试"><span>SSH 登录访问测试</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>$ ssh -T git@gitlab.example.com
# 如没有反馈文案可使用
$ ssh -Tvvv git@gitlab.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh-login" tabindex="-1"><a class="header-anchor" href="#ssh-login"><span>SSH Login</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># -p: 指定2200端口而非22端口</span>
<span class="token comment"># 宿主机连接虚拟机就要使用127.0.0.1的ip,还要给虚拟机设置端口转发，例如：2200转22 </span>
<span class="token comment"># -i: 指定要用的私钥文件，我们这里使用的是秘钥登录</span>
<span class="token comment"># -v: 详细输出，一般用于找出ssh连接出错的原因</span>
$ <span class="token function">ssh</span> <span class="token parameter variable">-p</span> <span class="token number">2200</span> root@127.0.0.1 <span class="token parameter variable">-i</span> .ssh/id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scp-使用ssh通道拷贝文件" tabindex="-1"><a class="header-anchor" href="#scp-使用ssh通道拷贝文件"><span>SCP 使用ssh通道拷贝文件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># -P： 指定特别的端口是2200 而非默认端口22</span>
$ <span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">2200</span>  .ssh/id_rsa.pub root@127.0.0.1:/root/.ssh/host.pub
<span class="token comment"># 拷贝远程windows桌面文件到当前目录</span>
$ <span class="token function">scp</span> administrator@169.254.15.40:/Users/Administrator/Desktop/Res.rar ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串tr处理使用" tabindex="-1"><a class="header-anchor" href="#字符串tr处理使用"><span>字符串tr处理使用</span></a></h3><table><thead><tr><th style="text-align:center;">规则</th><th style="text-align:center;">示例</th></tr></thead><tbody><tr><td style="text-align:center;">大写转小写</td><td style="text-align:center;"><code>tr &#39;[:upper:]&#39; &#39;[:lower:]&#39;</code> OR <code>tr &#39;[A-Z]&#39; &#39;[a-z]&#39;</code></td></tr><tr><td style="text-align:center;">删除字符</td><td style="text-align:center;"><code>tr -d x</code> x:要删除的字符</td></tr><tr><td style="text-align:center;">字符替换</td><td style="text-align:center;"><code>tr A B</code> 把A替换成B</td></tr></tbody></table><h3 id="xargs-使用" tabindex="-1"><a class="header-anchor" href="#xargs-使用"><span>xargs 使用</span></a></h3><blockquote><p>xargs能够处理管道或者stdin并将其转换成特定命令的命令参数</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#复制所有图片文件到 /data/images 目录下</span>
$ <span class="token function">ls</span> *.jpg <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n1</span> <span class="token parameter variable">-I</span> <span class="token function">cp</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> /data/images
<span class="token comment"># 删除当前目录下所有的log文件</span>
<span class="token comment"># xargs 默认是以空白字符，如果文件名中包含空白符号会出错，find打印文件后面加入&#39;\\0&#39;,xargs 以 &#39;\\0&#39;分割就可以解决这个问题</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.log&quot;</span> <span class="token parameter variable">-print0</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span>
<span class="token comment"># 统计一个源代码目录中所有php文件的行数</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.php&quot;</span> <span class="token parameter variable">-print0</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-0</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
<span class="token comment"># 查找所有的jpg 文件，并且压缩它们</span>
$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-type</span> f <span class="token parameter variable">-name</span> <span class="token string">&quot;*.jpg&quot;</span> <span class="token parameter variable">-print</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token function">tar</span> <span class="token parameter variable">-czvf</span> images.tar.gz
<span class="token comment"># -dX :以&#39;X&#39;分割; -n2 :一行（一批）输出两个</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;nameXnameXnameXname&quot;</span> <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-dX</span> <span class="token parameter variable">-n2</span>
-<span class="token operator">&gt;</span> name name
-<span class="token operator">&gt;</span> name name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="去重-uniq-sort-u" tabindex="-1"><a class="header-anchor" href="#去重-uniq-sort-u"><span>去重 <code>uniq</code> <code>sort -u</code></span></a></h3><blockquote><p><code>uniq</code> 只能识别临近的相同行 <code>sort -u</code> 是全文本去重</p></blockquote><h3 id="cut-字符串切割" tabindex="-1"><a class="header-anchor" href="#cut-字符串切割"><span><code>cut</code> 字符串切割</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 以‘X’切割并取第二组字符串</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;abXbcXdeX&quot;</span> <span class="token operator">|</span><span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;X&quot;</span> <span class="token parameter variable">-f</span> <span class="token number">2</span>
--<span class="token operator">&gt;</span> <span class="token function">bc</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tee-指令会从标准输入设备读取数据-将其内容输出到标准输出设备-同时保存成文件" tabindex="-1"><a class="header-anchor" href="#tee-指令会从标准输入设备读取数据-将其内容输出到标准输出设备-同时保存成文件"><span><code>tee</code> 指令会从标准输入设备读取数据，将其内容输出到标准输出设备，同时保存成文件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">|</span><span class="token function">tee</span> backup.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="js-文件压缩、混淆" tabindex="-1"><a class="header-anchor" href="#js-文件压缩、混淆"><span>js 文件压缩、混淆</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">npm</span> <span class="token function">install</span> uglify-js <span class="token parameter variable">-g</span> 
<span class="token comment"># 全局安装uglify-js</span>
$ uglifyjs input.js <span class="token parameter variable">-c</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-o</span> out-min.js
<span class="token comment"># input.js :要压缩的js文件</span>
<span class="token comment"># out-min.js :压缩后的文件路径</span>
<span class="token comment"># -c :压缩 ; -m :单字母混淆; -o :输出</span>

$ uglifyjs out-min.js <span class="token parameter variable">-b</span> <span class="token parameter variable">-o</span> abc.js
<span class="token comment"># -b :格式化js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在流输出情况下-grep-tee等指令的串联使用" tabindex="-1"><a class="header-anchor" href="#在流输出情况下-grep-tee等指令的串联使用"><span>在流输出情况下，grep,tee等指令的串联使用</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># --line-buffered:流输出的情况下，必须指定buffer大小为行大小</span>
<span class="token comment"># -E :是正则支持</span>
<span class="token comment"># 后面追加 |grep -E &quot;Networks|Disks&quot;是想要输出在终端的内容，有高亮显示</span>
$ <span class="token function">top</span> <span class="token operator">|</span><span class="token function">grep</span> --line-buffered <span class="token parameter variable">-E</span> <span class="token string">&quot;Networks|Disks&quot;</span> <span class="token operator">|</span><span class="token function">tee</span> Desktop/log.txt <span class="token operator">|</span><span class="token function">grep</span> --line-buffered <span class="token parameter variable">-E</span> <span class="token string">&quot;Networks|Disks&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grep" tabindex="-1"><a class="header-anchor" href="#grep"><span>grep</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 遍历搜索当前文件夹下面所有文件中包含text的行 -r：遍历所有子文件夹</span>
$ <span class="token function">grep</span> <span class="token parameter variable">-r</span> text ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志过滤" tabindex="-1"><a class="header-anchor" href="#日志过滤"><span>日志过滤</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 过滤日志并输入到指定文件</span>
$ <span class="token function">cat</span> xxx.log <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;tag1|tag2|tag3&quot;</span> <span class="token operator">&gt;</span> aaa.log
<span class="token comment"># 反向排除</span>
$ <span class="token function">grep</span> <span class="token parameter variable">-vE</span> <span class="token string">&quot;tag1|tag2|tag3&quot;</span>
<span class="token comment"># 显示匹配结果的前后3行【B：前三行；A：后三行】</span>
$ <span class="token function">grep</span> <span class="token parameter variable">-E</span> <span class="token string">&quot;tag1&quot;</span> <span class="token parameter variable">-C</span> <span class="token number">3</span>

<span class="token comment"># tee 同时输出到文件</span>
$ aklog <span class="token parameter variable">-p</span> <span class="token string">&quot;your_package_name&quot;</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;tag&quot;</span> <span class="token operator">|</span> <span class="token function">tee</span> ~/Desktop/tag.log 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="diff-指令使用" tabindex="-1"><a class="header-anchor" href="#diff-指令使用"><span>diff 指令使用</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 以并列的方式显示文件的异同之处</span>
$ <span class="token function">diff</span> <span class="token parameter variable">-y</span> dir1 dir2
<span class="token comment"># 以并列的方式显示两个内容的异同之处；右边部分只显示不一样的</span>
$ <span class="token function">diff</span> <span class="token parameter variable">-y</span> --left-column  <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">ls</span> dir1<span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">ls</span> dir2<span class="token punctuation">)</span>
<span class="token comment"># 以并列的方式显示两个内容的异同之处；只显示不一样的部分</span>
$ <span class="token function">diff</span> <span class="token parameter variable">-y</span> --suppress-common-lines <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">ls</span> dir1<span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">ls</span> dir2<span class="token punctuation">)</span>
<span class="token comment"># 对比两个文件内容</span>
$ icdiff projects/<span class="token punctuation">{</span>app1,app2<span class="token punctuation">}</span>/settings.gradle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="格式转换" tabindex="-1"><a class="header-anchor" href="#格式转换"><span>格式转换</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 将pdf转成png格式</span>
$ sips <span class="token parameter variable">-s</span> <span class="token function">format</span> png a.pdf <span class="token parameter variable">--out</span> img.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片文件信息查看" tabindex="-1"><a class="header-anchor" href="#图片文件信息查看"><span>图片文件信息查看</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ identify <span class="token parameter variable">-verbose</span> img.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nmap扫描" tabindex="-1"><a class="header-anchor" href="#nmap扫描"><span>nmap扫描</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 扫描192.168.199.1/24网段 22端口（ssh）开放的情况</span>
$ nmap <span class="token parameter variable">-PS</span> <span class="token parameter variable">-p22</span> <span class="token parameter variable">--open</span> <span class="token number">192.168</span>.199.1/24
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,44),i=[l];function p(r,c){return s(),n("div",null,i)}const u=a(t,[["render",p],["__file","linux.html.vue"]]),m=JSON.parse('{"path":"/note/linux.html","title":"Linux 篇","lang":"zh-CN","frontmatter":{"description":"Linux 篇 查看系统版本等信息 关机 重启 设置开机仅启动命令行窗口，不启动GUI界面 SSH-Keygen SSH 登录访问测试 SSH Login SCP 使用ssh通道拷贝文件 字符串tr处理使用 xargs 使用 xargs能够处理管道或者stdin并将其转换成特定命令的命令参数 去重 uniq sort -u uniq 只能识别临近的相同...","head":[["meta",{"property":"og:url","content":"https://wswenyue.vip/note/linux.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Linux 篇"}],["meta",{"property":"og:description","content":"Linux 篇 查看系统版本等信息 关机 重启 设置开机仅启动命令行窗口，不启动GUI界面 SSH-Keygen SSH 登录访问测试 SSH Login SCP 使用ssh通道拷贝文件 字符串tr处理使用 xargs 使用 xargs能够处理管道或者stdin并将其转换成特定命令的命令参数 去重 uniq sort -u uniq 只能识别临近的相同..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-31T13:08:40.000Z"}],["meta",{"property":"article:author","content":"Mr.WenYue"}],["meta",{"property":"article:modified_time","content":"2024-03-31T13:08:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-31T13:08:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.WenYue\\",\\"url\\":\\"https://github.com/wswenyue/\\"}]}"]]},"headers":[{"level":3,"title":"查看系统版本等信息","slug":"查看系统版本等信息","link":"#查看系统版本等信息","children":[]},{"level":3,"title":"关机","slug":"关机","link":"#关机","children":[]},{"level":3,"title":"重启","slug":"重启","link":"#重启","children":[]},{"level":3,"title":"设置开机仅启动命令行窗口，不启动GUI界面","slug":"设置开机仅启动命令行窗口-不启动gui界面","link":"#设置开机仅启动命令行窗口-不启动gui界面","children":[]},{"level":3,"title":"SSH-Keygen","slug":"ssh-keygen","link":"#ssh-keygen","children":[]},{"level":3,"title":"SSH 登录访问测试","slug":"ssh-登录访问测试","link":"#ssh-登录访问测试","children":[]},{"level":3,"title":"SSH Login","slug":"ssh-login","link":"#ssh-login","children":[]},{"level":3,"title":"SCP 使用ssh通道拷贝文件","slug":"scp-使用ssh通道拷贝文件","link":"#scp-使用ssh通道拷贝文件","children":[]},{"level":3,"title":"字符串tr处理使用","slug":"字符串tr处理使用","link":"#字符串tr处理使用","children":[]},{"level":3,"title":"xargs 使用","slug":"xargs-使用","link":"#xargs-使用","children":[]},{"level":3,"title":"去重 uniq sort -u","slug":"去重-uniq-sort-u","link":"#去重-uniq-sort-u","children":[]},{"level":3,"title":"cut 字符串切割","slug":"cut-字符串切割","link":"#cut-字符串切割","children":[]},{"level":3,"title":"tee 指令会从标准输入设备读取数据，将其内容输出到标准输出设备，同时保存成文件","slug":"tee-指令会从标准输入设备读取数据-将其内容输出到标准输出设备-同时保存成文件","link":"#tee-指令会从标准输入设备读取数据-将其内容输出到标准输出设备-同时保存成文件","children":[]},{"level":3,"title":"js 文件压缩、混淆","slug":"js-文件压缩、混淆","link":"#js-文件压缩、混淆","children":[]},{"level":3,"title":"在流输出情况下，grep,tee等指令的串联使用","slug":"在流输出情况下-grep-tee等指令的串联使用","link":"#在流输出情况下-grep-tee等指令的串联使用","children":[]},{"level":3,"title":"grep","slug":"grep","link":"#grep","children":[]},{"level":3,"title":"日志过滤","slug":"日志过滤","link":"#日志过滤","children":[]},{"level":3,"title":"diff 指令使用","slug":"diff-指令使用","link":"#diff-指令使用","children":[]},{"level":3,"title":"格式转换","slug":"格式转换","link":"#格式转换","children":[]},{"level":3,"title":"图片文件信息查看","slug":"图片文件信息查看","link":"#图片文件信息查看","children":[]},{"level":3,"title":"nmap扫描","slug":"nmap扫描","link":"#nmap扫描","children":[]}],"git":{"createdTime":1711890520000,"updatedTime":1711890520000,"contributors":[{"name":"wswenyue","email":"wswenyue@163.com","commits":1}]},"readingTime":{"minutes":3.76,"words":1127},"filePathRelative":"note/linux.md","localizedDate":"2024年3月31日","excerpt":"\\n<h3>查看系统版本等信息</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">uname</span> <span class=\\"token parameter variable\\">-a</span>\\n<span class=\\"token operator\\">&gt;</span> Linux kali <span class=\\"token number\\">4.15</span>.0-kali2-amd64 <span class=\\"token comment\\">#1 SMP Debian 4.15.11-1kali1 (2018-03-21) x86_64 GNU/Linux</span>\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
