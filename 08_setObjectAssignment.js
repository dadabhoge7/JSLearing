class Bank{
    bankName  
    location
    accountNo
    ifsc
    interestRate
       constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}

//Create objects - axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, panjab_bank
const axisBank=new Bank("AXIS","Mumbai",123456789,"AXIs12345",10);
const sbiBank=new Bank("SBI","Pune",234567891,"SBI23451",14);
const iciciBank=new Bank("ICICI","Nagpur",9741123,"ICICI456985",15);
const kotakBank=new Bank("KOTAK","Nashik",89647789,"KOTAK456985",11);
const hdfcBank=new Bank("HDFC","Solapur",1789963,"HDFC456985",9);
const panjabBank=new Bank("PNB","KOLHAPUR",227556644,"PNB456985",15);

//Add all object elements in a Set and Traverse this Set using for of loop then just log on
//console - Bank name and Location

const bankSet=new Set();
bankSet.add(axisBank);
bankSet.add(sbiBank);
bankSet.add(iciciBank);
bankSet.add(kotakBank);
bankSet.add(hdfcBank);
bankSet.add(panjabBank);

for (const key of bankSet) {
    console.log(`BankName :- ${key.bankName}, & Location :- ${key.location}`);
}