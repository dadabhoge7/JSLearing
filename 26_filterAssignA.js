const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,9];
console.log(`MyArray : ${arrayNumbers}`);

console.log(`Step 01 : Find the Number greater than 50`);
const greaterValue = arrayNumbers.filter((currentValue)=>{
return currentValue > 50;
});
console.log(greaterValue);

console.log(`Step 02 : Find the even Number`);
const evenNum = arrayNumbers.filter((currentValue)=>{
    return currentValue%2==0;
});
console.log(evenNum);

console.log(`Step 03 : Find the odd Number`);
const oddNum = arrayNumbers.filter((currentValue)=>{
return currentValue%2!==0;
});
console.log(oddNum);

console.log(`Step 04 : Find the Number which are multiple of 5`);
const mulOf5 = arrayNumbers.filter((currentValue)=>{
return currentValue%5==0;
});
console.log(mulOf5);

console.log(`Step 05 : Find the Number between 20 and 50`);
const betNo = arrayNumbers.filter((currentValue)=>{
return currentValue > 20 && currentValue < 50;
});
console.log(betNo);








