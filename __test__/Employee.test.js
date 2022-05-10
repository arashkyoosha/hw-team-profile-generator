const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should instantiate an employee instance", () => {
            const employee = new Employee();
            expect(typeof employee).toBe("object");
        });

        it("should set name via constrcutor arguments", () => {
            const name = "James";
            const employee = new Employee(name);
            expect(employee.name).toBe(name);
        });

        it("should set id via constrcutor arguments", () => {
            const id = 200;
            const employee = new Employee("James", id);
            expect(employee.id).toBe(id);
        });

        it("should set email via constrcutor arguments", () => {
            const email = "someone@somewhere.com";
            const employee = new Employee("James", 200, email);
            expect(employee.email).toBe(email);
        });
    });

    describe("Getter methods", () => {
        it("should get name via getName()", () => {
            const name = "James";
            const employee = new Employee(name, 200, "someone@somewhere.com");
            const employeeName = employee.getName();
            expect(employeeName).toBe(name);
        });

        it("should get id via getId())", () => {
            const id = 200;
            const employee = new Employee("James", id, "someone@somewhere.com");
            const employeeId = employee.getId();
            expect(employeeId).toBe(id);
        });

        it("should get email via getEmail()", () => {
            const email = "someone@somewhere.com";
            const employee = new Employee("James", 200, email);
            const employeeEmail = employee.getEmail();
            expect(employeeEmail).toBe(email);
        });

        it("should get role via getRole()", () => {
            const role = "Employee";
            const employee = new Employee("James", 200, "someone@somewhere.com");
            const employeeRole = employee.getRole();
            expect(employeeRole).toBe(role);
        });
    });
});
