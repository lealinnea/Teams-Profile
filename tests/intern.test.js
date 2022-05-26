const Intern = require('../lib/Intern');


    describe('Intern', () => {

        it(`should return the school of an Intern`, () => {
            const school = "Ohio State University";
            const userSchool = new Intern("Lea", 123456, "lea@email.com", school);
            expect(userSchool.getSchool()).toBe(school);
        });
    });
    
    // test case to return the role function
    describe('Intern', () => {
    
        it(`should return the role of the Intern by calling the getRole function`, () => {
            const role = "Intern";
            const userRole = new Intern("Lea", 123456, "lea@email.com", "Lea131", role);
            expect(userRole.getRole()).toBe(role);
        });
    });