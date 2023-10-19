const arrayNum = [10, 20 ,30, 40, 50, 15 ];

arrayNum.forEach( function( currentValue, index, array ){
    console.log(`Current Value: ${currentValue}, Index: ${index}, arrayNum`, array);
} )

arrayNum.forEach( ( currentValue, index, array  ) => {
    console.log(`Current Value: ${currentValue}, Index: ${index}, arrayNum`, array);
} );

console.log(` =============== `);
arrayNum.forEach( (currentValue )=>{
    console.log(currentValue);
} );


const array = [11,12,11,22,45,22];
console.log(array);

console.log(`--------Set traverse using forEach();------------`);
const setOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(12);
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(45);
setOfRollNum.add(22);
console.log(setOfRollNum);
setOfRollNum.forEach((currentValue)=>{
console.log(currentValue);
});

console.log(`--------Map traverse using forEach()------------`);
const map = new Map();
map.set(11, "Dada");
map.set(22, "Bill");
map.set(33, "Elon");
map.set(44, "Stew");
map.set(55, "Jenny");
console.log(map);
map.forEach((value, key)=>{
console.log(key, value);
});
























