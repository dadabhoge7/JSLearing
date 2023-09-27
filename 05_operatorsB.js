console.log(`===========TASK 01==============`);
function greaterNumber(a, b) {
    console.log(`Greater number ${a} and ${b} is : ${ a>b ? a:b}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log(`===========TASK 02==============`);
function isEvenOddNumber(c) {
    var evenOrOdd= c%2==0 ? "Even":"odd";
    console.log(`Given Number ${c} is Even or Odd :- ${evenOrOdd}`);
}
isEvenOddNumber(11);
isEvenOddNumber(20);

console.log(`===========TASK 03==============`);

function wordLength(str) {
    var wordlength= str.length;
    var wordEvenOdd= wordlength%2==0 ? "Even":"Odd";
    console.log(`Word "${str}" Length is : ${wordlength} & Word length Even or Odd : ${wordEvenOdd}`);
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");

