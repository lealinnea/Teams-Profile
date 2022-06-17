const Manager = require('../lib/Manager');

    describe('Manager', () => {

        it(`should return the office number`, () => {
            const number = 8675309;
            const officeManager = new Manager("Lea", 123456, "lea@email.com", number);
            expect(officeManager.getOfficeNumber()).toBe(number);
        });
    });
    
    // test case to return the role function
    describe('Manager', () => {
    
        it(`should return the role of the Manager by calling the getRole function`, () => {
            const role = "Manager";
            const userRole = new Manager("Lea", 123456, "lea@email.com", "Lea131", role);
            expect(userRole.getRole()).toBe(role);
        });
    });