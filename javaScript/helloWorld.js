console.log("hello world javaScript");

var a = 1;
var b = 2;
var c = a + b;

console.log(c);

//alert("ok");

function A(){
	this.sayHehe = function(){
		console.log("hello sayHehe");
	};
}

//实例方法
A.prototype.sayHello = function(){
	console.log("hello sayHello");
}
//静态方法
A.sayHi = function(){
	console.log("hello sayHi");
}

var a = new A();
a.sayHello();
A.sayHi();

//继承类
function B(){

}
B.prototype = new A();

var b = new B();
b.sayHello();
b.sayHehe();

var myObject = {};
myObject.name = 'slash';
myObject['age'] = 11;
console.log(myObject.name + ' and ' + myObject.age);