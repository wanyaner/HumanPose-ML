# HTML Learning Note 

## 1 General

超文本标记语言  (Hypertext Markup Language )  是一种用来结构化 Web 网页及其内容的标记语言。

HTML 并不是编程语言，它是一种用于定义内容结构的标记语言。HTML 由一系列的元素（elements）所组成，这些元素可以用来封装不同部分的内容，使其以某种方式呈现或者工作。 闭合标签（ tags）可以使得一个文字或者一张图片超链接到其他地方，可以使得文字变为斜体，可让文字变大或者变小等等。 

## 2 Element
	
`indec.html` contains:

```
<!DOCTYPE html>  	
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image">
  </body>
</html>
```

`<head>` 元素可以包含你想添加的所有内容，但是不会被用户所看到。这里面包括像想被搜索引擎搜索到的关键字（keywords）和页面描述，CSS 样式表和字符编码声明等。

`<body>` 元素包含了你想让用户在访问你的页面时看到的内容，不管是文本，图像，视频，游戏，可播放的音轨或其他内容。


 `<h1>`–`<h6>` 六个级别的标题；

 `<p>` 段落；

	<p class="cat"> content</p> 
	// paragraph element
	// class - attribute name
	
	<p class="cat"> content is <strong>wrong</strong>.</p>
	// strong - 强调，嵌套

`<img>` 
	
	<img src="images/firefox-icon.png" alt="My test image"> 
	// empty element, no closing tag
	// src (source) - 图像文件路径  
	// alt (alternative) - 图像的描述内容
	
`<ul>` unordered lists 无序列表；
`<ol>` ordered lists 有序列表；
`<li>` list item；

```
<p>At Mozilla, we’re a global community of</p>
    
<ul> 
  <li>technologists</li>
  <li>thinkers</li>
  <li>builders</li>
</ul>

<p>working together ... </p>
```

`<a>` anchor 锚，链接；
	
	<a href="https://www.google.com">Moz Search</a>
	// href - hypertext reference （超文本引用）
