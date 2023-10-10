let person = {
name : "Dada",
age : 22,
city : "Pune"
}

const key = Object.keys(person);
console.log(key);

const values = Object.values(person);
console.log(values);

console.log(`Nested Array [[],[],[]]`);
const entry = Object.entries(person);
console.log(entry);
for (const element of entry) {
    console.log(  element[0], element[1]);
}

console.log(`Traversing of an object`);
for (const key in person) {
     console.log(key,person[key]);   
    }

    const isAvailable = 'name' in person ;
    console.log(isAvailable);
    console.log('pin' in person); 


let personJenny = {
name : "Jenny",
age : 27,
country : "USA"
}
personJenny.age=25;
console.log(personJenny);

// personJenny = {};   -->not allow
// personJenny=person; --> not allow

Object.freeze(personJenny);
personJenny.name="Dada";
console.log(personJenny);
console.log(`After Deep clone`);
let personJennyClone = Object.assign({},personJenny)
console.log(personJennyClone);


console.log(`Merge/concat the object`);

let stew = {
    name : "Dada",
    surname : "Bhoge"
}
let address = {
    pin : 413251,
    state : "Maharastra"
}
console.log(`Before merge`);
console.log(stew);
Object.assign(stew, address);
console.log(`After merge`);
console.log(stew);
console.table(stew);






