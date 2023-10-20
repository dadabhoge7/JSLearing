const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,9];
console.log(`MyArray : ${arrayNumbers}`);
console.log(`Step 01 :- add 10 into each element`);
const add10Each = arrayNumbers.map((currentValue)=>{
return currentValue + 10;
});
console.log(add10Each);

console.log(`Step 02 :- cube the each array element`);
const cubeValue = arrayNumbers.map((currentValue)=>{
return currentValue * currentValue * currentValue;
});
console.log(cubeValue);

console.log(`Step 03 :- Add the index value into each array element`);
const addIndex = arrayNumbers.map((currentValue,index)=>{
return currentValue + index;
});
console.log(addIndex);












