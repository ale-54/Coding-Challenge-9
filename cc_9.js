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

//Task 4: modified to consider bonuses for managers
    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.calculateBonus();
    };
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

//Task 4: Implementing a Payroll System
    calculateTotalPayroll() {
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0);
    }; //returns the sum of all employees (including manager)

//Task 5: adding method in company class
    promoteToManager(employee,teamSize) {
        const index = this.employees.indexOf(employee);
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
    };
};

const company = new Company("TechCorp");
company.addEmployee(emp1); //Alice Johnson info
company.addEmployee(mgr1); //John Smith info
company.listEmployees();
// Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000
// Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5

//Task 4: Implementing a Payroll System
console.log(company.calculateTotalPayroll()); //165600

//Task 5: Implementing Promotions
company.promoteToManager(emp1, 3); //Alice info -> manager
company.listEmployees();
//Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3
//Manager: John Smith, Id: 201, Department: IT, Salary: 8000, Team Size: 5