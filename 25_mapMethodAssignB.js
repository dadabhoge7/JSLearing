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
const emp_Monika = new Employee(24, "Monika", "IT", 74000, "Wipro");
const emp_vinay = new Employee(24, "Vinay", "IT", 75000, "TCS");
const emp_mahi = new Employee(24, "Mahi", "HR", 85000, "Infy");

let arrayEmp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_Monika, emp_vinay, emp_mahi];
console.table(arrayEmp);

console.log(`Step 01 :- List of all employee salary log new Array`);
let empSalaryList = [];
const salaryList = arrayEmp.map((Employee)=>{
    return empSalaryList.push(Employee.emp_salary);
});
console.log(empSalaryList);

console.log(`Step 02 :- List of all Departments`);
const dptList = arrayEmp.map((Employee)=>{
return Employee.emp_dpt;
});
console.log(dptList);

console.log(`Step 03 :- List of all Employee ID`);
const empId = arrayEmp.map((Employee)=>{
    return Employee.emp_id
});
console.log(empId);


