const employee = require('../lib/intern');

describe('intern', () =>{
    describe('getSchool', () =>{
        it(`should send interns school`, () => {
            const newEmployee = new employee('name', '1', 'name.email');
            expect(newEmployee.getName()).toBe("Employee's Name: Name")
        });
    });
        describe('getEmpRoll', () =>{
            it(`should send employees roll`, () => {
                const newEmployee = new employee('name', '1', 'name.email');
                expect(newEmployee.getRoll()).toBe(`Employee's Roll: Intern`)
            });
        });

    });
