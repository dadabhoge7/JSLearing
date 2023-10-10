console.log(`-> Step 01. Create object "bankSbi"`);
let bankSbi = {
    bankName : "State Bank Of India",
    accountHolderName : "Dada",
    IFCCode : "SBIN123456",
    accountNo : 123645654890
}
console.log(bankSbi);
console.log(`-> Step 02. Create object "bankLocation"`);
let bankLocation = {
    street : "Hadapsar",
    city : "pune",
    pinCode : 121314
}
console.log(bankLocation);
console.log(`-> Step 03. clone the "bankSbi" & "bankLoction" using "assign()" method`);

Object.assign(bankSbi,bankLocation);
console.table(bankSbi);

console.log(`-> Step 04. Create object "rateOfInterest"`);

let rateOfInterest = {
    homeLoanInterest : "10%",
    personalLoanInterest : "12%",
    dueInterest : "8%" 
}
console.log(rateOfInterest);
console.log(`-> Step 05. merge the object "bankSbi" , "bankLocation" & "rateOfInterest" into new object "sbiDetails"`);

let sbiDetails = Object.assign({},bankSbi ,bankLocation, rateOfInterest )
console.table(sbiDetails);
console.log(`-> Step 06. Traverse this merged object "sbiDetails"`);

for (const index in sbiDetails) {
    const element = sbiDetails[index];
console.log(` ${index} : ${element}`);
}