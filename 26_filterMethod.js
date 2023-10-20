
const arrayNum = [42,50,3,2,7,22,11,40];
console.log(arrayNum);
console.log(`Filter out all the element which are > 10`);
const filterValue = arrayNum.filter((currentValue)=>{
return currentValue > 10;
});
console.log(filterValue);
console.log(`Filter out all the element which are < 10`);
const filterValue1 = arrayNum.filter((currentValue)=>{
return currentValue < 10;
});
console.log(filterValue1);



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

arrayEmp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_Monika, emp_vinay, emp_mahi];
console.table(arrayEmp);
console.log(`Give me list of TCS employee and salary`);

const empTCS = arrayEmp.filter((Employee)=>{
    return Employee.emp_company == 'TCS';
});
console.log(empTCS);

const empSalary = arrayEmp.map((Employee)=>{
return Employee.emp_salary;
});
console.log(empSalary);


console.log(`Give me the list off "Infy" employee Names with method chaining`);

const empNameInfy = arrayEmp.filter((Employee)=>{
return Employee.emp_company == 'TCS';
}).map((Employee)=>{
return Employee.emp_name
});
console.log(empNameInfy);



