function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;

  this.details = function () {
    console.log(`BankDetails : ${bankName}, ${location}, ${ifscCode}, ${branchCode}`);
  };
}

const yesBank = new Bank("YesBank", "Pune", "YES12345", 12345);
const sbiBank = new Bank("SBIBank", "Mumbai", "SBI12345", 45645);
const MahBank = new Bank("MahBank", "Nagpur", "MAH12345", 98745);
const axisBank = new Bank("AXISBank", "Nashik", "AXI12345", 46345);

console.log(`Bank Details : ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
console.log(`Bank Details : ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
console.log(`Bank Details : ${MahBank.bankName}, ${MahBank.location}, ${MahBank.ifscCode}, ${MahBank.branchCode}`);
console.log(`Bank Details : ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`SBI Bank Working Time : ${sbiBank.openTime} and ${sbiBank.closeTime}`);
console.log(`Bank Close Time - ${axisBank.bankName} before ${axisBank.closeTime}`);
console.log(`Bank Name : ${yesBank.bankName}, Banch code : ${yesBank.branchCode} and open time : ${yesBank.openTime}`);

