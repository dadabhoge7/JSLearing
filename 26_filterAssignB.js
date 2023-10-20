class Employee{
    constructor(emp_id, emp_name, emp_dpt, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name =emp_name
        this.emp_dpt = emp_dpt
        this.emp_salary = emp_salary
        this.emp_company = emp_company
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(24, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(24, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(24, "Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(24, "Monika", "IT", 40000, "Wipro");
const emp_vinay = new Employee(24, "Vinay", "IT", 75000, "TCS");
const emp_mahi = new Employee(24, "Mahi", "HR", 85000, "Infy");

let arrayEmp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_Monika, emp_vinay, emp_mahi];
console.table(arrayEmp);

console.log(`Step 01 : Employee from "TCS" `);
const tcsEmp = arrayEmp.filter((Employee)=>{
return Employee.emp_company == 'TCS';
});
console.log(tcsEmp);
tcsEmp.forEach((Employee) => {
    console.log(`CompanyName : ${Employee.emp_company}, EmployeeName : ${Employee.emp_name}`);
});

console.log(`Step 02 : Avg salary of employee from "wipro"`);
const wiproDetails = arrayEmp.filter((Employee)=>{
return Employee.emp_company == 'Wipro';
}).map((Employee)=>{
return Employee.emp_salary
});
console.log(wiproDetails);
let sum = 0;
for (let index = 0; index < wiproDetails.length; index++) {
    sum+= wiproDetails[index];
}
let avgSalary = sum/wiproDetails.length;
console.log(`Wipro company Avg salary : ${avgSalary}`);

console.log(`Step 03 : Avg salary of employee "Wipro" and "Infy" `);

const wiproInfy=arrayEmp.filter((Employee)=>{
    return Employee.emp_company=="Wipro" || Employee.emp_company=="Infy";
}).map((Employee)=>{
        return Employee.emp_salary;
});
console.log(wiproInfy);

let total=0;
for (let index = 0; index < wiproInfy.length; index++) {
 total+= wiproInfy[index];
}
let averageSalary=total/wiproInfy.length;
console.log(`Average salary Wipro And Infy : ${averageSalary}`);