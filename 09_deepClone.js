let stdDada = {
    name : "Dada",
    age : 26,
    graduation : "Bachelor of Engineering"
}

let stdGanesh = {...stdDada}; //Deep clone using spread operator
stdGanesh.name = "Ganesh";
console.log(stdGanesh);
console.log(stdDada);



let stdJenny = {
    name : "Jenny",
    age : 25,
    graduation : "Bachelor of Engineering",

    mark : {
        m1 : 10,
        m2 : 20
    }
}
let stdBill = JSON.parse(JSON.stringify(stdJenny)); // we have nested object using JSON Object

stdBill.name = "Bill";

console.log(stdBill);
console.log(stdJenny);

