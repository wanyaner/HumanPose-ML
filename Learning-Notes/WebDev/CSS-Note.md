# CSS Learning Note

层叠样式表（Cascading Style Sheet）是你用来为网页添加样式的代码。

就像 HTML，CSS 也不是真正的编程语言。它也不是标记语言——是样式表语言。


如创建`style.css` 使文本变红

![css](https://mdn.mozillademos.org/files/9461/css-declaration-small.png)	

插入`index.html`的 `<head>`中

	<link href="styles/style.css" rel="stylesheet" type="text/css">
	
CSS 布局主要就是基于盒模型的。每个占据你页面空间的块都有这样的属性：

- 内边距（padding），围绕着内容的空间（比如围绕段落的空间）
- 边框（border），紧接着内边距的实体线段
- 外边距（margin），围绕元素外部的空间

![box](https://mdn.mozillademos.org/files/9443/box-model.png)


```
body {
  width: 600px;
  margin: 0 auto;
  background-color: #FF9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```





