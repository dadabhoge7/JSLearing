const person = {
name : "Elon",
age : 25
}

function show(greet) {
console.log(`Inner show function`);
console.log(greet);
console.log(this.name, this.age);
}
console.log(`--------// call();--------`);
show.call(person, 'Hii....Good Morning');


console.log(`--------------// apply();-----------`);
function details(kidName, wifeName){
    console.log(this.name, this.age);
console.log(kidName, wifeName);
}
details.apply(person, ['X','Jenny']);




console.log(`--------------// bind();-----------`);
const stew = {
    name : "stew",
    age : 24,
    companyName : 'Apple'
    }
function productDetails(iPhone, laptop) {
        console.log(`Inner product function`);
        console.log(this.name, this.companyName);
        console.log(iPhone, laptop);
    }

    const newFunction = productDetails.bind(stew);
newFunction('IPhone11', 'MacBookM2');




