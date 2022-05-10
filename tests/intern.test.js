const intern = require('../lib/intern');

describe('intern', () =>{
    describe('getSchool', () =>{
        it(`should send interns school`, () => {
            const newEmployee = new intern('name', '1', 'name.email', 'Ohio State University');
            expect(newEmployee.getSchool()).toBe("Person is going to Ohio State University")
        });
    });
        describe('getEmpRoll', () =>{
            it(`should send employees roll`, () => {
                const newEmployee = new intern('name', '1', 'name.email');
                expect(newEmployee.getRoll()).toBe(`Roll: Intern`)
            });
        });

    });
