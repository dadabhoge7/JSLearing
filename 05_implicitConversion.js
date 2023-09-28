console.log(`=========ImplicitConversion============`);
//  numeric string used with + gives string type
console.log(`==> numeric string used with + gives string type <==`);
var result='2'+2;
console.log(`'2'+ 2 : ${result}`);
var result='2'+true;
console.log(`'2'+ true : ${result}`);
var result='2'+ undefined;
console.log(`'2'+ undefined : ${result}`);
var result='2'+ null;
console.log(`'2'+ null : ${result}`);
// if boolean is used , true is 1 &false is 0
console.log(`=> if boolean is used , true is 1 & false is 0 <=`);
var result='5'- true;
console.log(`'5'- true : ${result}`);
var result='5'+ true;
console.log(`'5'+ true : ${result}`);
var result='5'- false;
console.log(`'5'- false : ${result}`);
// numeric string used with -, /, * result number type
console.log(`=> numeric string used with -, /, * result number type <=`);
var result= "5"-"4";
console.log(`"5"-"4" : ${result}`);
var result= "5"- 4;
console.log(`"5"- 4 : ${result}`);
var result= "5"* 4;
console.log(`"5"* 4 : ${result}`);
var result= "5"/ 4;
console.log(`"5"/ 4 : ${result}`);
// Arithmetic operation of undefined with number, boolean null gives NaN
console.log(`==> Arithmetic operation of undefined with number, boolean null gives NaN <==`);
var result= 5+undefined
console.log(`5 + undefined : ${result}`);
var result= 5-undefined
console.log(`5 - undefined : ${result}`);
var result= true+undefined
console.log(`true + undefined : ${result}`);
var result= true-undefined
console.log(`true - undefined : ${result}`);
var result= false+undefined
console.log(`false + undefined : ${result}`);
var result= false-undefined
console.log(`false - undefined : ${result}`);