function jennyHomework(callback){
    console.log(`Jenny Started assignments`);
    console.log(`Her assignments solveing is in progress`);
    console.log(`Jennys assignment is complited`);
    callback();
}

let elonCopyHomework = function () {
    console.log(`thank you jenny of calling me back`);
    console.log(`elon started copy assignment`);
    console.log(`elon copied all assignment`);
}

jennyHomework(elonCopyHomework);
console.log(`=============================================`);
setTimeout(function () {
    console.log(`callback`);
},6000);