//Task 1 - Creating an Employee Class
class Employee { //Creating Class
    constructor(name, id, department, salary) {
        this.name = name,
        this.id = id,
        this.department = department,
        this.salary = salary
    } 
    getDetails() { //Creating method to get employee details
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }
    calculateAnnualSalary() { //Creating a method to return employee annual salary
        return this.salary * 12
    }
}

//Test Data
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

console.log(emp1.getDetails()); 

console.log(emp1.calculateAnnualSalary()); 

//Task 2 - Creating A Manager Class
class Manager extends Employee{ //Making Manager Class
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary),
        this.teamSize = teamSize
    }
    getDetails(){ //Updating method to include team size
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }
    calculateBonus(){ //Calculating Manager Bonus
        return (this.salary * 12) * 0.1
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus()); 

//Task 3 - Creating a Company Class
class Company { //Creating Company Class 
    constructor(name) {
        this.name = name,
        this.employees = []
    }
    addEmployee(employee){ //Adding Employees to the list
        this.employees.push(employee)
    }
    listEmployees(){ //Listing Employees 
        this.employees.forEach(emp => console.log(emp.getDetails()))
    }
}

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

//Task 4 - Implemented Payroll System
function calculateTotalPayroll() {
    return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0);
}
    console.log(calculateTotalPayroll()); 

