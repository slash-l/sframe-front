// main.js 
// 模块加载顺序：
// 	1. 从文件模块缓存中加载
//	2. 从原生模块加载
//	3. 从文件加载，加载完成后放入缓存中

var Hello = require('./hello'); 
hello = new Hello(); 
hello.setName('mumu'); 
hello.sayHello(); 

