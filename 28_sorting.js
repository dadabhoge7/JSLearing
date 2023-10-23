const friendName = ["jenny", 'john', "jack", 'elon', "bill"];
console.log(`MyArray : ${friendName}`);

console.log(`Assending order`);
const sortArray = friendName.sort();
console.log(sortArray);

console.log(`Reverse of Array`);
const reverse = sortArray.reverse();
console.log(reverse);

console.log(`sort the array of number`);

const arrayNum = [29,15,31,111,27,6];

const arrayNumber = arrayNum.sort();
console.log(`Assending array number : ${arrayNumber}`);

const arrayNumberAssending = arrayNum.sort((a,b) => {
return a>b ? 1 : -1;
});
console.log(`Assending arrayNumberAssending number : ${arrayNumberAssending}`);

const arrayNumber2 = arrayNum.sort((a,b) => {
    
    return a>b ? -1 : 1;
});
console.log(`reverse array number : ${arrayNumber2}`);

console.log(`Find smallest number in array : ${arrayNumberAssending[arrayNumberAssending.length-1]}`);
console.log(`Find Greatest number in array : ${arrayNumberAssending[0]}`);






