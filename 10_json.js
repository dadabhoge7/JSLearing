

console.log(`// covert string to object by use JSON.parse();`);
const postString =`{
    "User ID" : 1,
    "ID" : 1,
    "Title" : "OnTrip"
}`
console.log(typeof postString);
console.log(postString);
console.log(`Convert string to object by use JSON.parse();`);
const post = JSON.parse(postString);
console.log(typeof post);
console.log(post);


console.log(`// covert object to string by use JSON.Stringfy();`);
const person = {
    name : "Jenny",
    age : 27,
    country : "USA"
}
console.log(person);
console.log(typeof person);


const personJenny = JSON.stringify(person);
console.log(typeof personJenny);
console.log(personJenny);









