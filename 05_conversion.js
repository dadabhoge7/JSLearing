var n1="20";
var n2=20;
console.log(n1==n2);//implicit conversion
console.log(n1, typeof n1)
n1=+n1;//explicit conversion
console.log(n1, typeof n1)

console.log("4"-true);
console.log("4"-null);


console.log(`=========Explicit conversion===========`);
// string to number
// 1. using + operator
// 2. number

var isMarried=true;
var result= Number(isMarried);
console.log(result,typeof result);

console.log(`========= conversion===========`);
var n4=30;
var result = String(n4);
console.log(result, typeof result);
console.log(`========= conversion===========`);

var isMarried=" ";
var result= Number(isMarried);
console.log(result,typeof result);