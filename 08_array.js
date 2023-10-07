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

console.log(`===========================================`);
let arrayNumbers=[11,12,13,14,15,16];
console.log(arrayNumbers);
console.log(`=================slice() method==================`);
console.log(arrayNumbers.slice(3));
console.log(arrayNumbers.slice(1,3));

console.log(`=================splice () method==================`);
let arrayNumbers1=[11,12,13,14,15,16];
console.log(arrayNumbers1);
console.log(arrayNumbers1.splice(4));
console.log(arrayNumbers1);

console.log(`=================remove elements with index and delete count : splice () method==================`);
let arrayNumbers2=[11,12,13,14,15,16];
console.log(`Original Array : ${arrayNumbers2}`);
console.log(`Removed element : ${arrayNumbers2.splice(2,1)}`);
console.log(arrayNumbers2);

console.log(`============Insertion element in array splice()==================`);

let a = [1,2,3,4,5,6,7,8,9];
console.log(`Original array : ${a}`);
a.splice(2,0,99);
console.log(`Final Array : ${a}`);

console.log(`============Insertion multiple element in array splice()==================`);

let b=[10,20,30,40,50];
console.log(`Original Array : ${b}`);
b.splice(2, 0, 300, 200, 100);
console.log(`Final Array : ${b}`);

console.log(`============insert an element 500 at index 2 by replacing an element==================`);
let c =[1,2,3,4,5,6]
console.log(`Original array : ${c}`);
c.splice(2,2,500,600);
console.log(`Final array by replacing value: ${c}`);

console.log(`============For in loop==============`);
let d = [10,20,30,40,50,60];
for (const index in d) {
    const element = d[index];
    console.log(`Index : ${index} , d : ${element}`);
 }
console.log(`==========Array traverse in while loop=================`);
 let e = [10,20,30,40,50,60];
 console.log(`Array : ${e}`);
 let index = 0;//initialization
 while (index<e.length) {
    console.log(e[index]);
    index++;
 }

