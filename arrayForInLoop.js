console.log(`==========For In Loop==== traverse the array using for in loop========`);

let array = [11,22,33,44,55,66,77,88,99];
console.log(`MyArray : ${array}`);

for (const index in array) {
  const Element = array[index];
  console.log(`Index : ${index} , Value : ${Element}`);
}

console.log(`=======================Traverse the array using for loop===============================`);
const fruits = ["Apple", "Mango", "Banana", "Orange"];
for (let index = 0; index < fruits.length-1; index++) {
    const element = fruits[index];
    console.log(`Index : ${index} , fruits : ${element} `);
}

console.log(`====================Traverse the array using for in loop================================`);
for (const index in fruits) {
   const element = fruits[index];
   console.log(`Index : ${index} , fruits : ${element}`);
}