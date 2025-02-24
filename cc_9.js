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
        return `this.salary * 12`
    }
}

//Test Data
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

console.log(emp1.getDetails()); 

console.log(emp1.calculateAnnualSalary()); 
