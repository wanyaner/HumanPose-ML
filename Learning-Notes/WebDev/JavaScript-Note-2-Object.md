# JavaScript Learning Note - Object

## 1 Standard Object

### Rules

- 不要使用`new Number()`、`new Boolean()`、`new String()`创建包装对象；

- 用`parseInt()`或`parseFloat()`来转换任意类型到`number`；

- 用`String()`来转换任意类型到`string`，或者直接调用某个对象的`toString()`方法；

- 通常不必把任意类型转换为`boolean`再判断，因为可以直接写`if (myVar) {...}`；

- `typeof`操作符可以判断出`number、boolean、string、function`和`undefined`；

- 判断`Array`要使用`Array.isArray(arr)`；

- 判断`null`请使用`myVar === null`；

- 判断某个全局变量是否存在用`typeof window.myVar === 'undefined'`；

- 函数内部判断某个变量是否存在用`typeof myVar === 'undefined'`。

### Date

```
var now = new Date();
now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
now.getFullYear(); // 2015, 年份
now.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月
now.getDate(); // 24, 表示24号
now.getDay(); // 3, 表示星期三
now.getHours(); // 19, 24小时制
now.getMinutes(); // 49, 分钟
now.getSeconds(); // 22, 秒
now.getMilliseconds(); // 875, 毫秒数
now.getTime(); // 1435146562875, 以number形式表示的时间戳

var d = new Date(2015, 5, 19, 20, 15, 30, 123);
d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)
```

! 坑爹缺陷 -  **JavaScript的Date对象月份值从0开始，0=1月，1=2月，2=3月，……，11=12月。**

```
var d = new Date(1435146562875);
d.toLocaleString(); // '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
d.toUTCString(); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时
```

### Regular Expression 正则表达式

`[a-zA-Z\_\$][0-9a-zA-Z\_\$]{0, 19}` 精确地限制了变量的长度是1-20个字符。

`^`表示行的开头，`^\d`表示必须以数字开头；`$` end, `\d$` 

	var re1 = /ABC\-001/;
	var re2 = new RegExp('ABC\\-001');
	
	var re = /^\d{3}\-\d{3,8}$/;
	re.test('010-12345'); // true
	re.test('010-1234x'); // false
	
	'a b   c'.split(/\s+/); // ['a', 'b', 'c'] 
	
	var re = /^(\d{3})-(\d{3,8})$/; 
	re.exec('010-12345'); // ['010-12345', '010', '12345'] // 分组
	
	var r1 = /test/g; // g - 全局匹配
	
### JSON

JSON是JavaScript Object Notation的缩写，它是一种数据交换格式。

把任何JavaScript对象变成JSON，就是把这个对象序列化`JSON.stringify()`成一个JSON格式的字符串，这样才能够通过网络传递给其他计算机。

	var s = JSON.stringify(person);
	JSON.stringify(xiaoming, ['name', 'skills'], '  '); // choose attrabution to an array

拿到一个JSON格式的字符串，我们直接用`JSON.parse()`把它变成一个JavaScript对象：

	JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
	JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
	
用浏览器访问Yahoo的天气API，查看返回的JSON数据，然后返回城市、气温预报等信息：

```
var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json'; // 从远程地址获取JSON:
$.getJSON(url, function (data) {

    // 获取结果:
    var city = data.query.results.channel.location.city;
    var forecast = data.query.results.channel.item.forecast;
    var result = {
        city: city,
        forecast: forecast
    };
    alert(JSON.stringify(result, null, '  '));
```
---

## 2 Object-Oriented Programming

类和实例是大多数面向对象编程语言的基本概念。

不过，JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。

	person.__proto__ = Student;
	
可用`Object.create()`来创建对象：

```
// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
xiaoming.__proto__ === Student; // true
```

### Constructor

```
function Student(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!
```

`new` 使普通function变为constructor，新创建的`xiaoming`的原型链是

	xiaoming ----> Student.prototype ----> Object.prototype ----> null

用`new Student()`创建的对象还从原型上获得了一个`constructor`属性，它指向函数`Student本身

![relationship](https://cdn.liaoxuefeng.com/cdn/files/attachments/00143529922671163eebb527bc14547ac11363bf186557d000/l)

最后，我们还可以编写一个`createStudent()`函数，在内部封装所有的`new`操作。一个常用的编程模式像这样：

```
function Student(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {})
}
```

这个`createStudent()`函数有几个巨大的优点：一是不需要new来调用，二是参数非常灵活，可以不传，也可以这么传：

```
var xiaoming = createStudent({
    name: '小明'
});

xiaoming.grade; // 1
```
---

### Inherit

现在，我们要基于`Student`扩展出`PrimaryStudent`，可以先定义出PrimaryStudent：
```
function PrimaryStudent(props) {
    // 调用Student构造函数，绑定this变量:
    Student.call(this, props);
    this.grade = props.grade || 1;
}
```

但是，调用了`Student`构造函数不等于继承了Student，PrimaryStudent创建的对象的原型是：

	new PrimaryStudent() ----> PrimaryStudent.prototype ----> Object.prototype ----> null
必须想办法把原型链修改为：

	new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null
这样，原型链对了，继承关系就对了。

我们必须借助一个中间对象来实现正确的原型链，这个中间对象的原型要指向`Student.prototype`。中间对象可以用一个空函数F来实现：

```
// PrimaryStudent构造函数:
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 空函数F:
function F() {
}

// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
xiaoming.name; // '小明'
xiaoming.grade; // 2

// 验证原型:
xiaoming.__proto__ === PrimaryStudent.prototype; // true
xiaoming.__proto__.__proto__ === Student.prototype; // true

// 验证继承关系:
xiaoming instanceof PrimaryStudent; // true
xiaoming instanceof Student; // true
```

**用过桥函数`F(){}`主要是为了清空构造函数里的属性，如果直接`PrimaryStudent.prototype = new Student()`, `PrimaryStudent`的原型上就会包含一些不必要的原`Student`构造函数上的属性。**

用一张图来表示新的原型链：
![rel](https://cdn.liaoxuefeng.com/cdn/files/attachments/001439872160923ca15925ec79f4692a98404ddb2ed5503000/l)

如果把继承这个动作用一个`inherits()`函数封装起来，还可以隐藏F的定义，并简化代码：

```
function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
```

这个`inherits()`函数可以复用：

```
function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

// 绑定其他方法到PrimaryStudent原型:
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};
```

**小结**

JavaScript的原型继承实现方式就是：

- 定义新的构造函数，并在内部用`call()`调用希望“继承”的构造函数，并绑定`this`；

- 借助`中间函数F`实现原型链继承，最好通过封装的`inherits`函数完成；

- 继续在新的构造函数的原型上定义新方法。

---

### Class() Inherit

新的关键字`class`从ES6开始正式被引入到JavaScript中。class的目的就是让定义类更简单。

如果用新的class关键字来编写Student，可以这样写：

```
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}
```

现在，原型继承的中间对象，原型对象的构造函数等等都不需要考虑了，直接通过`extends`来实现：

```
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}
```

