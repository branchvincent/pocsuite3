import{_ as a,j as s,g as n,I as e}from"./chunks/framework.4d72ab90.js";var p="/assets/install_pypi.09927f47.png",l="/assets/install_macos.769046ce.png",t="/assets/install_debian.dc82bb19.png",i="/assets/install_docker.58782708.png",c="/assets/install_archlinux.4db42c10.png";const m=JSON.parse('{"title":"\u5B89\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F7F\u7528 Python3 pip \u5B89\u88C5","slug":"\u4F7F\u7528-python3-pip-\u5B89\u88C5"},{"level":2,"title":"\u5728 MacOS \u4E0A\u5B89\u88C5","slug":"\u5728-macos-\u4E0A\u5B89\u88C5"},{"level":2,"title":"Debian, Ubuntu, Kali","slug":"debian-ubuntu-kali"},{"level":2,"title":"Docker","slug":"docker"},{"level":2,"title":"Arch Linux","slug":"arch-linux"},{"level":2,"title":"\u6E90\u7801\u5B89\u88C5","slug":"\u6E90\u7801\u5B89\u88C5"}],"relativePath":"guide/install.md","lastUpdated":1657949701000}'),r={name:"guide/install.md"},o=e(`<h1 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h1><p>Pocsuite3 \u57FA\u4E8E Python3 \u5F00\u53D1\uFF0C\u53EF\u4EE5\u8FD0\u884C\u5728\u652F\u6301 Python 3.7+ \u7684\u4EFB\u4F55\u5E73\u53F0\u4E0A\uFF0C\u4F8B\u5982 Linux\u3001Windows\u3001MacOS\u3001BSD \u7B49\u3002</p><p>2021 \u5E74 11 \u6708\uFF0CPocsuite3 \u901A\u8FC7\u4E86 Debian \u5B98\u65B9\u7684\u4EE3\u7801\u53CA\u5408\u89C4\u68C0\u67E5\uFF0C\u6B63\u5F0F\u52A0\u5165 Debian\u3001Ubuntu\u3001Kali \u7B49 Linux \u53D1\u884C\u7248\u7684\u8F6F\u4EF6\u4ED3\u5E93\uFF0C\u53EF\u4EE5\u901A\u8FC7 apt \u547D\u4EE4\u4E00\u952E\u83B7\u53D6\u3002\u6B64\u5916\uFF0CPocsuite3 \u4E5F\u5DF2\u7ECF\u63A8\u9001\u5230 Python PyPi\u3001MacOS \u7684 Homebrew \u4ED3\u5E93\u3001Archlinux \u7684 Aur \u4ED3\u5E93\u3001Dockerhub\u3002</p><h2 id="\u4F7F\u7528-python3-pip-\u5B89\u88C5" tabindex="-1">\u4F7F\u7528 Python3 pip \u5B89\u88C5 <a class="header-anchor" href="#\u4F7F\u7528-python3-pip-\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pip3 install pocsuite3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4F7F\u7528\u56FD\u5185\u955C\u50CF\u52A0\u901F</span></span>
<span class="line"><span style="color:#A6ACCD;">pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple pocsuite3</span></span>
<span class="line"></span></code></pre></div><p><img src="`+p+`" alt=""></p><h2 id="\u5728-macos-\u4E0A\u5B89\u88C5" tabindex="-1">\u5728 MacOS \u4E0A\u5B89\u88C5 <a class="header-anchor" href="#\u5728-macos-\u4E0A\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">brew update</span></span>
<span class="line"><span style="color:#A6ACCD;">brew info pocsuite3</span></span>
<span class="line"><span style="color:#A6ACCD;">brew install pocsuite3</span></span>
<span class="line"></span></code></pre></div><p><img src="`+l+`" alt=""></p><h2 id="debian-ubuntu-kali" tabindex="-1"><a href="https://tracker.debian.org/pkg/pocsuite3" target="_blank" rel="noreferrer">Debian</a>, <a href="https://launchpad.net/ubuntu/+source/pocsuite3" target="_blank" rel="noreferrer">Ubuntu</a>, <a href="http://pkg.kali.org/pkg/pocsuite3" target="_blank" rel="noreferrer">Kali</a> <a class="header-anchor" href="#debian-ubuntu-kali" aria-hidden="true">#</a></h2><p>\u7531\u4E8E Linux APT \u8F6F\u4EF6\u4ED3\u5E93\u673A\u5236\u7684\u539F\u56E0\uFF0C\u901A\u8FC7 apt \u5B89\u88C5\u7684\u8F6F\u4EF6\u5305\u53EF\u80FD\u7565\u4F4E\u4E8E\u4E0A\u6E38\u7248\u672C\u3002</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo apt update</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt install pocsuite3</span></span>
<span class="line"></span></code></pre></div><p><img src="`+t+`" alt=""></p><h2 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run -it pocsuite3/pocsuite3</span></span>
<span class="line"></span></code></pre></div><p><img src="`+i+`" alt=""></p><h2 id="arch-linux" tabindex="-1">Arch Linux <a class="header-anchor" href="#arch-linux" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">yay pocsuite3</span></span>
<span class="line"></span></code></pre></div><p><img src="`+c+`" alt=""></p><h2 id="\u6E90\u7801\u5B89\u88C5" tabindex="-1">\u6E90\u7801\u5B89\u88C5 <a class="header-anchor" href="#\u6E90\u7801\u5B89\u88C5" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">wget https://github.com/knownsec/pocsuite3/archive/master.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">unzip master.zip</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> pocsuite3-master</span></span>
<span class="line"><span style="color:#A6ACCD;">pip3 install -r requirements.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">python3 setup.py install</span></span>
<span class="line"></span></code></pre></div>`,21),d=[o];function u(h,_,g,b,y,A){return n(),s("div",null,d)}var v=a(r,[["render",u]]);export{m as __pageData,v as default};