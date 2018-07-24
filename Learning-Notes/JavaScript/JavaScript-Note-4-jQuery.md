# JavaScript learning note - jQuery

## About jQuery

jQuery - JS 中最流行的库。

	<html> 
	<head> 
		<script src="//code.jquery.com/jquery-1.11.3.min.js"></script> 
		...
	</head>
	
优势：

- 消除浏览器差异：你不需要自己写冗长的代码来针对不同的浏览器来绑定事件，编写AJAX等代码；

- 简洁的操作DOM的方法：写$('#test')肯定比document.getElementById('test')来得简洁；

- 轻松实现动画、修改CSS等各种操作。

jQuery把所有功能全部封装在一个全局变量`jQuery`中，`$`也是一个合法的变量名，它是变量jQuery的别名：

```
window.jQuery; // jQuery(selector, context)
window.$; // jQuery(selector, context)
$ === jQuery; // true
typeof($); // 'function'
```

