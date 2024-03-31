import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as e}from"./app-BWFs2kdN.js";const t={},o=e(`<h1 id="nuget-c-dotnet-包管理工具" tabindex="-1"><a class="header-anchor" href="#nuget-c-dotnet-包管理工具"><span>NuGet C# dotnet 包管理工具</span></a></h1><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#设置华为源</span>
$ nuget sources Disable <span class="token parameter variable">-Name</span> <span class="token string">&quot;nuget.org&quot;</span>
$ nuget sources <span class="token function">add</span> <span class="token parameter variable">-Name</span> <span class="token string">&quot;huaweicloud&quot;</span> <span class="token parameter variable">-Source</span> <span class="token string">&quot;https://mirrors.huaweicloud.com/repository/nuget/v3/index.json&quot;</span>

<span class="token comment">#安装Newtonsoft.Json到当前文件夹项目中</span>
$ nuget <span class="token function">install</span> Newtonsoft.Json <span class="token parameter variable">-OutputDirectory</span> packages
<span class="token comment"># 指定版本</span>
$ nuget <span class="token function">install</span> Newtonsoft.Json <span class="token parameter variable">-Version</span> <span class="token number">12.0</span>.1

<span class="token comment">#将现有 packages.config 文件的 NuGet 包安装到“包” 文件夹。 该操作不会将包添加到项目依赖项中，而是在本地安装它</span>
$ nuget <span class="token function">install</span> packages.config <span class="token parameter variable">-OutputDirectory</span> packages

<span class="token comment">#列出给定包下依赖</span>
$ nuget list <span class="token parameter variable">-Source</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>xxx<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>shadowsocks-windows-master<span class="token punctuation">\\</span>packages<span class="token punctuation">\\</span>

<span class="token comment">#可下载并安装“包”文件夹中缺少的所有包</span>
$ nuget restore .<span class="token punctuation">\\</span>shadowsocks-windows.sln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function c(i,r){return s(),a("div",null,p)}const m=n(t,[["render",c],["__file","nuget.html.vue"]]),d=JSON.parse('{"path":"/note/nuget.html","title":"NuGet C# dotnet 包管理工具","lang":"zh-CN","frontmatter":{"description":"NuGet C# dotnet 包管理工具","head":[["meta",{"property":"og:url","content":"https://wswenyue.vip/note/nuget.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"NuGet C# dotnet 包管理工具"}],["meta",{"property":"og:description","content":"NuGet C# dotnet 包管理工具"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-31T13:08:40.000Z"}],["meta",{"property":"article:author","content":"Mr.WenYue"}],["meta",{"property":"article:modified_time","content":"2024-03-31T13:08:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NuGet C# dotnet 包管理工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-31T13:08:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.WenYue\\",\\"url\\":\\"https://github.com/wswenyue/\\"}]}"]]},"headers":[],"git":{"createdTime":1711890520000,"updatedTime":1711890520000,"contributors":[{"name":"wswenyue","email":"wswenyue@163.com","commits":1}]},"readingTime":{"minutes":0.46,"words":139},"filePathRelative":"note/nuget.md","localizedDate":"2024年3月31日","excerpt":"\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\">#设置华为源</span>\\n$ nuget sources Disable <span class=\\"token parameter variable\\">-Name</span> <span class=\\"token string\\">\\"nuget.org\\"</span>\\n$ nuget sources <span class=\\"token function\\">add</span> <span class=\\"token parameter variable\\">-Name</span> <span class=\\"token string\\">\\"huaweicloud\\"</span> <span class=\\"token parameter variable\\">-Source</span> <span class=\\"token string\\">\\"https://mirrors.huaweicloud.com/repository/nuget/v3/index.json\\"</span>\\n\\n<span class=\\"token comment\\">#安装Newtonsoft.Json到当前文件夹项目中</span>\\n$ nuget <span class=\\"token function\\">install</span> Newtonsoft.Json <span class=\\"token parameter variable\\">-OutputDirectory</span> packages\\n<span class=\\"token comment\\"># 指定版本</span>\\n$ nuget <span class=\\"token function\\">install</span> Newtonsoft.Json <span class=\\"token parameter variable\\">-Version</span> <span class=\\"token number\\">12.0</span>.1\\n\\n<span class=\\"token comment\\">#将现有 packages.config 文件的 NuGet 包安装到“包” 文件夹。 该操作不会将包添加到项目依赖项中，而是在本地安装它</span>\\n$ nuget <span class=\\"token function\\">install</span> packages.config <span class=\\"token parameter variable\\">-OutputDirectory</span> packages\\n\\n<span class=\\"token comment\\">#列出给定包下依赖</span>\\n$ nuget list <span class=\\"token parameter variable\\">-Source</span> C:<span class=\\"token punctuation\\">\\\\</span>Users<span class=\\"token punctuation\\">\\\\</span>xxx<span class=\\"token punctuation\\">\\\\</span>Desktop<span class=\\"token punctuation\\">\\\\</span>shadowsocks-windows-master<span class=\\"token punctuation\\">\\\\</span>packages<span class=\\"token punctuation\\">\\\\</span>\\n\\n<span class=\\"token comment\\">#可下载并安装“包”文件夹中缺少的所有包</span>\\n$ nuget restore .<span class=\\"token punctuation\\">\\\\</span>shadowsocks-windows.sln\\n</code></pre></div>","autoDesc":true}');export{m as comp,d as data};