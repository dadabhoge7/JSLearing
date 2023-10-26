const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`MyArray : ${array_numbers}`);

console.log(`Step 01. Find sum of All number`);
const sum = array_numbers.reduce((runningTotal, value)=>{
return runningTotal + value
}, 0);
console.log(`sum of arrayNumber : ${sum}`);

console.log(`Step 02. Find the number multiple on 5 and sum`);
const findValue = array_numbers.filter((currentValue)=>{
return currentValue%5 == 0;
});
console.log(`number multiple on five : ${findValue}`);
const findValueSum = findValue.reduce((runningTotal,value)=>{
return runningTotal + value ;
},0);
console.log(`sum of value : ${findValueSum}`);

