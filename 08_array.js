console.log(`=================Array======================`);
// let array=10,20,30,40;   not alllow
let array = [10, 20, 30 , "Pune", true, undefined];
console.log(array);
console.log(`Type Of Array : ${typeof array}`);

console.log(`Total elements in  array : ${array.length}`);
console.log(`==============Accessing or updating array element======================`);
console.log(`element of 4th index : ${array[4]}`);
console.log(`Element of last index : ${array[array.length-1]}`);
console.log(`Element of last index : ${array[array.length-1]}`);
console.log(`Element of 3rd last index : ${array[array.length-3]}`);

console.log(`==========Updating array element=================`);
array[4] = "Dada";
console.log(`array Element of 4th index : ${array[4]} `);

console.log(`=================IndexOf()======================`);
console.log(array.indexOf(30));

console.log(`=================traversing an array======================`);
let arrayNum =[10,20,30,40,50,60,700,80];
console.log(`Index of 2 : ${arrayNum[2]}`);
console.log(`Index of 5 : ${arrayNum[5]}`);
console.log(`Traversing of Array :--`);
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element);
    
}

console.log(`=================traversing an array in reverse order======================`);
for (let index = arrayNum.length-1; index >= 0; index--) {
    const element = arrayNum[index];
    console.log(element);
}


console.log(`=================Even positioned value======================`);

for (let index = arrayNum.length-1; index >=0 ; index--) {
    if (index%2==0) {
        const element = arrayNum[index];
        console.log(element);
    }
}



console.log(`=====================Array Methods=====================================`);
let arrayNums = [11,22,33,44,55,66];
console.log(`MyArray : ${arrayNums}`);

console.log(`=====================Adding element in last push() Method=====================================`);
arrayNums.push(77);
console.log(`MyArray : ${arrayNums}`);
console.log(`=====================AddRemoving element in last pop() Method=====================================`);
arrayNums.pop();
console.log(`MyArray : ${arrayNums}`);

console.log(`=====================Adding element in First unshift() Method=====================================`);
arrayNums.unshift(99);
console.log(arrayNums);

console.log(`=====================AddRemoving element in first Shift() Method=====================================`);
arrayNums.shift();
console.log(arrayNums);
