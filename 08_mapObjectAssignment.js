class Bank {
    bankName
    location
    accountNo
    ifsc
    interestRate

    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName
        this.location = location
        this.accountNo = accountNo
        this.ifsc = ifsc
        this.interestRate = interestRate
    }
}
// Create objects for different banks
const axisBank = new Bank("AxisBank", "Mumbai", 12345, "AXIS123", 9.2);
const sbiBank = new Bank("SBIBank", "pune", 12345, "SBI123", 9.6);
const iciciBank = new Bank("ICICIBank", "Delhi", 12345, "ICICI123", 10.2);
const hdfcBank = new Bank("HDFCBank", "Nagpur", 12345, "HDFC123", 9.9);
const panjabBank = new Bank("PNB", "Panjab", 12345, "PNBS123", 9.1);

// Create a Map with accountNo as keys and bank objects as values

const bankMap = new Map();
bankMap.set(axisBank.accountNo, axisBank)
bankMap.set(sbiBank.accountNo, sbiBank);
bankMap.set(iciciBank.accountNo, iciciBank);
bankMap.set(hdfcBank.accountNo, hdfcBank);
bankMap.set(panjabBank.accountNo, panjabBank);

const totalNoKeys = bankMap.keys();
for (const key of totalNoKeys) {
    const data = bankMap.get(key);
    console.log(data.bankName, data.location, data.interestRate);
}

// for (const key of bankMap) {
//     console.log(`BankName :- ${key.bankName}, & Location :- ${key.location}`);
// }