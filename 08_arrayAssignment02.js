const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`ArrayNumber : [ ${arrayNumber} ]`);
console.log(`Total Element Available : ${arrayNumber.length}`);
console.log(`Log first and last element : ${arrayNumber[0]} and ${arrayNumber[arrayNumber.length-1]}`);
console.log(`Log the Third Last element : ${arrayNumber[arrayNumber.length-3]}`);
console.log(`=====Find Even Number======`);
for (const element of arrayNumber) {
    const evenNumber1 = element%2==0;
    console.log(`Even numbers ${element} : ${evenNumber1}`);
}
console.log(`=====Find odd Number======`);
for (const element of arrayNumber) {
    const evenNumber2 = element%2!==0;
    console.log(`odd numbers ${element} : ${evenNumber2}`);
}

const ifAvailable = arrayNumber.includes(115);
console.log(`If "115" available : ${ifAvailable}`);

const ifAvailable1 = arrayNumber.includes(23);
console.log(`If "23" available : ${ifAvailable1}`);

console.log(`Before Insertion : ${arrayNumber} `);
const insertNo = arrayNumber.splice(3,0,55,56);
console.log(`Insert no 55,56 Before index 3 : ${arrayNumber}`);

const deleteNo = arrayNumber.splice(4);
console.log(`Delete number from Index 4 : ${arrayNumber}`);
