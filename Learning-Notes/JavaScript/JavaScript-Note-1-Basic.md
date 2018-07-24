#JavaScript Learning Note1 - Basics

## 1 General
ECMAScript - ES 6  
Visual Studio Code - Chrome - HTML  

```
<html>
<head>

  <script>
  	alert('hello, world')
  </script>
  
  //or
  
  <script src="/js/abc.js"></script>
  
</head>
<body>
	...
</body>
</html>
```

## 2 Basics

### 比较运算符

第一种是`==`比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；  
第二种是`===`比较，它不会自动转换数据类型，如果数据类型不一致，返回`false`，如果一致，再比较。   
由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用`===`比较。

	false == 0; // true  
	false === 0; // false  


`NaN`与所有其他值都不相等,唯一能判断NaN的方法是通过`isNaN()`函数    

	NaN === NaN; // false
	isNaN(NaN); // true
	
---

### Variable

变量本身类型不固定的语言称之为**动态语言**，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错，如Java是静态语言 `int a = 1;`

	var a = 123; // a的值是整数123  
	a = 'ABC'; // a变为字符串

使用var申明的变量则不是全局变量，它的范围被限制在该变量被申明的函数体内。   

`'use strict';` 在**strict模式**下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误。

JavaScript默认有一个全局对象`window`; 减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中：

	var MYAPP = {}; // 唯一的全局变量MYAPP
	
	MYAPP.foo = function () {
    	return 'foo';
	};
	
用`let`替代`var`可以申明一个块级作用域的变量：

	function foo() {
    	var sum = 0;
    	for (let i=0; i<100; i++) {
        		sum += i;
    	}
   	 i += 1; // SyntaxError
	}
`const` 定义常量  `const PI = 3.14;`
	
---
	
### String

`'I\'m \"OK\"!';`   

	`这是一个  
	多行  
	字符串`;   


要把多个字符串连接起来，可以用`+`号连接：

	var name = 'Sam';
	var age = 20;
	
	var message = 'Hello, ' + name + ', 你今年' + age + '岁了!';
	alert(message);

ES6新增了一种**模板字符串**，它会自动替换字符串中的变量：

	var message = `Hello, ${name}, 你今年${age}岁了!`;
	alert(message);

操作字符串：
	
	var s = 'Hello, world!';
	s.length; // 13
	s.toUpperCase();
	s.toLowerCase();
	s.indexOf('world'); // return 7
	s.substring(0, 5); // 从索引0开始到5（不包括5），return 'hello'
	s.substring(7); // 从索引7开始到结束，return 'world'
	
### Array

JavaScript的**数组**可以包括任意数据类型。如：

	[1, 2, 3.14, 'Hello', null, true];
	
直接给Array的length赋一个新的值会导致Array大小的变化：

	var arr = [1, 2, 3];
	arr.length; // 3
	arr.length = 6;
	arr; // arr = [1, 2, 3, undefined, undefined, undefined]
	arr.length = 2;
	arr; // arr = [1, 2]
	
如果通过索引赋值时，索引超过了范围，同样会引起Array变化：

	var arr = [1, 2, 3];
	arr[5] = 'x';
	arr; // arr = [1, 2, 3, undefined, undefined, 'x']
	
操作数组：

	var arr = [10, 20, '30', 'xyz'];
	arr.indexOf(10); // return 0
	arr.indexOf(30); // return -1
	
	var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
	arr.slice(0, 3); // just like `substring`
	var aCopy = arr.slice(); // copy all elements of arr
	
	arr.push('H', 'I'); 
	arr.pop(); // return 'I'
	
	arr.unshift('1', '2'); // add elements before 'A'
	arr.shift(); // delete '1' 
	
	arr.sort();
	arr.reverse(); 
	array.splice(2,3,"X"); // index, howmanydelete, item1, ....., itemX)
	var added = arr.concat([1, 2, 3]); // add ele then return a new array
	arr.join('-'); // 'A-B-C-1-2-3' 把当前Array的每个元素都用指定的字符串连接起来
	
for... in 历遍数组

	var a = ['A', 'B', 'C'];
	for (var i in a) {
    	console.log(i); // '0', '1', '2'
    	console.log(a[i]); // 'A', 'B', 'C'
	}
	
多维数组：

	var arr = [1, 2, 3], [400, 500, 600], '-' ];
	
---

### Object - 健值对
JavaScript的**对象**是一组由`键-值`组成的无序集合，例如：

	var person = {
   	 name: 'Bob',
   	 age: 20,
   	 tags: ['js', 'web', 'mobile'],
   	 city: 'Shanghai',
   	 hasCar: true,
   	 zipcode: null
   	 'middle-school': 'QH'
	};

	person.name; // 'Bob'
	person.zipcode; // null
	person['middle-school']; // 'QH'
	
	delete person.age;
	person.nickname = 'BB'; // add 
	
	'name' in person; // true
	person.hasOwnProperty('toString'); // false
	
---

### If... ELSE...

`if () { ... } else { ... }`

	var age = 3;
	if (age >= 18) {
    	alert('adult');
	} else if (age >= 6) {
    	alert('teenager');
	} else {
    	alert('kid');
	}
	
### if

	var x = 0;
	var i;
	for (i=1; i<=10000; i++) {
    	x = x + i;
	}
	x; // 50005000
	
break

	var x = 0;
	for (;;) { // infinate
   	 	if (x > 100) {
       	 	break; 
    	}
   	 x ++;
	}

`for ... in` 可以把一个对象的所有属性依次循环出来：

	var o = {
    	name: 'Jack',
   	 age: 20,
   	 city: 'Beijing'
	};
	for (var key in o) {
    	console.log(key); // 'name', 'age', 'city'
	}
	
### while

	var x = 0;
	var n = 99;
	while (n > 0) {
    	x = x + n;
    	n = n - 2;
	}
	x; // 2500
	
do ... while

	var n = 0;
	do {
   	 n = n + 1;
	} while (n < 100);
	n; // 100
	
	
### Map & Set

JavaScript的默认对象表示方式{}可以视为其他语言中的Map或Dictionary的数据结构，即一组键值对。Set没有重复的key。

	var m = new Map(); 
	m.set('Adam', 67); // add new key-value
	m.has('Adam'); // true
	m.get('Adam'); // 67
	m.delete('Adam'); 
	m.get('Adam'); // undefined

遍历Array可以采用下标循环，遍历Map和Set就无法使用下标。  
为了统一集合类型，ES6标准引入了新的`iterable`类型，Array、Map和Set都属于iterable类型。    

`for... of...` 遍历集合

	var a = ['A', 'B', 'C'];
	var s = new Set(['A', 'B', 'C']);
	var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
	
	for (var x of a) { // 遍历Array
    	console.log(x);
	}
	for (var x of s) { // 遍历Set
    	console.log(x);
	}
	for (var x of m) { // 遍历Map
    	console.log(x[0] + '=' + x[1]);
	}

`foreach` 遍历

	var a = ['A', 'B', 'C'];
	a.forEach(function (element) {
    	console.log(element);
	});
	
		var a = ['A', 'B', 'C'];
	a.forEach(function (element, index, array) {
   	 	console.log(element + ', index = ' + index);
	}); // return 	A, index = 0 B, index = 1 C, index = 2
	
	var s = new Set(['A', 'B', 'C']);
	s.forEach(function (element, sameElement, set) {
    	console.log(element);
	});
	
	var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
	m.forEach(function (value, key, map) {
    	console.log(value);
	});

---	
	
## 3 Function	

	function abs(x) {
   	 if (x >= 0) {
        		return x;
   	 } else {
       		 return -x;
    	}
	}
	
JavaScript还有一个免费赠送的关键字`arguments`，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。
	
	function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
	}
	
实际上arguments最常用于判断传入参数的个数：

	// foo(a[, b], c)
	// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
	function foo(a, b, c) {
    	if (arguments.length === 2) {
        		// 实际拿到的参数是a和b，c为undefined
        		c = b; // 把b赋给c
        		b = null; // b变为默认值
    	}
    	// 要把中间的参数b变为“可选”参数，通过arguments判断，然后重新调整参数并赋值
	}

ES6标准引入了`rest`参数：

	function foo(a, b, ...rest) {
    	console.log('a = ' + a);
    	console.log('b = ' + b);
    	console.log(rest);
	}

	foo(1, 2, 3, 4, 5); // return a = 1, b = 2, Array [ 3, 4, 5 ]
	
### 解构赋值 

	var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
	let [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素
	var {name, age, passport:id} = person; // 对象赋值, id = passport
	
场景

	var x=1, y=2;
	[x, y] = [y, x]; // change value
	
	var {hostname:domain, pathname:path} = location;
	
### Method

	var person = {
    	name: 'Bob',
    	birth: 1990,
    	age: function () {
       	 var y = new Date().getFullYear();
       	 return y - this.birth; // 要保证this指向正确，必须用obj.xxx()的形式调用！
    	}
	};

	person.age; // function person.age()
	person.age(); // 25 now, next year is 26
	
`this` 在外部指向全局变量是JS一大缺陷。为避免错误，用`var that = this;` 先在方法内部定义其他函数；  
或用`Apply()` 修复`getAge()`：

	function getAge() {
   	 var y = new Date().getFullYear();
    	return y - this.birth;
	}

	var person = {
    	name: 'Bob',
    	birth: 1990,
    	age: getAge
	};

	person.age(); // 25
	getAge.apply(person, []); // 25, this指向person, 参数为空
	
---

## 4 Higher-order Function

### map/reduce

	function add(x, y, f) {
    	return f(x) + f(y);
	}
	
	add(-5, 6, Math.abs);
	
`map()`
 
	function pow(x) {
    	return x * x;
	}	
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	var results = arr.map(pow); 
	
	arr.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
	
	
	function normalize(arr) {
		return arr.map(function(x){
            return x.toUpperCase().substring(0,1) + x.toLowerCase().substring(1);
        }); // 把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字

`reduce()`   
Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算:

	var arr = [1, 3, 5, 7, 9];
	arr.reduce(function (x, y) {
   	 	return x + y;
	}); // 25
	
	var arr = [1, 3, 5, 7, 9];
	arr.reduce(function (x, y) {
   		 return x * 10 + y;
	}); // 13579
	
more reference: [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map); Google AI [MapReduce](https://ai.google/research/pubs/pub62)

### filter()

和map()不同的是，`filter()`把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。

例如，在一个Array中，删掉偶数，只保留奇数：

```
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]
```

利用filter，可以巧妙地去除Array的重复元素：

	var r, arr = ['apple', 'strawberry', 'apple', 'orange', 'orange', 'strawberry'];	
    	r = arr.filter(function (element, index, self) {
    		return self.indexOf(element) === index;
	});

### sort()

- sort()方法默认把所有元素先转换为String再排序 - [10, 2] 
- 字符串根据ASCII码进行排序 - [B, a]

```
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(arr); // [1, 2, 10, 20]
```

---

### Arrow Function

	var fn = x => x * x;
	
箭头函数内部的this是词法作用域，由上下文确定。由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略。


```
// 两个参数:
(x, y) => x * x + y * y

// 无参数:
() => 3.14

// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
```

### Generator

generator和函数不同的是，generator由`function*`定义，并且，除了`return`语句，还可以用`yield`返回多次。

```
function* fib(max) { // Fibonacci
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}
```

用`f.next()` 或 `for...of` 调用。
