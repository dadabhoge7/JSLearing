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
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(77, "Monika", "IT", 74000, "Wipro");
const emp_vinay = new Employee(88, "Vinay", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahi", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha,emp_rishi,emp_sonali,emp_Monika,emp_vinay,emp_mahi];

console.log(`----> Step 01. Employee Details in Descending order <----`);
arrayEmployees.sort((emp1, emp2)=>{
return emp1.emp_id > emp2.emp_id ? -1 : 1 ;
}).forEach(Employee => {
   console.log(`EmpID : ${Employee.emp_id}, EmpName : ${Employee.emp_name}, EmpDpt : ${Employee.emp_dpt}`); 
});

console.log(`----> Step 02. Employee department in ascending order <----`);
arrayEmployees.sort((emp1, emp2)=>{
    return emp1.emp_dpt > emp2.emp_dpt ? 1 : -1 ;
    }).forEach(Employee => {
       console.log(`EmpID : ${Employee.emp_id}, Department : ${Employee.emp_dpt}, Company : ${Employee.emp_company}`); 
    });

console.log(`----> Step 03. Employee Salary in Descending order <----`);
arrayEmployees.sort((emp1,emp2)=>{
return emp1.emp_salary > emp2.emp_salary ? -1: 1;
}).forEach((Employee)=>{
    console.log(`EmpID : ${Employee.emp_id}, Salary : ${Employee.emp_salary}, Company : ${Employee.emp_company}`); 
});













