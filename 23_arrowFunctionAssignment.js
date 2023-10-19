console.log(`----> step 1 <----`);
const arrowFun = () =>{
        console.log(`Good Morning, Today is Wednesday`);
}
arrowFun();

console.log(`----> step 2 <----`);
const multi = (a,b,c=1)=>{
    let result = a*b*c;
    return result;
}
const result=multi(5,5,2);
console.log(`multiplication of 5,5 & 2 is :- ${result}`);
const result1=multi(10,4);
console.log(`multiplication of 10,4 & 1 (1 is default value) is :- ${result1}`);

console.log(`----> step 3 <----`);
const addition = (d,e,f,g,h)=>{
    let result = d+e+f+g+h;
    return result;
}
let resultAdd = addition(100,100,200,349,756);
console.log(`Addition of five (100, 100, 200, 349, 756) values is :- ${resultAdd}`);
console.log(`------------------`);

const resultAddString=addition("I am ","learning ","ES6 ","features ","in depth");
console.log(`Addition of five ("I am ","learning ","ES6 ","features ","in depth") values is :- ${resultAddString}`);