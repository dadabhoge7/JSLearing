
let personalDetails = {
firstName : "Dada",
lstName : "Bhoge",
isMarried : false
}

let collageDetails = {
    clgName : "SBPCOE",
    location : "Indapur"
}
console.log(`------------STEP 01--------------`);
console.log(`Personal Details : ${personalDetails.firstName}, ${personalDetails.lstName}, ${personalDetails.isMarried}`);
console.log(`------------STEP 02--------------`);
console.log(`Collage Details : ${collageDetails.clgName}, ${collageDetails.location} `);
console.log(`------------STEP 03--------------`);
let details = Object.assign(personalDetails,collageDetails);
console.log(`Merge Personal Details and Collage Details : ${details.firstName}, ${details.lstName}, ${details.location}, ${details.clgName}, ${details.location}`);
console.log(`------------STEP 04--------------`);
let friendName = ["Shree", "Shiva", "Suraj", "Nikhil"];
console.log(`My firendsName Array : [ ${friendName} ]`);
Object.freeze(friendName);
console.log(`------------STEP 05--------------`);
console.log(`Traverse array using for of loop`);
for (const element of friendName) {
    console.log(element);
}
console.log(`------------STEP 06--------------`);
 let company = "Codemind Technology";
 console.log(`My String : ${company}`);
 console.log(`--> Q.Reverse only word "Technology" <--`);
let reverse = " ";
 for (let index = company.length-1; index >=0; index--) {
    
    let char = company.charAt(index);
    if (char == ' ') {
        break;
    }
    else{
        reverse = reverse + char;
    }
 }
console.log(reverse);