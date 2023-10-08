// Object creation using object literals
let person = {
    name : "Dada",
    age : 26,
    isMarried : false,
    show : function(){
        console.log(`Hiii, I am Dada`);
    }
}
console.log(typeof person);
console.log(person);

//property access

// 1. Dot notation
console.log(`// 1. Dot notation`);
let personName = person.name;
console.log(`Person Name is : ${personName}`);
console.log(`Person Age is : ${person.age}`);

// 2. [] Notation
console.log(`// 2. [] notation`);
let nameOfPerson = person["name"];
console.log(`Person Name is : ${nameOfPerson}`);
console.log(`Person Age is : ${person["age"]}`);

// Add property in object
console.log(`// Add property in object`);
person.city = "Pune";
console.log(person);
console.table(person);

// Update property in object
console.log(`// Update property in object`);
person.age=20;
console.table(person);

// delete the property in object
console.log(`// delete the property in object`);
delete person.age;
console.table(person);

// Empty object
console.log(`// Empty object`);
    person.name1="Shree";
    console.table(person);

// Adding function expression in object
console.log(`// Adding function expression in object`);

person.display = function(){
    console.log(`Hii, I am inside display function`);
}

person.display();
person.show();

console.log(person);
console.table(person);


console.log(`=================Nested Object=====================`);

const personElon = {
    name : "Elon Musk",
    age : 53,
    totalCompany : 9,
    companies : {
        tesla : {
            companyName : "Tesla",
            totalEmployee : 4500,
            location : "USA" 
        },
        twitter : "250B USD",
        spaceX : "200B USD"
    },
    kids : ["Danny", "Weny", "Rony", "Randy", "Jenny"]
}

console.log(personElon);
console.log(personElon.companies.tesla);
console.log(personElon.kids[0]);
console.log(personElon.kids.length);
let addKidsName = personElon.kids.push("Stew");
console.log(personElon.kids);
for (const kid of personElon.kids) {
    console.log(kid);
}
console.log(personElon.companies.tesla.location);




