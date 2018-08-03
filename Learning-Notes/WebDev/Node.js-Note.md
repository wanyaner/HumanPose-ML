# Node.js - Dynamic Websites – Server-side programming

## 1 Module

这种模块加载机制被称为**CommonJS规范**。在这个规范下，每个.js文件都是一个模块，它们内部各自使用的变量名和函数名都互不冲突，例如，`hello.js`和`main.js`都申明了全局变量`var s = 'xxx'`，但互不影响。

```
var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;
```

一个模块想要对外暴露变量（函数也是变量），可以用`module.exports = variable;`，一个模块要引用其他模块暴露的变量，用`var ref = require('module_name')`;就拿到了引用模块的变量。

```
// 引入hello模块:
var greet = require('./hello');

var s = 'Michael';

greet(s); // Hello, Michael!
```

在最基础的层次，每当一个浏览器需要一个网络服务器上的托管文件时，浏览器会通过 HTTP 请求这个文件。当这个请求到达了正确的网络服务器（硬件），这个 HTTP 服务器（软件）返回所请求的文档，同样通过 HTTP。

![server](https://mdn.mozillademos.org/files/8659/web-server.svg)