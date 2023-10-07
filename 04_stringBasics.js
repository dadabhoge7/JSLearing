var greet="Good Morning";

console.log("================charAt() Method========================");
console.log("Character at index 0 is : ",greet.charAt(0));

console.log("================Length Property========================");
console.log("Length of string is : ",greet.length); 

console.log("Last Last Character :",greet.charAt(greet.length-1));

console.log("Third Last Character :",greet.charAt(greet.length-3));

console.log("================IndexOf Method========================");
var indexOfM= greet.indexOf('M');
console.log("Index Of M is",indexOfM);
var indexOfnin= greet.indexOf('nin');
console.log("Index Of nin is",indexOfnin);
var indexOfD= greet.indexOf('D');
console.log("Index Of D is",indexOfD);
var indexOfz= greet.indexOf('z');
console.log("Index Of z is",indexOfz);
var indexOfo= greet.indexOf('o');
console.log("Index Of o is",indexOfo);

console.log("================LastIndexOf Method========================");
var lastIndexOfo= greet.lastIndexOf('o');
console.log("Index Of o is",lastIndexOfo);

console.log("================replace Method========================");
var result=greet.replace("Morning","Afternoon")
console.log(result);
var result=greet.replace(" ","-")
console.log(result);

console.log("================toUpperCase & toLowerCase Method========================");
var result=greet.toUpperCase("Morning","Afternoon") 
console.log(result);
var result=greet.toLowerCase("Morning","Afternoon")
console.log(result);

console.log("================trim() Method========================");

var str=("   Good Morning  ");
var beforeLengthTrim= str.length;
console.log("Before trim length : ",beforeLengthTrim);
var result=str.trim();
var afterLengthTrim=result.length;
console.log("After trim length : ",afterLengthTrim);
console.log("Removed lenght : ",beforeLengthTrim-afterLengthTrim);

var city="My City is Pune        ";
console.log("Before trim City : ",city.length);
var afterTrim=city.trimEnd();
console.log("After trim City : ",afterTrim.length);
// Using string tamplate
console.log(`After trim city : ${afterTrim.length}`);

console.log("================concat() Method========================");
var str1="Dada";
var str2="Bhoge";
console.log(str1.concat(str2));

console.log("================includes() Method========================");
var result=greet.includes('Morning');
console.log("Is Morning word available : ",result);
var result=greet.includes('morning');
console.log("Is morning word available : ",result);

console.log("================search() Method========================");
var result=greet.search('or');
console.log(result);
var result=greet.search('oo');
console.log(result);

console.log("================slice() Method========================");
var treet="Hello, Good Morning";
console.log(treet.slice(8));
console.log(treet.slice(8, 14));

console.log("================split() Method========================");
var treet="Hello, Good Morning";
console.log(treet.split(" "));

// WAP to count the total number of words
var str= "i am angular developer";
var words=str.split(" ");
console.log(words);
console.log(typeof words);
// Using string tamplate
console.log(`${typeof words}`);
console.log('Total words is : ',words.length)
// Using string tamplate
console.log(`Total words is : ${words.length}`);

// string template  `bactich`
console.log(`i am "UI" developer`);
var a=10;
var b=20;
var c=a+b;
console.log(` Addition of ${a} and ${b} is : ${c}`);