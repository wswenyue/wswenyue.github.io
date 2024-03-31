import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,f as t}from"./app-BWFs2kdN.js";const s={},p=t(`<h1 id="imagemagick-图片处理" tabindex="-1"><a class="header-anchor" href="#imagemagick-图片处理"><span>Imagemagick-图片处理</span></a></h1><p>https://www.zouyesheng.com/imagemagick.html</p><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># pdf 转图片</span>
$ convert <span class="token parameter variable">-density</span> <span class="token number">150</span> target.pdf <span class="token parameter variable">-quality</span> <span class="token number">90</span> out.png

<span class="token comment"># 拼接图片生成长图-vertical</span>
$ convert <span class="token parameter variable">-append</span> out-*.png hello.png
<span class="token comment"># 拼接图片生成长图-horizontal</span>
$ convert <span class="token parameter variable">-append</span> out-*.png hello.png

<span class="token comment"># 当前文件夹下 out-*.png匹配的图片，拼接成41x2的</span>
<span class="token comment"># geometry 指定大小</span>
$ montage out-*.png <span class="token parameter variable">-tile</span> 41x2 <span class="token parameter variable">-geometry</span> 64x256+0+0 hello.jpg
$ montage out-*.png <span class="token parameter variable">-tile</span> 21x4  image.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function i(r,l){return a(),n("div",null,o)}const g=e(s,[["render",i],["__file","imageMagick.html.vue"]]),d=JSON.parse('{"path":"/note/imageMagick.html","title":"Imagemagick-图片处理","lang":"zh-CN","frontmatter":{"description":"Imagemagick-图片处理 https://www.zouyesheng.com/imagemagick.html 指令","head":[["meta",{"property":"og:url","content":"https://wswenyue.vip/note/imageMagick.html"}],["meta",{"property":"og:site_name","content":"Blog"}],["meta",{"property":"og:title","content":"Imagemagick-图片处理"}],["meta",{"property":"og:description","content":"Imagemagick-图片处理 https://www.zouyesheng.com/imagemagick.html 指令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-31T13:08:40.000Z"}],["meta",{"property":"article:author","content":"Mr.WenYue"}],["meta",{"property":"article:modified_time","content":"2024-03-31T13:08:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Imagemagick-图片处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-31T13:08:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.WenYue\\",\\"url\\":\\"https://github.com/wswenyue/\\"}]}"]]},"headers":[{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[]}],"git":{"createdTime":1711890520000,"updatedTime":1711890520000,"contributors":[{"name":"wswenyue","email":"wswenyue@163.com","commits":1}]},"readingTime":{"minutes":0.29,"words":88},"filePathRelative":"note/imageMagick.md","localizedDate":"2024年3月31日","excerpt":"\\n<p>https://www.zouyesheng.com/imagemagick.html</p>\\n<h2>指令</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># pdf 转图片</span>\\n$ convert <span class=\\"token parameter variable\\">-density</span> <span class=\\"token number\\">150</span> target.pdf <span class=\\"token parameter variable\\">-quality</span> <span class=\\"token number\\">90</span> out.png\\n\\n<span class=\\"token comment\\"># 拼接图片生成长图-vertical</span>\\n$ convert <span class=\\"token parameter variable\\">-append</span> out-*.png hello.png\\n<span class=\\"token comment\\"># 拼接图片生成长图-horizontal</span>\\n$ convert <span class=\\"token parameter variable\\">-append</span> out-*.png hello.png\\n\\n<span class=\\"token comment\\"># 当前文件夹下 out-*.png匹配的图片，拼接成41x2的</span>\\n<span class=\\"token comment\\"># geometry 指定大小</span>\\n$ montage out-*.png <span class=\\"token parameter variable\\">-tile</span> 41x2 <span class=\\"token parameter variable\\">-geometry</span> 64x256+0+0 hello.jpg\\n$ montage out-*.png <span class=\\"token parameter variable\\">-tile</span> 21x4  image.png\\n</code></pre></div>","autoDesc":true}');export{g as comp,d as data};
