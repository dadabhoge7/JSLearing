 const array = [11,12,11,22,45,22];
console.log(array);


const setOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(12);
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(45);
setOfRollNum.add(22);
console.log(setOfRollNum);

console.log(`Total Element in set is : ${setOfRollNum.size}`);
// setOfRollNum.clear();
setOfRollNum.delete(22);
console.log(setOfRollNum);
console.log(setOfRollNum.has(45));
console.log(typeof setOfRollNum);
for (const Element of setOfRollNum) {
    console.log(Element);
}

// How to remove the duplicate element from array
var arrayNumber = [22, 11, 44, 22, 77, 11];
const setNum = new Set(arrayNumber);
console.log(setNum);

arrayNumber = [...new Set(arrayNumber)];
console.log(arrayNumber);

















    