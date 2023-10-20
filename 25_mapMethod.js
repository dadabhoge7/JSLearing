
console.log(`// Transform the array`);
myArray = [4,5,3,2,7];//To covert [16,25,9,2,7]

console.log(`//Normal Way`);
const tranformArray = [];
myArray.forEach((element)=>{
    tranformArray.push(Math.pow(element,2));
});
console.log(tranformArray);

console.log(`//Map Method Way`);
const arrayTransform = myArray.map((currentValuevalue)=>{
return currentValuevalue * currentValuevalue;
});
console.log(arrayTransform);

console.log(`Transfer [4,5,3,2,7] to [4,7,5,5,11]`);

arrayNun = [4,5,3,2,7];
const transFormArray = arrayNun.map((currentValue, index)=>{
return currentValue + index;
});
console.log(transFormArray);

console.log(`---------------------------------------------------------------------------------------`);

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

const arrayEmpName = arrayEmp.map((employee)=>{
return employee.emp_name
});
console.log(arrayEmpName);








