function Bank(bankName, city, pin){
this.bankName=bankName;
this.city=city;
this.pin=pin;

this.show = function(){
    console.log(`Bank Details is : ${bankName}, ${city}, ${pin}`);
}  
}

const sbiBank = new Bank("SBI", "pune", 411012);
console.log(sbiBank);

const axisBank = new Bank("AXIS", "Chennai", 465012);
console.log(axisBank);

const hdfcBank = new Bank("HDFC", "Bangluru", 465012);
console.log(hdfcBank);

sbiBank.show();
axisBank.show();
hdfcBank.show();

Bank.prototype.country = "Bharat";
console.log(axisBank.country);
console.log(sbiBank.country);
console.log(hdfcBank.country);