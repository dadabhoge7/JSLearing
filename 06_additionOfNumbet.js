//  1 to 10
var sum = 1;
for (let index = 0; index <= 10; index++) {
    console.log(index );
    sum = sum + index;
}
console.log(`Addition of 1 to 10 is : ${sum}`);

// Sum of first 10 even numbers

// revers the string

var str = "Developer";
var reverseStr = "";
for (let index = str.length-1; index <= 0; index--) {
    reverseStr = reverseStr + str.charAt(index);
    console.log(`reverseString is : ${reverseStr}`);
}

// count the vowels
var str = "I am UI developer";
var count = 0;
for (let index = 0; index < str.length-1; index++) {
var char = str.charAt(index);
if ( char == 'a' || char =='e' || char =='i' || char=='o' || char == 'u') {
    count = count + 1;
}    
}
console.log(`Total count of vowel : ${count}`);