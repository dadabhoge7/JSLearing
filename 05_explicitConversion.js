console.log(`====> ExplicitConversion <====`);
console.log(`==> String to number <==`);
var num='100';
var result = Number(num);
console.log(`String ('100') to conversion Number --> Result : ${result}(Type of : ${typeof result})`);
var num='100e-1';
var result = Number(num);
console.log(`String ('100e-1') to conversion Number --> Result : ${result}(Type of : ${typeof result})`);
console.log(`==> Boolean to number <==`);
var num=true;
var result = Number(num);
console.log(`Boolean (true) to conversion Number --> Result : ${result}(Type of : ${typeof result})`);
var num=false;
var result = Number(num);
console.log(`Boolean (false ) to conversion Number --> Result : ${result}(Type of : ${typeof result})`);