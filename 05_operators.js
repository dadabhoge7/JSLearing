console.log("========== Arithmetic Operator ==========");
//  - + * %
var a=10;
var b=2;
c=a*b;
console.log(`a and b multiplication : ${c}`);
console.log(`exponential result is ; ${a**3}`);
console.log(`devison : ${10/3}`);
console.log(`divison a and b  : ${a/b}`);
console.log(`reminder a and b  : ${a%b}`);
console.log(`modulus a and b  : ${10%2}`);
console.log(`modulus a and b  : ${10%3}`);
console.log(`modulus a and b  : ${10%1}`);
console.log(`modulus a and b  : ${10%4}`);
console.log(`modulus a and b  : ${10%5}`);
console.log(`modulus a and b  : ${10%6}`);
console.log(`modulus a and b  : ${100%7}`);

console.log("========== Unary Operator ==========");
var num1=10;
 var result=num1+1;
// var result=num1++;
// var result=1+num1;
// var result=++num1;
console.log(result);

console.log("========== assignment Operator ==========");
var num3=5;
var num4=num3;
// compound addition
num3+=3; //num4=num4+3
console.log(`Result of compound addition is : ${num3}`);

console.log("========== comparison  Operator ==========");
var str1="focus";
var str2="locus";
var result = str1==str2;
console.log(`Result of comparison : ${result}`);
console.log(typeof result);

var result = str1===str2;
console.log(`Result of comparison : ${result}`);
console.log(typeof result);

var num1=10;
var num2="10";
var result = num1==num2;
console.log(`Result of comparison : ${result}`);
console.log(typeof result);
// strict equal
var result = str1===str2;
console.log(`Result of comparison : ${result}`);
console.log(typeof result);

var num3=40;
var result = num1!=num3;
console.log(`Not equal operator : ${result}`);

var result = num1>num3;
console.log(`grater operator : ${result}`);

var result = num1>=num3;
console.log(`grater than equal operator : ${result}`);

var result = num1<num3;
console.log(`less than operator : ${result}`);

var result = num1<=num3;
console.log(`less than equal equal operator : ${result}`);

console.log("========== Logical  Operator ==========");
// AND &&
// OR ||
// NOT !

var num=15;
num%2==0;


console.log(`reminder/Modulus :${12%7}`);