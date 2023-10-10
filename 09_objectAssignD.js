console.log(`=================Step-I Create Object==========================`);
const professor = {
    name : "Prof.Dr.John",
    designation : "Sr.Professor",
    department : "Physics",
    clgName : "Deccan collage of california",
    location : "USA",
}
console.log(professor);
console.log(`-------------------------------------------------------------------------------------------------`);


console.log(`=================Step-II Include nested object degree==========================`);
professor.degree = {
    Engineering : "CSC",
    PHD : "ADV Computing",
    location : "California"
}
console.log(professor.degree);
console.log(professor);
console.log(`-------------------------------------------------------------------------------------------------`);


console.log(`=================Step-III Add Array of certificates==========================`);
professor.certificate = ["Hacker Rank Participation","certificate in IFE course","certificate in Adv programming"];
console.log(professor.certificate);
console.log(professor);
console.log(`-------------------------------------------------------------------------------------------------`);


console.log(`=================Step-IV add Total Experience==========================`);
professor.exp = {
    totalExperiance : "14 Years"
}
console.log(professor.exp);
console.log(professor);
console.log(`-------------------------------------------------------------------------------------------------`);


console.log(`=================Step-V Modify existing property==========================`);
professor.department="Chemistry";
console.log(`Modify property Department : ${professor.department}`);
console.log(professor);
console.log(`-------------------------------------------------------------------------------------------------`);


console.log(`=================Step-VI Add new certificate end of array==========================`);
const addCir = professor.certificate.push("Oracle Certified");
console.log(professor.certificate);
console.log(professor);
console.log(`-------------------------------------------------------------------------------------------------`);


console.log(`=================Step-VII log the last element of array certificate==========================`);
console.log(professor.certificate[professor.certificate.length-1]);

console.log(`-------------------------------------------------------------------------------------------------`);

console.log(`=================Step-VIII log complete object==========================`);
console.log(professor);
console.log(`-------------------------------------------------------------------------------------------------`);
console.log(`=================Step-IX Traverse array certificate using for off loop==========================`);
for (const certificate of professor.certificate) {
    console.log(certificate);
}

