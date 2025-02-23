//Task 1: Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }; //employee details
    calculateAnnualSalary() {
        return this.salary * 12
    }; //employee's annual salary
};

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

console.log(emp1.getDetails()); //"Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
console.log(emp1.calculateAnnualSalary()); //60000