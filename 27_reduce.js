// find avg value of array

const array1 = [2,3,2,7,11];
console.log(`MyArray : ${array1}`);
console.log(`//find the sum of array by for of method`);
let sum = 0;
for (const element of array1) {
    sum = sum + element;
}
console.log(`Sum : ${sum}`);
console.log(`Avg of Sum : ${sum/array1.length}`);

console.log(`//find the sum of array by reduce method`);
const sum1 = array1.reduce((runningTotal, value)=>{
return runningTotal + value;
},0);
console.log(`Sum : ${sum1}`);
console.log(`Avg of Sum : ${sum1/array1.length}`);

console.log(`// nested array`);
const array2 = [[1,2,3],[4,5,6],[2,7,11]];
console.log(`MyArray : ${array2}`);

const arrayNum = array2.flatMap(element => element);
console.log(arrayNum);

const sumOfArray2 = arrayNum.reduce((runningTotal,value)=>{
return runningTotal + value;
},0);
console.log(`sum of array2 : ${sumOfArray2}`);
console.log(`Avg of array2 : ${sumOfArray2/arrayNum.length}`);



