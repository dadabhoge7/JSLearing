class Employee{
    // emp_id
    // emp_name
    // emp_dpt
    // emp_salary
    // emp_company
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


arrayEmp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_Monika, emp_vinay, emp_mahi];
console.table(arrayEmp);

console.log(`----> Find the employee working in "TCS"<----`);
arrayEmp.forEach((Employee)=>{
    if (Employee.emp_company == "TCS") {
        console.log(`EmployeeName : ${Employee.emp_name} , EmployeeCompanyName : ${Employee.emp_company}` );
    }
});

console.log(`----> Find the employee working in "finance" department <----`);
arrayEmp.forEach((Employee)=>{
    if (Employee.emp_dpt == "Finance") {
        console.log(`EmployeeName : ${Employee.emp_name} , EmployeeCompanyName : ${Employee.emp_dpt}` );
    }
});

console.log(`----> Find the employee whose name start with "R" <----`);
arrayEmp.forEach((employee)=>{
if (employee.emp_name.startsWith('R')) {
    console.log(employee.emp_id, employee.emp_name, employee.emp_dpt, employee.emp_salary, employee.emp_company);
}
});

console.log(`----> Find the employee whose salary is greater than "75000" <----`);
arrayEmp.forEach((Employee)=>{
    if (Employee.emp_salary > 75000) {
        console.log(`EmployeeName : ${Employee.emp_name} , EmployeeCompanyName : ${Employee.emp_dpt} , EmployeeSalary : ${Employee.emp_salary}` );
    }
});

console.log(`----> Find the employee whose salary is greater than or equal "50000" and from "IT" department <----`);
arrayEmp.forEach((Employee)=>{
    if (Employee.emp_salary >= 50000 && Employee.emp_dpt=="IT") {
        console.log(Employee);
    }
});

console.log(`----> Find out all the employee from company "Infy" <----`);
arrayEmp.forEach((Employee)=>{
    if (Employee.emp_company == "Infy") {
        console.log(Employee);
    }
});
