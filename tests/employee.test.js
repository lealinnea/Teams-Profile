const Employee = require('../lib/Employee');


describe('Employee', () => {

    it(`should return the name of the employee`, () => {
        const name = "Lea";
        const person = new Employee(name);
        expect(person.name).toBe(name);
    });
});
describe('Employee', () => {
    it(`should return an employees ID`, () => {
        const id = 123456;
        const numberID = new Employee("Lea", id);
        expect(numberID.id).toBe(id);

    });
});

describe('Employee', () => {
    it(`should return an employees email`, () => {
        const email = "lea@email.com";
        const emailID = new Employee("Lea", 123456, email);
        expect(emailID.email).toBe(email);

    });
});



describe('Employee', () => {

    it(`should return the name of the employee by calling getName function`, () => {
        const name = "Lea";
        const person = new Employee(name);
        expect(person.getName()).toBe(name);
    });
});
describe('Employee', () => {
    it(`should return an employees ID  by calling getID function`, () => {
        const id = 123456;
        const numberID = new Employee("Lea", id);
        expect(numberID.getId()).toBe(id);

    });
});

describe('Employee', () => {
    it(`should return an employees email  by calling getEmail function`, () => {
        const email = "lea@email.com";
        const emailID = new Employee("Lea", 123456, email);
        expect(emailID.getEmail()).toBe(email);

    });
});

describe('Employee', () => {
    it(`should return an employees role by calling getRole function`, () => {
        const role = "Employee";
        const position = new Employee("Lea", 123456, "lea@email.com", role);
        expect(position.getRole()).toBe(role);

    });
});


