const manager = require('../lib/manager');

describe('manager', () =>{
    describe('getRoll', () =>{
        it(`should send employees roll`, () => {
            const newEmployee = new manager('name', '1', 'name.email');
            expect(newEmployee.getRoll()).toBe("Roll: Manager")
        });
    });
});
