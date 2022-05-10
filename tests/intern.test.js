const employee = require('../lib/employee');

describe('intern', () =>{
    describe('getSchool', () =>{
        it(`should send intens school`, () => {
            const newEmployee = new employee('name', '1', 'name.email');
            expect(newEmployee.getName()).toBe("Employee's Name: Name")
        });
    });
        describe('getEmpRoll', () =>{
            it(`should send employees roll`, () => {
                const newEmployee = new employee('name', '1', 'name.email');
    
                expect(newEmployee.getEmail()).toBe(`Employee's Roll: Roll`)
            });
        });

    })
