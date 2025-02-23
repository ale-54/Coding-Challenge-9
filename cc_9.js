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

//Task 2: Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize;
    }; //adding team size to manager's responsibilities
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }; //overriding to include team size
    calculateBonus() {
        return this.salary * 12 * .1
    }; //returns 10% of manager's annual salary

};

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

console.log(mgr1.getDetails()); //Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5
console.log(mgr1.calculateBonus()); //9600

//Task 3: Creating a Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }; 
    addEmployee(employee) {
        this.employees.push(employee);
    }; //adds an employee to the array
    listEmployees() {
        this.employees.forEach(employee => {console.log(employee.getDetails())});
    }; //logs all employee details
};

const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000
// Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5