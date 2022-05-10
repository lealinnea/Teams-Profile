const employee = require('../lib/employee');

describe('employee', () =>{
    describe('getName', () =>{
        it(`should send employees name`, () => {
            const newEmployee = new employee('name', '1', 'name.email');
            expect(newEmployee.getName()).toBe("Employee's Name: Name")
        });
    });
    describe('geID', () =>{
            it(`should send employees ID`, () => {
                const newEmployee = new employee('name', '1', 'name.email');
                expect(newEmployee.getID()).toBe("Employee's ID: 1")
            });
        });
    
        describe('getEmail', () =>{
            it(`should send employees email`, () => {
                const newEmployee = new employee('name', '1', 'name.email');
    
                expect(newEmployee.getEmail()).toBe(`Employee's Email Address: name.email`)
            });
        });

        describe('getRoll', () =>{
            it(`should send employees roll`, () => {
                const newEmployee = new employee('name', '1', 'name.email');
    
                expect(newEmployee.getRoll()).toBe(`Employee's Roll: Roll`)
            });
        });

    })
